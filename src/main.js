import './styles.css';

const listing = {
  name: '633-639 Main Street Apartments',
  address: '633-639 Main St, Fitchburg, MA 01420',
  phone: '(978) 870-7572',
  tel: '+19788707572',
  availableUnits: 10,
  startingRent: '$1,600',
  featuredRent: '$2,400',
  bedrooms: '1 & 2 bedrooms',
  bathrooms: 'Up to 2 baths',
  squareFeet: 'Up to 1,126 sq ft',
  availableDate: 'Available August 1, 2026',
  deposit: '$2,400 deposit on featured 2-bed unit',
  lease: '12-month lease',
};

const photos = [
  {
    src: '/photos/00-cover.webp',
    alt: 'Furnished open kitchen, dining, and living area with hardwood floors',
    label: 'Furnished open living',
  },
  {
    src: '/photos/01-kitchen-main.webp',
    alt: 'White shaker kitchen with granite counters and stainless appliances',
    label: 'Full kitchen',
  },
  {
    src: '/photos/04-bathroom-wide.webp',
    alt: 'Updated bathroom with granite vanity and full tub shower',
    label: 'Full bathroom',
  },
  {
    src: '/photos/03-bedroom.webp',
    alt: 'Bedroom with hardwood floors, tall ceiling, and ductless climate control',
    label: 'Bedroom',
  },
  {
    src: '/photos/05-fridge.webp',
    alt: 'Side-by-side stainless refrigerator with freezer doors open',
    label: 'Stainless refrigerator',
  },
  {
    src: '/photos/08-laundry.webp',
    alt: 'In-home all-in-one washer and dryer in a dedicated laundry closet',
    label: 'In-home laundry',
  },
  {
    src: '/photos/09-open-living.webp',
    alt: 'Unfurnished open kitchen and living area with hardwood floors',
    label: 'Open floor plan',
  },
  {
    src: '/photos/02-closet.webp',
    alt: 'Large closet with double doors and hardwood flooring',
    label: 'Large closets',
  },
  {
    src: '/photos/06-bathroom-vanity.webp',
    alt: 'Bathroom vanity with granite counter and white cabinetry',
    label: 'Granite vanity',
  },
  {
    src: '/photos/07-range.webp',
    alt: 'Electric range and microwave framed by white cabinetry',
    label: 'Stainless range',
  },
];

const featureStats = [
  ['10', 'available apartments'],
  [listing.startingRent, 'starting monthly rent'],
  ['12 min', 'walk to Fitchburg Station'],
  ['3 min', 'drive to Fitchburg State'],
];

const quickFacts = [
  ['Rent range', `${listing.startingRent} - ${listing.featuredRent}`],
  ['Layouts', listing.bedrooms],
  ['Featured unit', '2 bed / 2 bath / 1,126 sq ft'],
  ['Move-in', listing.availableDate],
  ['Included', 'Water, sewer, trash, snow removal'],
  ['Parking', 'Reserved parking for one vehicle'],
];

const amenities = [
  'Original hardwood floors',
  'Granite countertops',
  'Soft-close white cabinets',
  'Stainless steel appliances',
  'ENERGY STAR dishwasher and refrigerator',
  'All-in-one in-home washer/dryer',
  'Ductless heating and cooling',
  'Intercom and home security system',
  'Reserved parking included',
  'Near MBTA, Fitchburg State, restaurants, shops, parks, and bike trails',
];

const neighborhood = [
  ['Fitchburg Station', '12-minute walk / 0.6 mi'],
  ['Fitchburg State University', '3-minute drive / 1.5 mi'],
  ['Shopping centers', 'Within 1.3 mi'],
  ['Parks and recreation', '5 parks within 7.4 mi'],
];

