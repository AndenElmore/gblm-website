// services.ts — Content + SEO data for each dedicated service page.
// One entry per service (keyed by URL slug). Each entry holds unique, long-form,
// locally-focused copy so every /services/[slug] page is a real topical-authority
// page (per the local-SEO delivery method), not thin/duplicate content.
// Rendered by src/app/services/[slug]/page.tsx.

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServiceFAQ = { q: string; a: string };

export type ServiceLink = { label: string; href: string };

export type ServiceContent = {
  slug: string;
  navLabel: string; // short label for breadcrumb / "Learn More" targets
  name: string; // H1
  keyword: string; // primary keyword this page targets
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // lead paragraph under H1
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  related: ServiceLink[]; // related service pages (interlinking)
  schemaServiceType: string;
  schemaDescription: string;
};

const AREAS = "Bogart, Watkinsville, Athens, and the surrounding Oconee County area";

export const services: Record<string, ServiceContent> = {
  // 1 -----------------------------------------------------------------------
  "land-clearing": {
    slug: "land-clearing",
    navLabel: "Land Clearing & Demolition",
    name: "Land Clearing in Oconee County & Athens, GA",
    keyword: "land clearing",
    heroImage: "/images/service-clearing-upright.jpg",
    heroAlt: "Ground Breaker Land Management crew clearing an overgrown lot in Oconee County, GA",
    metaTitle: "Land Clearing in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional land clearing & lot clearing in Bogart, Watkinsville, Athens & Oconee County, GA. Brush & underbrush removal, selective clearing, small demolition and site prep. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Overgrown property, a wooded homesite, or a lot choked with brush and small trees doesn't have to stay that way. Ground Breaker Land Management provides professional land clearing across Bogart, Watkinsville, Athens, and the wider Oconee County area — turning tangled, unusable acreage into clean, workable land you can actually build on, farm, or enjoy.",
    sections: [
      {
        heading: "What Land Clearing Actually Involves",
        paragraphs: [
          "Land clearing is the process of removing trees, brush, stumps, undergrowth, and debris from a piece of property so it can be used for something new — a home, a barn, a pasture, a food plot, a driveway, or simply a cleaner, safer piece of land. It's more than just cutting things down. Done right, land clearing accounts for drainage, soil health, what stays and what goes, and how the ground will be used afterward.",
          "Every property in the Athens and Oconee County area is a little different. A three-acre homesite outside Bogart with mature hardwoods needs a different approach than a fence line overrun with privet and sweetgum saplings, or a back pasture that hasn't been touched in a decade. We walk the property first, talk through your goals, and clear it in a way that sets up the next step — whether that's grading, building, planting, or fencing.",
        ],
      },
      {
        heading: "Our Land Clearing Services",
        paragraphs: ["Under the umbrella of land clearing, we handle a range of related work so you're not chasing down three different contractors:"],
        bullets: [
          "Lot clearing & site clearing — preparing raw or overgrown lots for construction, homesites, or resale",
          "Brush & underbrush removal — clearing invasive growth, briars, privet, and thick undergrowth",
          "Selective clearing — removing unwanted trees and growth while preserving the mature trees you want to keep",
          "Small structure & debris demolition — removing old sheds, dilapidated structures, and leftover debris",
          "Fence line & right-of-way clearing — opening up property lines, trails, and access paths",
          "Site prep hand-off — leaving the ground ready for grading, driveways, or seeding",
        ],
      },
      {
        heading: "Built for Oconee County & North Georgia Terrain",
        paragraphs: [
          "Land around Bogart, Watkinsville, and Athens comes with its own quirks — Georgia red clay, rolling terrain, mixed hardwood and pine, and plenty of properties that have been left to grow wild. Clearing here isn't a one-size-fits-all job. Wet-weather clay churns differently than dry ground, and slope matters when you're thinking about erosion and drainage down the line.",
          "As a local, owner-operated business, we know this ground because we work it every week. We serve property owners, builders, farmers, and land investors throughout Oconee County and the surrounding region, and we clear with an eye toward what the land will be used for next — not just getting it flat and empty.",
        ],
      },
      {
        heading: "How the Process Works",
        bullets: [
          "On-site walkthrough — we look at the property, listen to your goals, and flag anything worth keeping or watching (drainage, property lines, mature trees)",
          "Clear, up-front quote — you get a straightforward estimate with no surprises, and financing is available if you need it",
          "The clearing work — we bring the right equipment for your property and clear efficiently while protecting what stays",
          "Cleanup & hand-off — debris is handled, and the land is left ready for its next use",
        ],
      },
      {
        heading: "Why Property Owners Choose Ground Breaker",
        bullets: [
          "Locally owned and operated — you deal directly with the people doing the work",
          "Fully insured for your protection and peace of mind",
          "The right equipment for jobs of any size, from a half-acre to large tracts",
          "Honest, up-front pricing with financing options available",
          "We treat your property like it's our own — clean work, respected boundaries, no shortcuts",
        ],
      },
    ],
    faqs: [
      { q: "How much does land clearing cost in the Athens / Oconee County area?", a: "Cost depends on the size of the property, how thick the growth is, terrain, and what needs to be removed (brush versus mature trees versus structures). The best way to get an accurate number is a quick on-site look. We provide free, no-pressure estimates and offer financing so you can move forward on your timeline." },
      { q: "Do you clear small residential lots as well as large tracts?", a: "Yes. No job is too big or too small. We clear everything from a single overgrown residential lot to multi-acre tracts for homesites, pasture, or development." },
      { q: "Will you leave the land ready to build or grade?", a: "That's the goal. We clear with the next step in mind and can hand the property off ready for grading, driveway work, or site prep — services we also provide, so it stays under one roof." },
      { q: "Can you clear the brush but keep certain trees?", a: "Absolutely. Selective clearing is one of the most common requests we get. We'll work with you to remove the unwanted growth while protecting the mature trees and features you want to keep." },
      { q: "What areas do you serve?", a: "We serve Bogart, Watkinsville, Athens, and the surrounding Oconee County region, along with nearby communities throughout the area." },
      { q: "Do you handle stump removal and debris?", a: "Yes. We can grind stumps and handle debris as part of the clearing job, so you're left with clean, usable land rather than a field of stumps and brush piles." },
    ],
    related: [
      { label: "Grading & Site Prep", href: "/services/grading-site-prep" },
      { label: "Stump Grinding", href: "/services/stump-grinding" },
      { label: "Bush Hogging", href: "/services/bush-hogging" },
    ],
    schemaServiceType: "Land clearing",
    schemaDescription: "Professional land clearing, lot clearing, brush and underbrush removal, selective clearing, and small demolition serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 2 -----------------------------------------------------------------------
  "grading-site-prep": {
    slug: "grading-site-prep",
    navLabel: "Grading & Site Prep",
    name: "Grading & Site Prep in Oconee County & Athens, GA",
    keyword: "land grading",
    heroImage: "/images/grading-site-prep-new.jpg",
    heroAlt: "Ground Breaker Land Management grading and leveling a property in Oconee County, GA",
    metaTitle: "Land Grading & Site Prep in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Expert land grading and site preparation in Bogart, Watkinsville, Athens & Oconee County, GA. Soil leveling, drainage grading, pad and building-site prep. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Water running the wrong way, an uneven building site, or a lot that won't drain can stall a project before it starts. Ground Breaker Land Management provides professional grading and site prep throughout Bogart, Watkinsville, Athens, and Oconee County — shaping your ground so it drains right, sits level, and is ready to build on.",
    sections: [
      {
        heading: "What Grading & Site Prep Involves",
        paragraphs: [
          "Grading is the work of leveling and shaping the ground so water flows where it should and the surface is ready for its next use — a home, a shop, a driveway, a pad, or a healthy lawn. Good grading is mostly invisible when it's done right: no standing water, no washouts, no soggy low spots. Poor grading, on the other hand, shows up in every heavy Georgia rain.",
          "Site prep takes it a step further — getting a piece of ground fully ready for construction. That can mean stripping topsoil, establishing proper slope for drainage, compacting fill, and cutting a level building pad so the next crew can get straight to work.",
        ],
      },
      {
        heading: "Our Grading & Site Prep Services",
        bullets: [
          "Rough and finish grading for building sites and lots",
          "Drainage grading to move water away from structures and low spots",
          "Building pad preparation for homes, shops, and outbuildings",
          "Soil leveling and reshaping for lawns, pastures, and yards",
          "Erosion control shaping on sloped North Georgia terrain",
          "Fill placement, spreading, and compaction",
        ],
      },
      {
        heading: "Grading Done for Georgia Red Clay & Slope",
        paragraphs: [
          "Oconee County ground is rarely flat, and Georgia red clay holds water in ways sandy soil never would. Grading here is about working with the terrain — reading how water moves across a property and shaping it so rain drains away from your home, driveway, and foundation instead of pooling against them.",
          "We grade with the full picture in mind: where the water comes from, where it needs to go, and how the finished surface will be used. That's the difference between a yard that stays dry and one that turns to soup every spring.",
        ],
      },
      {
        heading: "Why Ground Breaker for Grading",
        bullets: [
          "Locally owned and operated — we know the terrain and drainage patterns here",
          "Fully insured for your protection",
          "Grading tied to real drainage outcomes, not just a flat surface",
          "Honest, up-front pricing with financing available",
          "One team from clearing through grading to finished site prep",
        ],
      },
    ],
    faqs: [
      { q: "How much does grading cost in Oconee County?", a: "It depends on the size of the area, how much material has to move, the slope, and drainage needs. A quick on-site look is the fastest way to a real number — we provide free estimates and offer financing." },
      { q: "Can you fix a yard that won't drain or holds water?", a: "Yes. Drainage grading is one of the most common jobs we handle. We reshape the ground so water moves away from your home and low spots instead of pooling." },
      { q: "Do you prepare building pads for new construction?", a: "We do. We can strip, level, fill, and compact a building pad so it's ready for your builder or foundation crew." },
      { q: "Do I need to clear the land before grading?", a: "Often, yes — and we handle both. If the site is overgrown, we can clear it first and then grade, keeping the whole job under one roof." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "Will grading help with erosion on a slope?", a: "It can. We shape sloped ground to slow and direct runoff, which reduces washout and erosion over time." },
    ],
    related: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Driveways & Access Roads", href: "/services/driveways-access-roads" },
      { label: "Seeding & Tilling", href: "/services/seeding-tilling" },
    ],
    schemaServiceType: "Land grading and site preparation",
    schemaDescription: "Professional land grading, drainage grading, soil leveling, and building-site preparation serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 3 -----------------------------------------------------------------------
  "driveways-access-roads": {
    slug: "driveways-access-roads",
    navLabel: "Driveways & Access Roads",
    name: "Driveways & Access Roads in Oconee County & Athens, GA",
    keyword: "driveway grading",
    heroImage: "/images/telegram/photo_AQADjgxrG2e4uUV-.jpg",
    heroAlt: "Gravel driveway graded and refreshed by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Gravel Driveways & Access Roads in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Driveway grading, gravel driveways, and access road construction in Bogart, Watkinsville, Athens & Oconee County, GA. Durable, well-draining access to your property. Call (706) 510-3942 for a free estimate.",
    intro: "A washed-out driveway or a muddy path to the back of your property makes everything harder. Ground Breaker Land Management builds and restores gravel driveways and access roads across Bogart, Watkinsville, Athens, and Oconee County — so you have solid, well-draining access year-round.",
    sections: [
      {
        heading: "Driveway & Access Road Services",
        bullets: [
          "New gravel driveway installation",
          "Driveway regrading and reshaping to fix ruts and low spots",
          "Gravel refreshing and top-ups on worn driveways",
          "Access road construction to fields, back lots, and job sites",
          "Culvert and drainage shaping to keep driveways from washing out",
          "Crown and slope grading for proper water runoff",
        ],
      },
      {
        heading: "Built to Handle Georgia Weather",
        paragraphs: [
          "The reason so many rural driveways rut, wash, and turn to mud is simple: water. Without the right crown, slope, and drainage, a heavy Oconee County rain will carry your gravel straight downhill. We build and regrade driveways with drainage designed in from the start — a proper crown so water sheds to the sides, and shaping that keeps the surface solid instead of soft.",
          "Whether it's a short residential driveway or a long access road to the back of a property, we grade it to last and to stay usable in wet weather, not just on a dry day.",
        ],
      },
      {
        heading: "Why Ground Breaker for Driveways",
        bullets: [
          "Locally owned — we build for the way water moves on North Georgia ground",
          "Fully insured for your protection",
          "Driveways graded with real drainage, so they hold up",
          "Honest, up-front pricing with financing available",
          "From clearing the path to grading the surface, one team handles it all",
        ],
      },
    ],
    faqs: [
      { q: "How much does a gravel driveway cost?", a: "It depends on length, width, how much grading and gravel is needed, and drainage. We give free on-site estimates and offer financing so you can move forward on your schedule." },
      { q: "Can you fix a rutted or washed-out driveway?", a: "Yes. We regrade and reshape existing driveways to remove ruts and low spots, then set them up to drain properly so the problem doesn't come right back." },
      { q: "Do you build access roads to the back of a property?", a: "We do — access roads to fields, back lots, hunting land, and job sites are a common request. We can clear the path and grade the surface." },
      { q: "How do you keep a driveway from washing out?", a: "The key is drainage — a proper crown, slope, and culverts where needed so water sheds off the surface instead of running down it. We design that in from the start." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "Do you supply the gravel?", a: "We'll walk you through the material options during your estimate and handle the driveway build from grading to finished surface." },
    ],
    related: [
      { label: "Grading & Site Prep", href: "/services/grading-site-prep" },
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Lawn Rolling", href: "/services/lawn-rolling" },
    ],
    schemaServiceType: "Driveway grading and access road construction",
    schemaDescription: "Gravel driveway installation, driveway regrading, gravel refreshing, and access road construction serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 4 -----------------------------------------------------------------------
  "seeding-tilling": {
    slug: "seeding-tilling",
    navLabel: "Seeding & Tilling",
    name: "Seeding & Tilling in Oconee County & Athens, GA",
    keyword: "seeding and tilling",
    heroImage: "/images/IMG_0026.JPG",
    heroAlt: "Freshly tilled and seeded ground prepared by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Seeding & Tilling in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional seeding and tilling in Bogart, Watkinsville, Athens & Oconee County, GA. Lawn establishment, soil prep, pasture and food-plot seeding. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Bare dirt, a patchy lawn, or a field you want to bring back to life all start the same way — good soil prep and the right seed. Ground Breaker Land Management provides seeding and tilling across Bogart, Watkinsville, Athens, and Oconee County to establish healthy, even ground that actually takes root.",
    sections: [
      {
        heading: "Seeding & Tilling Services",
        bullets: [
          "New lawn establishment on bare or cleared ground",
          "Soil tilling and preparation for strong seed-to-soil contact",
          "Overseeding thin or patchy areas",
          "Pasture and field seeding for livestock and hay ground",
          "Food-plot seeding and prep for wildlife and hunting land",
          "Post-clearing and post-grading ground restoration",
        ],
      },
      {
        heading: "Why Prep Matters as Much as Seed",
        paragraphs: [
          "Throwing seed on hard, compacted Georgia clay is a good way to waste both seed and money. The soil has to be worked first — tilled and loosened so roots can dig in, water can soak in, and the seed makes real contact with the ground. That prep work is what turns a bag of seed into an even, established stand of grass instead of a patchy, washed-out mess.",
          "We handle the whole process: preparing the soil, tilling it to the right condition, and seeding it evenly so you get healthy, consistent growth across the whole area — whether that's a front lawn in Watkinsville or a back pasture outside Bogart.",
        ],
      },
      {
        heading: "Why Ground Breaker for Seeding & Tilling",
        bullets: [
          "Locally owned — we know what grows well on North Georgia ground",
          "Fully insured for your protection",
          "Proper soil prep for real establishment, not just scattered seed",
          "Honest, up-front pricing with financing available",
          "We can clear, grade, and seed as one continuous job",
        ],
      },
    ],
    faqs: [
      { q: "When is the best time to seed a lawn or field in Georgia?", a: "Timing depends on the type of grass — cool-season and warm-season seed have different windows. We'll talk through the best timing for your goals during your estimate so the seed has the best chance to establish." },
      { q: "Can you seed a field after clearing it?", a: "Yes — that's a very common job. We can clear and grade the ground, then till and seed it, so the whole transformation happens under one roof." },
      { q: "Do you do food plots for hunting land?", a: "We do. We can prep and seed food plots for wildlife, along with pasture and hay ground." },
      { q: "Will tilling help my patchy lawn?", a: "Often yes. Loosening compacted soil and improving seed-to-soil contact is a big part of getting even, healthy growth. We'll assess your ground and recommend the right approach." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How much does seeding and tilling cost?", a: "It depends on the size of the area and how much prep the soil needs. We provide free estimates and offer financing." },
    ],
    related: [
      { label: "Grading & Site Prep", href: "/services/grading-site-prep" },
      { label: "Lawn Rolling", href: "/services/lawn-rolling" },
      { label: "Weed Control Spraying", href: "/services/weed-control" },
    ],
    schemaServiceType: "Seeding and tilling",
    schemaDescription: "Lawn establishment, soil tilling, overseeding, pasture and food-plot seeding serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 5 -----------------------------------------------------------------------
  "shrub-bush-removal": {
    slug: "shrub-bush-removal",
    navLabel: "Shrub & Bush Removal",
    name: "Shrub & Bush Removal in Oconee County & Athens, GA",
    keyword: "brush removal",
    heroImage: "/images/shrub-bush-removal.jpg",
    heroAlt: "Overgrown shrubs and bushes being removed by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Shrub, Bush & Brush Removal in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Shrub, bush, and brush removal in Bogart, Watkinsville, Athens & Oconee County, GA. Clear overgrown hedges, invasive bushes, and thick undergrowth. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Overgrown shrubs, invasive bushes, and thick brush can swallow a yard and take over a property line fast. Ground Breaker Land Management removes shrubs, bushes, and brush across Bogart, Watkinsville, Athens, and Oconee County — reclaiming your yard and restoring your landscape.",
    sections: [
      {
        heading: "Shrub & Brush Removal Services",
        bullets: [
          "Overgrown shrub and hedge removal",
          "Invasive bush and privet removal",
          "Briar, vine, and thick undergrowth clearing",
          "Fence line and property-line brush removal",
          "Yard reclamation on neglected or overgrown lots",
          "Full haul-off and cleanup of removed material",
        ],
      },
      {
        heading: "Reclaim Ground the Growth Took Over",
        paragraphs: [
          "Left alone, shrubs and brush don't just sit still — they spread. Privet, briars, and invasive bushes creep across fence lines, choke out the plants you want, and turn a manageable yard into a jungle in a couple of seasons. The longer it goes, the harder it is to get back.",
          "We clear it out completely — not just the tops, but the growth that keeps it coming back — and haul the debris away so you're left with clean, open ground. Whether it's a residential yard in Athens or an overgrown property line outside Watkinsville, we make the space usable again.",
        ],
      },
      {
        heading: "Why Ground Breaker for Brush Removal",
        bullets: [
          "Locally owned and operated",
          "Fully insured for your protection",
          "Complete removal and haul-off — no piles left behind",
          "Honest, up-front pricing with financing available",
          "We can follow up with grading, seeding, or bush hogging to finish the job",
        ],
      },
    ],
    faqs: [
      { q: "Do you haul away the brush and debris?", a: "Yes. Full cleanup and haul-off is part of the job — you're left with clean, open ground, not a pile of cut brush." },
      { q: "Can you clear an overgrown fence line or property line?", a: "Absolutely. Fence line and property-line clearing is one of our most common brush jobs. We open the line back up and haul the material off." },
      { q: "What about invasive privet and briars?", a: "We handle invasive growth like privet, briars, and vines regularly. We remove it thoroughly so you get real, lasting results." },
      { q: "Can you reseed or grade after clearing the brush?", a: "Yes. We can grade and seed the reclaimed area so it doesn't just go back to bare, uneven dirt." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How much does brush removal cost?", a: "It depends on how much growth there is, how thick it is, and access to the area. We give free estimates and offer financing." },
    ],
    related: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Bush Hogging", href: "/services/bush-hogging" },
      { label: "Stump Grinding", href: "/services/stump-grinding" },
    ],
    schemaServiceType: "Shrub, bush and brush removal",
    schemaDescription: "Overgrown shrub, hedge, invasive bush, briar, and brush removal with full haul-off serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 6 -----------------------------------------------------------------------
  "tree-storm-cleanup": {
    slug: "tree-storm-cleanup",
    navLabel: "Tree & Storm Cleanup",
    name: "Tree & Storm Cleanup in Oconee County & Athens, GA",
    keyword: "storm cleanup",
    heroImage: "/images/service-cleanup-hq.jpg",
    heroAlt: "Storm-downed trees and debris being cleaned up by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Tree & Storm Cleanup in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Storm cleanup and fallen tree removal in Bogart, Watkinsville, Athens & Oconee County, GA. Downed trees, limbs, and debris cleared fast. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "After a storm rolls through North Georgia, downed trees, broken limbs, and scattered debris can block driveways and make a property unsafe. Ground Breaker Land Management provides tree and storm cleanup across Bogart, Watkinsville, Athens, and Oconee County — clearing the mess and getting your property back to normal.",
    sections: [
      {
        heading: "Tree & Storm Cleanup Services",
        bullets: [
          "Fallen and downed tree removal",
          "Broken limb and hanging branch cleanup",
          "Storm debris removal and haul-off",
          "Driveway and access clearing after a storm",
          "General property cleanup for safety",
          "Lot cleanup of dead, leaning, or hazardous material",
        ],
      },
      {
        heading: "Cleanup That Gets Your Property Back",
        paragraphs: [
          "Georgia storms have a way of leaving a mess — a big hardwood across the driveway, limbs down across the yard, debris scattered from the road to the tree line. Beyond the eyesore, it's a safety problem, and it can keep you from getting in and out of your own property.",
          "We come in and clear it: cutting up and removing downed trees, hauling off broken limbs and debris, and reopening your driveway and yard so things are safe and usable again. When general property safety or cleanup is the goal, we handle the heavy work so you don't have to.",
        ],
      },
      {
        heading: "Why Ground Breaker for Storm Cleanup",
        bullets: [
          "Locally owned — we're right here in the community when weather hits",
          "Fully insured for your protection",
          "Complete debris removal and haul-off",
          "Honest, up-front pricing with financing available",
          "Equipment to handle large downed trees and heavy debris",
        ],
      },
    ],
    faqs: [
      { q: "Can you remove a large tree that fell across my driveway?", a: "Yes. Clearing downed trees off driveways and access points is one of the first things we handle so you can get in and out safely. We cut, remove, and haul it off." },
      { q: "Do you haul away the debris?", a: "We do. Full haul-off and cleanup is part of the job — we don't leave you with piles of limbs and debris to deal with." },
      { q: "Do you handle general property cleanup, not just storms?", a: "Yes. We clean up dead, leaning, or hazardous material and general debris any time — it doesn't have to be storm-related." },
      { q: "Can you grind the stumps left behind?", a: "We can. Stump grinding pairs naturally with tree cleanup, so we can finish the job and leave the ground clean." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How fast can you come out after a storm?", a: "Reach out and we'll get you on the schedule as quickly as we can. Being local means we're close by when weather hits the area." },
    ],
    related: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Stump Grinding", href: "/services/stump-grinding" },
      { label: "Shrub & Bush Removal", href: "/services/shrub-bush-removal" },
    ],
    schemaServiceType: "Tree and storm cleanup",
    schemaDescription: "Fallen tree removal, limb and storm debris cleanup, and property safety cleanup serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 7 -----------------------------------------------------------------------
  "stump-grinding": {
    slug: "stump-grinding",
    navLabel: "Stump Grinding",
    name: "Stump Grinding in Oconee County & Athens, GA",
    keyword: "stump grinding",
    heroImage: "/images/IMG_0111.jpeg",
    heroAlt: "Tree stump being ground down by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Stump Grinding in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional stump grinding and stump removal in Bogart, Watkinsville, Athens & Oconee County, GA. Clear stumps for landscaping, mowing, and safety. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "An old stump is more than an eyesore — it's a tripping hazard, a mowing obstacle, and a magnet for pests. Ground Breaker Land Management provides stump grinding across Bogart, Watkinsville, Athens, and Oconee County, clearing the way for new landscaping, safe mowing, and a clean yard.",
    sections: [
      {
        heading: "Stump Grinding Services",
        bullets: [
          "Single stump grinding and removal",
          "Multiple-stump and full-lot stump clearing",
          "Grinding below grade for replanting or sodding",
          "Stump cleanup after tree removal or storm damage",
          "Mowing-obstacle removal for pastures and yards",
          "Debris cleanup and grinding-chip handling",
        ],
      },
      {
        heading: "Clear the Way for What's Next",
        paragraphs: [
          "Stumps get in the way of everything — landscaping plans, a smooth mow, new sod, a fence line. And left in the ground, they slowly rot, attract termites and other pests, and keep sending up sprouts. Grinding them out solves all of it at once.",
          "We grind stumps down below grade so you can replant, seed, sod, or simply mow right over the spot without a second thought. Whether it's one stubborn stump in an Athens backyard or a whole lot full of them after clearing, we clean them out and leave the ground ready to use.",
        ],
      },
      {
        heading: "Why Ground Breaker for Stump Grinding",
        bullets: [
          "Locally owned and operated",
          "Fully insured for your protection",
          "Ground below grade so you can replant or mow cleanly",
          "Honest, up-front pricing with financing available",
          "Pairs naturally with our clearing and tree cleanup services",
        ],
      },
    ],
    faqs: [
      { q: "How much does stump grinding cost?", a: "It depends on the number of stumps, their size, and access. Many jobs are quick and affordable — we provide free estimates and offer financing for larger jobs." },
      { q: "Do you grind the stump below ground level?", a: "Yes. We grind below grade so you can replant, lay sod, seed, or mow right over the spot without the stump getting in the way." },
      { q: "Can you remove multiple stumps or a whole lot?", a: "Absolutely. We handle everything from a single stump to a full lot of them, which is common after land clearing." },
      { q: "What happens to the grindings?", a: "We handle the debris and chips as part of the job so you're left with a clean, usable spot." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "Do you do stump grinding after tree removal?", a: "Yes — it's a natural pairing. If you've had trees removed or storm damage, we can grind out what's left." },
    ],
    related: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Tree & Storm Cleanup", href: "/services/tree-storm-cleanup" },
      { label: "Shrub & Bush Removal", href: "/services/shrub-bush-removal" },
    ],
    schemaServiceType: "Stump grinding",
    schemaDescription: "Stump grinding and stump removal below grade for landscaping, mowing, and safety serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 8 -----------------------------------------------------------------------
  "weed-control": {
    slug: "weed-control",
    navLabel: "Weed Control Spraying",
    name: "Weed Control & Fertilizer Spraying in Oconee County & Athens, GA",
    keyword: "weed control spraying",
    heroImage: "/images/weed control.png",
    heroAlt: "Weed control and fertilizer spraying by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Weed Control & Fertilizer Spraying in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional weed control and fertilizer spraying in Bogart, Watkinsville, Athens & Oconee County, GA. Knock out invasive weeds and feed your land for healthy growth. Call (706) 510-3942 for a free estimate.",
    intro: "Invasive weeds compete with everything you want to grow — grass, pasture, and healthy land. Ground Breaker Land Management provides weed control and fertilizer spraying across Bogart, Watkinsville, Athens, and Oconee County to knock out unwanted growth and feed your land for strong, healthy results.",
    sections: [
      {
        heading: "Weed Control & Fertilizer Services",
        bullets: [
          "Broadleaf and invasive weed spraying",
          "Pasture and field weed control",
          "Fertilizer application for healthy growth",
          "Post-clearing spraying to keep regrowth down",
          "Lot and acreage vegetation management",
          "Spot treatment for problem areas",
        ],
      },
      {
        heading: "Keep Your Land Healthy and Under Control",
        paragraphs: [
          "Weeds don't just look bad — they steal water, nutrients, and space from the grass and growth you actually want. On pasture and open acreage especially, letting weeds run wild means less usable ground every season. The right spraying program keeps them in check and gives your grass the upper hand.",
          "Fertilizer is the other half of the equation. Feeding your land helps it grow thicker and healthier, which naturally crowds out weeds and makes the whole property look and perform better. We handle both — knocking down the unwanted growth and feeding what you want to thrive.",
        ],
      },
      {
        heading: "Why Ground Breaker for Weed Control",
        bullets: [
          "Locally owned — we know the weeds and grasses common to this area",
          "Fully insured for your protection",
          "Weed control paired with fertilization for lasting results",
          "Honest, up-front pricing with financing available",
          "Great follow-up to clearing, bush hogging, or seeding",
        ],
      },
    ],
    faqs: [
      { q: "Can you spray a large pasture or field?", a: "Yes. Pasture and field weed control is a common job for us. We can treat large areas to keep invasive weeds from taking over your grass." },
      { q: "Do you fertilize as well as spray weeds?", a: "We do both. Knocking down weeds and feeding your grass work together — healthy, well-fed turf naturally crowds weeds out." },
      { q: "Can you spray after clearing to stop regrowth?", a: "Yes. Spraying after clearing or bush hogging helps keep brush and weeds from coming right back, so your work lasts longer." },
      { q: "Is spot treatment available for problem areas?", a: "Absolutely. If you've got specific problem spots, we can target them rather than treating the whole property." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How much does spraying cost?", a: "It depends on the size of the area and the type of treatment. We provide free estimates and offer financing." },
    ],
    related: [
      { label: "Seeding & Tilling", href: "/services/seeding-tilling" },
      { label: "Bush Hogging", href: "/services/bush-hogging" },
      { label: "Lawn Rolling", href: "/services/lawn-rolling" },
    ],
    schemaServiceType: "Weed control and fertilizer spraying",
    schemaDescription: "Weed control spraying, pasture and field treatment, and fertilizer application serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 9 -----------------------------------------------------------------------
  "bush-hogging": {
    slug: "bush-hogging",
    navLabel: "Bush Hogging",
    name: "Bush Hogging in Oconee County & Athens, GA",
    keyword: "bush hogging",
    heroImage: "/images/bushhogging-after.jpg",
    heroAlt: "Field freshly bush hogged by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Bush Hogging in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional bush hogging in Bogart, Watkinsville, Athens & Oconee County, GA. Mow down tall grass, thick brush, and saplings to reclaim fields and pastures. Locally owned, fully insured. Call (706) 510-3942 for a free estimate.",
    intro: "Fields and pastures grow up fast in North Georgia, and once the grass, brush, and saplings take hold, a regular mower won't touch them. Ground Breaker Land Management provides bush hogging across Bogart, Watkinsville, Athens, and Oconee County to cut it all down and bring your land back under control.",
    sections: [
      {
        heading: "Bush Hogging Services",
        bullets: [
          "Field and pasture mowing",
          "Tall grass and overgrowth cutting",
          "Thick brush and sapling clearing",
          "Roadside, trail, and fence line mowing",
          "Vacant lot and acreage maintenance",
          "Seasonal and one-time cleanup mowing",
        ],
      },
      {
        heading: "Reclaim and Maintain Your Fields",
        paragraphs: [
          "A pasture that hasn't been cut in a season or two isn't a mowing job anymore — it's tall grass, thick brush, and young saplings that a lawn mower will just bounce off of. Bush hogging is built for exactly that: heavy-duty cutting that mows down overgrowth a regular mower can't handle, all the way down to a clean, manageable field.",
          "Whether you're reclaiming a field that's gotten away from you, keeping pasture in shape for livestock or hay, or maintaining a vacant lot, we cut it down and keep it usable. Regular bush hogging also keeps brush and saplings from turning open ground back into woods.",
        ],
      },
      {
        heading: "Why Ground Breaker for Bush Hogging",
        bullets: [
          "Locally owned and operated",
          "Fully insured for your protection",
          "Equipment built to cut heavy overgrowth, not just grass",
          "Honest, up-front pricing with financing available",
          "One-time reclamation or ongoing seasonal maintenance",
        ],
      },
    ],
    faqs: [
      { q: "How often should I have my field bush hogged?", a: "It depends on how you use the land and how fast it grows, but many owners do it once or twice a season to keep pasture and fields under control. We can set up a schedule or do a one-time cut." },
      { q: "Can you cut a field that's badly overgrown?", a: "Yes. Bush hogging is made for heavy overgrowth — tall grass, thick brush, and saplings that a mower can't handle. We bring it back to a clean, manageable field." },
      { q: "Do you mow around fence lines and trails?", a: "We do. Fence lines, trails, and roadsides are common areas we keep cut back." },
      { q: "Will bush hogging keep brush from taking over?", a: "Regular bush hogging keeps saplings and brush knocked down so open ground doesn't slowly turn back into woods. Pairing it with spraying makes it last even longer." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How much does bush hogging cost?", a: "It depends on the size of the area and how heavy the growth is. We provide free estimates and offer financing." },
    ],
    related: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Shrub & Bush Removal", href: "/services/shrub-bush-removal" },
      { label: "Weed Control Spraying", href: "/services/weed-control" },
    ],
    schemaServiceType: "Bush hogging",
    schemaDescription: "Field and pasture bush hogging, tall grass, brush, and sapling mowing serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },

  // 10 ----------------------------------------------------------------------
  "lawn-rolling": {
    slug: "lawn-rolling",
    navLabel: "Lawn Rolling",
    name: "Lawn Rolling in Oconee County & Athens, GA",
    keyword: "lawn rolling",
    heroImage: "/images/lawn-rolling.jpg",
    heroAlt: "Lawn being rolled smooth by Ground Breaker Land Management in Oconee County, GA",
    metaTitle: "Lawn Rolling in Bogart, Athens & Oconee County GA | Ground Breaker Land Management",
    metaDescription: "Professional lawn rolling in Bogart, Watkinsville, Athens & Oconee County, GA. Smooth uneven ground, press out frost heave, and improve seed-to-soil contact for a level yard. Call (706) 510-3942 for a free estimate.",
    intro: "A bumpy, uneven lawn is rough to mow and hard to enjoy. Ground Breaker Land Management provides lawn rolling across Bogart, Watkinsville, Athens, and Oconee County — smoothing out uneven terrain and setting up a flat, healthy yard.",
    sections: [
      {
        heading: "Lawn Rolling Services",
        bullets: [
          "Smoothing uneven and bumpy lawns",
          "Pressing down frost heave and winter lifting",
          "Improving seed-to-soil contact after seeding",
          "Leveling minor surface irregularities",
          "New lawn finishing after seeding or grading",
          "Pasture and large-area rolling",
        ],
      },
      {
        heading: "A Smoother, Healthier Yard",
        paragraphs: [
          "Lawn rolling presses the soil surface flat — smoothing out the small bumps, dips, and rough spots that build up over time or get pushed up by frost heave over winter. The result is a more even yard that's easier and safer to mow and simply looks better.",
          "Rolling is also a smart finishing step after seeding. Pressing the seed firmly into the soil improves seed-to-soil contact, which helps germination and gives you a more even, established lawn. Paired with our seeding and grading work, it's the final touch that pulls a new lawn together.",
        ],
      },
      {
        heading: "Why Ground Breaker for Lawn Rolling",
        bullets: [
          "Locally owned and operated",
          "Fully insured for your protection",
          "A finishing step that makes seeding and grading look their best",
          "Honest, up-front pricing with financing available",
          "Handles both residential yards and large areas",
        ],
      },
    ],
    faqs: [
      { q: "When is the best time to roll a lawn?", a: "Rolling is often done in spring to press down frost heave, and right after seeding to improve seed-to-soil contact. We'll recommend the right timing for your situation." },
      { q: "Will rolling fix a very uneven or rutted yard?", a: "Rolling smooths minor bumps and surface irregularities. For badly uneven or rutted ground, grading first and then rolling gives the best result — and we do both." },
      { q: "Does rolling help newly seeded areas?", a: "Yes. Pressing seed firmly into the soil improves germination and helps you get a more even, established lawn." },
      { q: "Can you roll large areas or pastures?", a: "We can. Rolling isn't just for small yards — we handle larger areas as well." },
      { q: "What areas do you serve?", a: `We serve ${AREAS}.` },
      { q: "How much does lawn rolling cost?", a: "It depends on the size of the area. We provide free estimates and offer financing." },
    ],
    related: [
      { label: "Seeding & Tilling", href: "/services/seeding-tilling" },
      { label: "Grading & Site Prep", href: "/services/grading-site-prep" },
      { label: "Weed Control Spraying", href: "/services/weed-control" },
    ],
    schemaServiceType: "Lawn rolling",
    schemaDescription: "Lawn rolling to smooth uneven ground, press frost heave, and improve seed-to-soil contact serving Bogart, Watkinsville, Athens, and Oconee County, GA.",
  },
};

export const serviceSlugs = Object.keys(services);
