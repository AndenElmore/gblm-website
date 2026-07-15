// areas.ts — Content + SEO data for each "Areas We Serve" location page.
// One entry per town (keyed by URL slug). Each entry holds UNIQUE, genuinely local
// copy (that town's terrain, property types, local context) so every /locations/[city]
// page is a real hyperlocal page — NOT a thin/duplicate "doorway" page (which Google
// penalizes). Rendered by src/app/locations/[city]/page.tsx.

export type AreaSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type AreaFAQ = { q: string; a: string };
export type AreaLink = { label: string; href: string };

export type AreaContent = {
  slug: string;
  town: string; // display name, e.g. "Watkinsville"
  name: string; // H1
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: AreaSection[];
  faqs: AreaFAQ[];
  nearby: AreaLink[]; // links to other area pages
  schemaDescription: string;
};

// Shared service links — rendered as "Services We Offer Here" on every area page
// (service <-> area interlinking per the local-SEO method).
export const SERVICE_LINKS: AreaLink[] = [
  { label: "Land Clearing", href: "/services/land-clearing" },
  { label: "Grading & Site Prep", href: "/services/grading-site-prep" },
  { label: "Driveways & Access Roads", href: "/services/driveways-access-roads" },
  { label: "Bush Hogging", href: "/services/bush-hogging" },
  { label: "Stump Grinding", href: "/services/stump-grinding" },
  { label: "Shrub & Bush Removal", href: "/services/shrub-bush-removal" },
  { label: "Tree & Storm Cleanup", href: "/services/tree-storm-cleanup" },
  { label: "Seeding & Tilling", href: "/services/seeding-tilling" },
  { label: "Weed Control Spraying", href: "/services/weed-control" },
  { label: "Lawn Rolling", href: "/services/lawn-rolling" },
];

