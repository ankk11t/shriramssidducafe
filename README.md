# Shri Ram's Siddu Cafe — Rishikesh

Website for **Shri Ram's Siddu Cafe** (also listed as *Siya Ram's Siddu Cafe* on Swiggy & Zomato), located at Shop No. 2, Aswal Ji Market, AIIMS Road, near Seema Dental College, Rishikesh, Uttarakhand 249203.

## Features
- **Interactive Pure Veg Menu (49 items)** with instant search, category filters, Tawa/Tandoor Parantha selectors, and direct in-cafe pricing.
- **WhatsApp Order Cart** that formats the customer's selected items, order type, and estimated total into a ready-to-send WhatsApp message for `+91 97364 81476` (plus clipboard copy).
- **Verified 5-Star Guest Reviews (27 reviews)** filterable by topic (Himachali Siddu, Atta Momos, Kulcha & Chur Chur Naan, Hygiene & Hospitality).
- **Real Cafe & Food Photo Gallery** with click-to-enlarge lightbox.
- **Location, Hours & Embedded Google Map** plus direct Swiggy, Zomato, Call, and Google Maps links.

## Local Preview
```bash
npm run dev
```
Then open `http://127.0.0.1:4174`.

## Deploy on GitHub + Vercel
1. Create a new GitHub repository and push the contents of `shri-rams-siddu-cafe/`.
   ```bash
   git init
   git add .
   git commit -m "Initial Shri Ram's Siddu Cafe website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import that GitHub repository.
3. Leave **Framework Preset** as **Other** (no build command needed; static files serve directly from the root).
4. Click **Deploy**. `vercel.json` automatically configures caching headers for `assets/images/` and security headers.
