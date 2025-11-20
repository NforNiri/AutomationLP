# Quick Strapi Content Setup

## Option 1: Manual Entry (Recommended - 5 minutes)

1. **Login** to Strapi: http://localhost:1337/admin
2. Go to **Content Manager** → **Landing Page** (under Single Types)
3. Fill in each section using the reference data below
4. Click **Save** then **Publish**

### Reference Data (Copy & Paste)

**Hero Section:**
- Title: `AI Automations That Actually Work`
- Subtitle: `Stop wasting time on repetitive tasks. We build custom AI solutions that integrate seamlessly with your existing systems—no fluff, just results.`
- CTA Text: `Book Free Audit`
- CTA Link: `#contact`
- Secondary CTA Text: `See How It Works`
- Secondary CTA Link: `#process`
- Badge Text: `Trusted by 50+ businesses`

**Social Proof:**
- Title: `Trusted by businesses like yours.`
- Clients: Add 6 items with names: TechCorp, DataFlow, AutoSys, CloudBase, LogiTrack, PropHub

**Use Cases:**
- Title: `Built for Your Industry`
- Subtitle: `See how businesses like yours are saving hours every day`
- Cases: Add 3 items:
  1. Label: Real Estate, Title: Automated Lead Qualification, Icon: Home, Stat: 12+ hours saved per week
  2. Label: Logistics, Title: Smart Dispatch System, Icon: Truck, Stat: 30% faster deliveries
  3. Label: E-commerce, Title: Order Management Bot, Icon: ShoppingCart, Stat: 85% support automation

---

## Option 2: API Import (If permissions are fixed)

If the API endpoint is accessible, use this JSON payload via Postman or curl:

```bash
curl -X PUT http://localhost:1337/api/landing-page \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d @backend/scripts/seed-data.json
```

---

## Troubleshooting

**Issue:** "Cannot find Landing Page in Content Manager"
- **Solution:** Check that Strapi restarted after creating schemas. Run `npm run develop` in backend/ folder.

**Issue:** "Forbidden" or 405 errors
- **Solution:** 
  1. Go to **Settings** → **Users & Permissions** → **Roles** → **Authenticated**
  2. Find **Landing-page** → Check ✓ `find` and `update`
  3. Save and try again