export const areas: Record<string, AreaContent> = {
  // ---------------------------------------------------------------------------
  watkinsville: {
    slug: "watkinsville",
    town: "Watkinsville",
    name: "Land Clearing & Land Management in Watkinsville, GA",
    heroImage: "/images/grading-site-prep-new.jpg",
    heroAlt: "Land management and grading on a Watkinsville, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in Watkinsville, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, grading, bush hogging, and land management in Watkinsville, GA and Oconee County. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "As the seat of Oconee County, Watkinsville blends historic character with fast-growing residential acreage — and a lot of that land needs work. Ground Breaker Land Management provides land clearing, grading, and full land management right here in Watkinsville, helping homeowners, builders, and landowners make the most of their property.",
    sections: [
      {
        heading: "Serving Watkinsville Property Owners",
        paragraphs: [
          "Watkinsville has grown from a quiet county seat into one of the most sought-after places to own land in the Athens area — and with that growth comes a steady need for clearing, grading, and site work. From wooded homesites off Mars Hill Road to larger tracts and equestrian properties out toward Farmington, we help owners turn raw or overgrown ground into land they can build on and enjoy.",
          "The terrain around Watkinsville is classic Oconee County — rolling ground, Georgia red clay, and a mix of hardwood and pine. That means clearing and grading here has to account for slope and drainage, not just knocking down trees. We work this ground every week and know how to set a property up right.",
        ],
      },
      {
        heading: "Common Projects Around Watkinsville",
        bullets: [
          "Clearing wooded homesites for new construction",
          "Grading and drainage work on sloped lots",
          "Building and refreshing gravel driveways on larger properties",
          "Bush hogging pasture and fields on rural acreage",
          "Stump grinding and cleanup after tree work",
        ],
      },
    ],
    faqs: [
      { q: "Do you serve all of Watkinsville and Oconee County?", a: "Yes. Watkinsville is right in the heart of our service area, and we cover the surrounding Oconee County communities as well." },
      { q: "Can you clear a homesite for new construction in Watkinsville?", a: "Absolutely. Clearing and prepping homesites is one of our most common Watkinsville jobs — and we can grade and prep the site afterward too." },
      { q: "Do you offer free estimates in Watkinsville?", a: "We do. Call (706) 510-3942 for a free, no-pressure estimate, and ask about our financing options." },
    ],
    nearby: [
      { label: "Bogart", href: "/locations/bogart" },
      { label: "Bishop", href: "/locations/bishop" },
      { label: "Farmington", href: "/locations/farmington" },
    ],
    schemaDescription: "Land clearing, grading, bush hogging, and land management serving Watkinsville, GA and Oconee County.",
  },

  // ---------------------------------------------------------------------------
  bogart: {
    slug: "bogart",
    town: "Bogart",
    name: "Land Clearing & Land Management in Bogart, GA",
    heroImage: "/images/service-clearing-upright.jpg",
    heroAlt: "Land clearing on a Bogart, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in Bogart, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, grading, bush hogging, and land management in Bogart, GA. Locally owned and based right here. Fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Bogart is home base for Ground Breaker Land Management — so when it comes to land clearing, grading, and land management in and around Bogart, nobody knows the ground better. We help local homeowners, farmers, and landowners reclaim and improve their property across this fast-growing west-Athens community.",
    sections: [
      {
        heading: "Your Local Bogart Land Team",
        paragraphs: [
          "Sitting where Oconee, Clarke, and Barrow counties meet on the west side of Athens, Bogart has seen rapid growth alongside plenty of land that's still rural and wooded. That mix means we see everything here — from clearing overgrown residential lots in newer subdivisions to opening up pasture and acreage on longtime family land.",
          "Being based in Bogart means we're close by, we know the local terrain and how water moves across it, and we can get to your property quickly. When you hire us, you're hiring your neighbors — not a crew driving in from two counties over.",
        ],
      },
      {
        heading: "Common Projects Around Bogart",
        bullets: [
          "Clearing overgrown residential lots and acreage",
          "Brush, privet, and underbrush removal along fence lines",
          "Grading and driveway work for homes and shops",
          "Bush hogging fields and pastures",
          "Storm cleanup and fallen tree removal",
        ],
      },
    ],
    faqs: [
      { q: "Are you based in Bogart?", a: "Yes — Bogart is our home base, so we're local, close by, and know this ground better than anyone." },
      { q: "How quickly can you get to a Bogart property?", a: "Being right here in Bogart, we can usually get out to look at local jobs quickly. Call (706) 510-3942 and we'll get you on the schedule." },
      { q: "Do you handle both small lots and large tracts in Bogart?", a: "We do. No job is too big or too small — from a single overgrown lot to multi-acre tracts." },
    ],
    nearby: [
      { label: "Watkinsville", href: "/locations/watkinsville" },
      { label: "Athens", href: "/locations/athens" },
      { label: "North High Shoals", href: "/locations/north-high-shoals" },
    ],
    schemaDescription: "Locally based land clearing, grading, bush hogging, and land management serving Bogart, GA.",
  },

  // ---------------------------------------------------------------------------
  bishop: {
    slug: "bishop",
    town: "Bishop",
    name: "Land Clearing & Land Management in Bishop, GA",
    heroImage: "/images/bushhogging-after.jpg",
    heroAlt: "Bush hogging a field on a Bishop, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in Bishop, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, bush hogging, grading, and land management in Bishop, GA and southern Oconee County. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Down in southern Oconee County, Bishop keeps its rural, agricultural character — rolling fields, pastureland, and plenty of acreage that needs regular upkeep. Ground Breaker Land Management provides land clearing, bush hogging, and land management throughout Bishop, keeping local land clean, usable, and productive.",
    sections: [
      {
        heading: "Serving Bishop & Southern Oconee County",
        paragraphs: [
          "Bishop is farm and field country. A lot of the work we do here is about maintaining and reclaiming open land — bush hogging pastures that have grown up, clearing brush along fence lines, and keeping fields and food plots in shape. It's the kind of ongoing land management that rural property demands.",
          "We also handle the bigger jobs: clearing wooded tracts, grading for new barns or homesites, and cutting in access roads across larger parcels. Whatever the acreage, we help Bishop landowners keep their property working for them.",
        ],
      },
      {
        heading: "Common Projects Around Bishop",
        bullets: [
          "Bush hogging pastures, fields, and hay ground",
          "Clearing brush and saplings from overgrown acreage",
          "Food-plot prep and seeding for wildlife and hunting land",
          "Grading and access roads for barns and outbuildings",
          "Weed control and fertilizer spraying on fields",
        ],
      },
    ],
    faqs: [
      { q: "Do you do regular bush hogging for fields in Bishop?", a: "Yes — field and pasture bush hogging is one of the most common jobs we do in the Bishop area. We can do a one-time cut or set up seasonal maintenance." },
      { q: "Can you help with hunting land and food plots?", a: "Absolutely. We prep and seed food plots and can clear and maintain hunting land throughout southern Oconee County." },
      { q: "Do you serve rural properties outside the town of Bishop?", a: "We do. We cover Bishop and the surrounding rural areas of southern Oconee County. Call (706) 510-3942 for a free estimate." },
    ],
    nearby: [
      { label: "Watkinsville", href: "/locations/watkinsville" },
      { label: "Farmington", href: "/locations/farmington" },
      { label: "North High Shoals", href: "/locations/north-high-shoals" },
    ],
    schemaDescription: "Land clearing, bush hogging, grading, and land management serving Bishop, GA and southern Oconee County.",
  },

  // ---------------------------------------------------------------------------
  "north-high-shoals": {
    slug: "north-high-shoals",
    town: "North High Shoals",
    name: "Land Clearing & Land Management in North High Shoals, GA",
    heroImage: "/images/service-cleanup-hq.jpg",
    heroAlt: "Tree and storm cleanup on a North High Shoals, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in North High Shoals, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, tree cleanup, bush hogging, and land management in North High Shoals, GA. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Tucked along the Apalachee River in Oconee County, North High Shoals is a small, wooded community where properties often back up to trees, water, and rolling terrain. Ground Breaker Land Management provides land clearing, tree cleanup, and land management throughout North High Shoals for owners looking to open up and care for their land.",
    sections: [
      {
        heading: "Serving North High Shoals",
        paragraphs: [
          "With the Apalachee River running nearby and heavy tree cover across much of the area, North High Shoals properties tend to come with more woods, more brush, and more storm debris than average. That makes selective clearing, tree and limb cleanup, and brush removal especially common jobs here.",
          "We help owners open up wooded lots while protecting the mature trees worth keeping, clear debris after North Georgia storms, and keep the usable parts of their property clean and maintained — all with an eye on drainage given the low, wet ground near the river.",
        ],
      },
      {
        heading: "Common Projects Around North High Shoals",
        bullets: [
          "Selective clearing of wooded lots and homesites",
          "Tree, limb, and storm-debris cleanup",
          "Brush and underbrush removal",
          "Stump grinding after tree removal",
          "Grading with attention to drainage near low, wet ground",
        ],
      },
    ],
    faqs: [
      { q: "Can you clear a wooded lot but keep some trees in North High Shoals?", a: "Yes. Selective clearing is a common request here — we remove the unwanted growth while protecting the mature trees you want to keep." },
      { q: "Do you handle storm cleanup in North High Shoals?", a: "We do. Downed trees, broken limbs, and storm debris are frequent in this wooded, riverside area — we clear it and haul it off." },
      { q: "Do you offer free estimates?", a: "Yes. Call (706) 510-3942 for a free, no-pressure estimate, and ask about financing." },
    ],
    nearby: [
      { label: "Bishop", href: "/locations/bishop" },
      { label: "Watkinsville", href: "/locations/watkinsville" },
      { label: "Bogart", href: "/locations/bogart" },
    ],
    schemaDescription: "Land clearing, tree cleanup, bush hogging, and land management serving North High Shoals, GA.",
  },

  // ---------------------------------------------------------------------------
  farmington: {
    slug: "farmington",
    town: "Farmington",
    name: "Land Clearing & Land Management in Farmington, GA",
    heroImage: "/images/shrub-bush-removal.jpg",
    heroAlt: "Brush and shrub removal on a Farmington, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in Farmington, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, brush removal, bush hogging, and land management in Farmington, GA and southern Oconee County. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Along the US-441 corridor in southern Oconee County, Farmington is true country — large parcels, farmland, and wooded acreage that all need regular attention. Ground Breaker Land Management provides land clearing, brush removal, and land management across Farmington to keep rural property clean, open, and usable.",
    sections: [
      {
        heading: "Serving Farmington & Rural Oconee County",
        paragraphs: [
          "Farmington properties tend to be larger and more rural, which means land management here is often about scale — clearing bigger tracts, bush hogging wide fields, cutting in access roads to the back of a property, and keeping brush and saplings from taking over open ground.",
          "Whether you're reclaiming land that's grown up over the years, prepping acreage for a new barn or homesite, or just keeping your fields and fence lines in shape, we bring the right equipment for the wide-open Farmington terrain and get it done.",
        ],
      },
      {
        heading: "Common Projects Around Farmington",
        bullets: [
          "Clearing larger wooded tracts and acreage",
          "Bush hogging wide fields and pastures",
          "Brush, privet, and fence-line clearing",
          "Access roads to the back of large properties",
          "Grading and site prep for barns and homesites",
        ],
      },
    ],
    faqs: [
      { q: "Do you handle large rural tracts in Farmington?", a: "Yes. Larger parcels are common in Farmington, and we have the equipment to clear and maintain acreage of any size." },
      { q: "Can you cut in an access road to the back of my property?", a: "We can. Access roads to back fields, woods, and job sites are a common request on larger Farmington properties." },
      { q: "Do you serve the rural areas around Farmington?", a: "We do — Farmington and the surrounding rural parts of southern Oconee County. Call (706) 510-3942 for a free estimate." },
    ],
    nearby: [
      { label: "Bishop", href: "/locations/bishop" },
      { label: "Watkinsville", href: "/locations/watkinsville" },
      { label: "North High Shoals", href: "/locations/north-high-shoals" },
    ],
    schemaDescription: "Land clearing, brush removal, bush hogging, and land management serving Farmington, GA and southern Oconee County.",
  },

  // ---------------------------------------------------------------------------
  athens: {
    slug: "athens",
    town: "Athens",
    name: "Land Clearing & Land Management in Athens, GA",
    heroImage: "/images/location-hero-hq.jpg",
    heroAlt: "Land management on an Athens, GA property by Ground Breaker Land Management",
    metaTitle: "Land Clearing & Land Management in Athens, GA | Ground Breaker Land Management",
    metaDescription: "Land clearing, grading, bush hogging, and land management in Athens, GA and the surrounding area. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "From the edges of town to the wooded acreage on the outskirts, Athens has no shortage of property that needs clearing, grading, and upkeep. Ground Breaker Land Management provides land clearing and land management throughout the Athens area, helping homeowners, investors, and builders get their land in shape.",
    sections: [
      {
        heading: "Serving the Athens Area",
        paragraphs: [
          "Athens is a mix of everything — established in-town neighborhoods, growing suburban edges, and rural, wooded property on the outskirts toward Oconee County. That range means we handle a wide variety of work here: clearing overgrown lots for redevelopment, grading and drainage on residential property, and reclaiming larger wooded tracts on the fringes of town.",
          "Just west in Bogart, we're only a short drive from most of the Athens area, so we can get to local jobs easily. We help Athens property owners deal with overgrowth, storm damage, drainage headaches, and unusable land — turning problem property into something clean and workable.",
        ],
      },
      {
        heading: "Common Projects Around Athens",
        bullets: [
          "Clearing overgrown lots for redevelopment or resale",
          "Grading and drainage work on residential property",
          "Storm cleanup and fallen tree removal",
          "Brush, shrub, and overgrowth removal",
          "Stump grinding and lot cleanup",
        ],
      },
    ],
    faqs: [
      { q: "Do you serve the Athens area even though you're based in Bogart?", a: "Yes. Bogart is right on the west side of Athens, so we're close by and cover the Athens area regularly." },
      { q: "Can you clear an overgrown lot in Athens for redevelopment?", a: "Absolutely. Clearing overgrown lots for building, redevelopment, or resale is a common Athens-area job for us." },
      { q: "Do you offer free estimates in Athens?", a: "We do. Call (706) 510-3942 for a free, no-pressure estimate, and ask about our financing options." },
    ],
    nearby: [
      { label: "Bogart", href: "/locations/bogart" },
      { label: "Watkinsville", href: "/locations/watkinsville" },
      { label: "North High Shoals", href: "/locations/north-high-shoals" },
    ],
    schemaDescription: "Land clearing, grading, bush hogging, and land management serving Athens, GA and the surrounding area.",
  },
};

export const areaSlugs = Object.keys(areas);

// Ordered list for the "Areas We Serve" hub + footer links.
export const areaList: AreaLink[] = [
  { label: "Watkinsville", href: "/locations/watkinsville" },
  { label: "Bogart", href: "/locations/bogart" },
  { label: "Bishop", href: "/locations/bishop" },
  { label: "North High Shoals", href: "/locations/north-high-shoals" },
  { label: "Farmington", href: "/locations/farmington" },
  { label: "Athens", href: "/locations/athens" },
];
