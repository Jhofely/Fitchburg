<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid request']);
    exit;
}

function field(array $data, string $key): string
{
    return trim((string)($data[$key] ?? ''));
}

function clean_line(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

if (field($data, 'website') !== '') {
    echo json_encode(['ok' => true, 'message' => 'Request received']);
    exit;
}

$firstName = clean_line(field($data, 'firstName'));
$lastName = clean_line(field($data, 'lastName'));
$email = clean_line(field($data, 'email'));
$phone = clean_line(field($data, 'phone'));
$moveInDate = clean_line(field($data, 'moveInDate'));
$bedrooms = clean_line(field($data, 'bedrooms'));
$tourType = clean_line(field($data, 'tourType'));
$message = trim((string)($data['message'] ?? ''));
$source = clean_line(field($data, 'source') ?: '633-639 Main Street Apartments');
$submittedAt = clean_line(field($data, 'submittedAt') ?: gmdate('c'));

if (
    $firstName === '' ||
    $lastName === '' ||
    $email === '' ||
    $phone === '' ||
    $moveInDate === '' ||
    $bedrooms === '' ||
    $tourType === ''
) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Invalid email']);
    exit;
}

$to = 'info@rededi.com';
$subject = 'New apartment tour request - 633-639 Main Street';
$safeMessage = trim(strip_tags($message));

$body = implode("\n", [
    'New apartment tour request',
    '',
    'Property: ' . $source,
    'Name: ' . $firstName . ' ' . $lastName,
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Move-in date: ' . $moveInDate,
    'Bedrooms: ' . $bedrooms,
    'Preferred tour: ' . $tourType,
    '',
    'Message:',
    $safeMessage !== '' ? $safeMessage : '(No message provided)',
    '',
    'Submitted at: ' . $submittedAt,
    'Page: ' . ($_SERVER['HTTP_REFERER'] ?? 'Unknown'),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
]);

$host = preg_replace('/[^a-zA-Z0-9.-]/', '', $_SERVER['HTTP_HOST'] ?? 'rededi.com');
$from = 'no-reply@' . ($host !== '' ? $host : 'rededi.com');

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: 633-639 Main Street <' . $from . '>',
    'Reply-To: ' . $firstName . ' ' . $lastName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, wordwrap($body, 70), implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Unable to send email']);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Request sent']);
