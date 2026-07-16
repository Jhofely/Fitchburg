# Apartment photo assets

The landing uses WebP files from this folder:

- `00-cover.webp`
- `01-kitchen-main.webp`
- `02-closet.webp`
- `03-bedroom.webp`
- `04-bathroom-wide.webp`
- `05-fridge.webp`
- `06-bathroom-vanity.webp`
- `07-range.webp`
- `08-laundry.webp`
- `09-open-living.webp`
- `10-bedroom-view.webp`
- `11-open-layout-wide.webp`

`00-cover.webp` is the hero image. `whatsapp-preview.jpg` is the furnished
1200x630 social sharing image used by Open Graph and WhatsApp previews.

## Convert originals to WebP

Put the original `.jpg`, `.jpeg`, or `.png` files in `public/photos/source` using
these source names:

- `00-cover`
- `01-kitchen-main`
- `02-closet`
- `03-bedroom`
- `04-bathroom-wide`
- `05-fridge`
- `06-bathroom-vanity`
- `07-range`
- `08-laundry`
- `09-open-living`
- `10-bedroom-view`
- `11-open-layout-wide`

Then run:

```bash
npm run photos:webp
```

If a WebP file is missing, the app shows a labeled fallback tile until the real
photo is added.