function photoMarkup(photo, modifier = '') {
  return `
    <figure class="photo-frame ${modifier}" data-fallback="${photo.label}">
      <img src="${photo.src}" alt="${photo.alt}" loading="${modifier.includes('hero') ? 'eager' : 'lazy'}" />
      <figcaption>${photo.label}</figcaption>
    </figure>
  `;
}

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <a href="#top" class="brand" aria-label="633-639 Main Street Apartments home">
        <span class="brand-mark">633</span>
        <span>Main Street</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#apartments">Apartments</a>
        <a href="#photos">Photos</a>
        <a href="#location">Location</a>
        <a href="#tour">Tour</a>
      </nav>
      <a class="header-call" href="tel:${listing.tel}">${listing.phone}</a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-media" aria-hidden="true">
          ${photoMarkup(photos[0], 'hero-photo')}
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-copy">
          <p class="eyebrow">Downtown Fitchburg rentals</p>
          <h1 id="hero-title">${listing.name}</h1>
          <p class="hero-lede">
            Modern 1 and 2 bedroom apartments with bright open layouts, granite kitchens,
            in-home laundry, reserved parking, and MBTA access nearby.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#tour">Schedule a Tour</a>
            <a class="button secondary" href="tel:${listing.tel}">Call ${listing.phone}</a>
          </div>
          <div class="hero-proof" aria-label="Apartment highlights">
            ${featureStats
              .map(
                ([value, label]) => `
                  <div>
                    <strong>${value}</strong>
                    <span>${label}</span>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="availability-band" aria-label="Current availability">
        <p><strong>${listing.availableUnits} apartments available</strong></p>
        <p>Starting at ${listing.startingRent}/mo</p>
        <p>${listing.bedrooms}</p>
        <a href="#tour">Request a private tour</a>
      </section>

      <section id="apartments" class="section section-intro">
        <div class="section-heading">
          <p class="eyebrow">Apartment details</p>
          <h2>Everything a renter checks first, answered fast.</h2>
        </div>
        <div class="fact-grid">
          ${quickFacts
            .map(
              ([label, value]) => `
                <article class="fact-card">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section two-column">
        <div>
          <p class="eyebrow">Why this building rents well</p>
          <h2>Historic downtown character, updated for everyday comfort.</h2>
          <p class="body-copy">
            The building keeps the warm original hardwood floors and downtown bones,
            then adds the things renters ask for every day: granite counters, stainless
            appliances, soft-close cabinetry, two full bathrooms in the featured unit,
            mini-split heating and cooling, and laundry inside the apartment.
          </p>
          <div class="lease-note">
            <strong>${listing.lease}</strong>
            <span>${listing.deposit}. No pets allowed per current listing policy.</span>
          </div>
        </div>
        <div class="availability-list" aria-label="Available apartment options">
          <article>
            <span>1 Bedroom Apartments</span>
            <strong>From ${listing.startingRent}/mo</strong>
            <p>Modern finishes, efficient downtown layouts, and included water, sewer, and trash.</p>
          </article>
          <article>
            <span>Featured 2 Bedroom</span>
            <strong>${listing.featuredRent}/mo</strong>
            <p>Unit 305: 2 beds, 2 full baths, 1,126 sq ft, available August 1, 2026.</p>
          </article>
        </div>
      </section>

      <section id="photos" class="section photo-section">
        <div class="section-heading compact">
          <p class="eyebrow">Photo gallery</p>
          <h2>Bright finishes prospects can picture themselves living in.</h2>
        </div>
        <div class="gallery">
          ${photos.map((photo, index) => photoMarkup(photo, index === 0 ? 'gallery-large' : '')).join('')}
        </div>
      </section>

      <section class="section amenities-section">
        <div class="section-heading compact">
          <p class="eyebrow">Amenities</p>
          <h2>Practical upgrades that reduce move-in friction.</h2>
        </div>
        <ul class="amenity-list">
          ${amenities.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </section>

      <section id="location" class="section location-section">
        <div class="location-copy">
          <p class="eyebrow">Downtown Fitchburg</p>
          <h2>Close to transit, campus, daily errands, and green space.</h2>
          <p class="body-copy">
            Live near the MBTA Fitchburg line, Fitchburg State University, downtown
            restaurants and shops, with parks and bike trails close enough for weekday routines.
          </p>
        </div>
        <div class="location-list">
          ${neighborhood
            .map(
              ([place, detail]) => `
                <article>
                  <strong>${place}</strong>
                  <span>${detail}</span>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="tour" class="section tour-section" aria-labelledby="tour-title">
        <div class="tour-copy">
          <p class="eyebrow">Schedule your tour</p>
          <h2 id="tour-title">See the apartment before the August move-in window fills.</h2>
          <p class="body-copy">
            Tell us what layout you want and when you want to visit. A leasing contact will
            follow up to confirm availability and tour timing.
          </p>
          <div class="contact-strip">
            <span>Prefer to call?</span>
            <a href="tel:${listing.tel}">${listing.phone}</a>
          </div>
        </div>
        <form class="tour-form" aria-describedby="form-status" data-endpoint="">
          <div class="form-row two-fields">
            <label>
              First name
              <input name="firstName" autocomplete="given-name" required />
            </label>
            <label>
              Last name
              <input name="lastName" autocomplete="family-name" required />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" autocomplete="tel" required />
          </label>
          <div class="form-row two-fields">
            <label>
              Move-in date
              <input type="date" name="moveInDate" min="2026-08-01" required />
            </label>
            <label>
              Bedrooms
              <select name="bedrooms" required>
                <option value="">Select</option>
                <option>1 bedroom</option>
                <option>2 bedrooms</option>
                <option>Either works</option>
              </select>
            </label>
          </div>
          <label>
            Preferred tour
            <select name="tourType" required>
              <option value="">Select</option>
              <option>In-person tour</option>
              <option>Video tour</option>
              <option>Call me first</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4">I would like to schedule a tour at 633-639 Main Street.</textarea>
          </label>
          <button class="button primary form-submit" type="submit">Request Tour</button>
          <p id="form-status" class="form-status" aria-live="polite"></p>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <p>${listing.name}</p>
      <p>${listing.address}</p>
      <p>Pricing, availability, fees, and policies are subject to change.</p>
    </footer>

    <div class="mobile-cta" aria-label="Quick contact actions">
      <a href="tel:${listing.tel}">Call</a>
      <a href="#tour">Tour</a>
    </div>
  `;

  setupPhotoFallbacks();
  setupTourForm();
}

function setupPhotoFallbacks() {
  document.querySelectorAll('.photo-frame').forEach((frame) => {
    const image = frame.querySelector('img');
    image.addEventListener('error', () => {
      frame.classList.add('is-missing');
      image.setAttribute('aria-hidden', 'true');
    });
  });
}

function setupTourForm() {
  const form = document.querySelector('.tour-form');
  const status = document.querySelector('#form-status');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    const endpoint = form.dataset.endpoint || window.MANUS_TOUR_ENDPOINT;
    const button = form.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = 'Sending...';
    status.textContent = '';

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: listing.name,
            submittedAt: new Date().toISOString(),
            ...formData,
          }),
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }
      } else {
        localStorage.setItem('latestTourRequest', JSON.stringify(formData));
        await new Promise((resolve) => setTimeout(resolve, 450));
      }

      status.textContent = 'Thanks. Your tour request has been captured.';
      form.reset();
    } catch (error) {
      status.textContent = 'Please call the leasing team or try again in a moment.';
    } finally {
      button.disabled = false;
      button.textContent = 'Request Tour';
    }
  });
}

renderApp();
