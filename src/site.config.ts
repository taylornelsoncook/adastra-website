// Everything about the business lives here. Change a value, push, and the whole site updates.
// Anything marked TODO is a placeholder waiting on real information from the owner.

export const site = {
  name: 'Ad Astra Human Performance',
  shortName: 'Ad Astra',
  url: 'https://www.adastrahp.org',
  tagline: 'Train like the season depends on it.',
  description:
    'Coached 80-minute speed, strength and performance classes for youth, high school, lacrosse and college-commit athletes at Factum in Englewood, CO. 8 or 12 sessions a month.',

  // City-level only for now. The owner will add a street address once Ad Astra has its own facility.
  location: {
    venue: 'Factum',
    city: 'Englewood',
    region: 'CO',
    street: '',
    postalCode: '',
    country: 'US',
    serviceArea: 'Englewood, Centennial and the south Denver metro',
    mapsUrl: '',
  },
  email: 'taylor@adastrahp.org',
  phone: '', // TODO optional
  instagram: 'https://www.instagram.com/adastra.hp/',

  // Where each purchase path goes. ALL BOOKING LINKS ARE OFF (owner's call, 2026-11-03): new links are coming.
  // While a link is empty, its button emails the coach instead (see contactHref below).
  // Paste each new link here and in the buyUrl fields further down, then push.
  links: {
    mindbody: '', // was https://clients.mindbodyonline.com/
    diamondBook: '', // was https://app.diamondprotocol.org/book
    leadForm: '', // "Ask a coach" form. Was https://app.diamondprotocol.org/start
  },
};

// Google Forms. Paste each form's share link (the "Send" > link icon, e.g. https://forms.gle/abc123) and push.
// While a link is empty, the button emails the coach instead.
export const forms = {
  contact: '', // general "Ask a coach" contact form. Shown on the Contact page.
  adultWaitlist: '', // waitlist for the adult group program
};

// Adults: one-on-one personal training now; an adult group program is planned.
export const adults = {
  programStart: 'August 1', // planned start of the adult group program
  personalTrainingUrl: '', // optional booking link (e.g. Mindbody) for personal training
};

// Where a button goes when it has no link yet: an email to the coach with a subject line.
export const contactHref = (subject = 'Training inquiry') =>
  forms.contact || site.links.leadForm || `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
// Shown under buttons while booking links are off.
export const bookingNote = `Online booking opens soon. Email ${site.email} and we'll get you set up.`;

export type Package = {
  id: string;
  name: string;
  where: 'facility' | 'anywhere';
  price: string; // shown as-is, e.g. "$300"
  per: string; // what the price buys, e.g. "8 sessions / month"
  rate?: string; // e.g. "$28 per hour"
  buyUrl?: string; // checkout link; without one the button asks a coach instead
  buyNote?: string; // small line under the button, e.g. which option to pick at checkout
  blurb: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  short?: string; // shorter name for the buy button
  group?: 'main' | 'youth-lacrosse'; // which set of cards it appears in (default main)
};

// Real packages (from the November 1 schedule post). Sold through Mindbody.
export const packages: Package[] = [
  {
    id: 'eight',
    name: '8 Sessions',
    where: 'facility',
    price: '$300',
    per: '8 sessions / month',
    rate: '$28 per hour',
    buyUrl: 'https://go.mindbodyonline.com/book/app/pricing/bus_11kPhPxZcbbQxqebJj/cntr_11kPhPxZcbbQxLGA97?mbo_src=links-shortcuts', // Mindbody, new link 2026-11-03
    blurb: 'Two coached sessions a week at Factum.',
    features: [
      '8 coached 80-minute sessions each month',
      'Any class on the schedule for your group',
      'Speed, strength and power programming',
      'Month to month',
    ],
  },
  {
    id: 'twelve',
    name: '12 Sessions',
    where: 'facility',
    price: '$400',
    per: '12 sessions / month',
    rate: '$25 per hour',
    buyUrl: 'https://go.mindbodyonline.com/book/app/pricing/bus_11kPhPxZcbbQxqebJj/cntr_11kPhPxZcbbQxLGAA8?mbo_src=links-shortcuts', // Mindbody, own link 2026-11-03
    blurb: 'Three coached sessions a week at Factum. The fastest way to improve.',
    features: [
      '12 coached 80-minute sessions each month',
      'Any class on the schedule for your group',
      'Speed, strength and power programming',
      'Month to month',
    ],
    featured: true,
    badge: 'Best value',
  },
  // Youth lacrosse (ages 8-12). Shown on Packages and the lacrosse page.
  {
    id: 'youth-lax-1x',
    name: 'Youth Lacrosse 1x a week',
    short: '1x a week',
    where: 'facility',
    group: 'youth-lacrosse',
    price: '$160',
    per: '1 session a week · ages 8–12',
    buyUrl: 'https://go.mindbodyonline.com/book/app/pricing/bus_11kPhPxZcbbQxqebJj/cntr_11kPhPxZcbbQxLGADB?mbo_src=links-shortcuts', // Mindbody
    blurb: 'One coached youth lacrosse session a week at Factum.',
    features: ['One coached 80-minute session each week', 'Youth Lacrosse class on the schedule', 'Speed, agility and athletic foundations', 'Month to month'],
  },
  {
    id: 'youth-lax-2x',
    name: 'Youth Lacrosse 2x a week',
    short: '2x a week',
    where: 'facility',
    group: 'youth-lacrosse',
    price: '$300',
    per: '2 sessions a week · ages 8–12',
    buyUrl: 'https://go.mindbodyonline.com/book/app/pricing/bus_11kPhPxZcbbQxqebJj/cntr_11kPhPxZcbbQxLGAEC?mbo_src=links-shortcuts', // Mindbody
    blurb: 'Two coached youth lacrosse sessions a week at Factum.',
    features: ['Two coached 80-minute sessions each week', 'Youth Lacrosse classes on the schedule', 'Speed, agility and athletic foundations', 'Month to month'],
    featured: true,
  },
];

// $1 speed evaluation: the low-risk first step for new athletes.
export const evaluation = {
  price: '$1',
  name: 'Speed evaluation',
  // TODO: a Mindbody checkout link for the $1 evaluation. Until then the button opens the lead form.
  buyUrl: '',
  includes: [
    'Full 40-yard dash, timed',
    'Broad jump',
    'Vertical jump',
    'Movement screen with a coach',
  ],
};

// Team training: discounted pricing for groups of 15 or more athletes.
export const teamTraining = {
  minAthletes: 15,
  price: '$180 per athlete / month for 8 sessions', // 40% off the $300 individual rate
  buyUrl: '', // optional Mindbody link for team packages; otherwise buttons open the lead form
};

// College athlete training. Its own Mindbody checkout.
export const college = {
  buyUrl: 'https://go.mindbodyonline.com/book/app/pricing/bus_11kPhPxZcbbQxqebJj/po_11kPhPxZcbbQxLmu4o?mbo_src=links-shortcuts', // Mindbody, 2026-11-03
  price: '$300',
  per: '$300 for winter break',
};

// Weekly class schedule at Factum. Every class is 80 minutes.
export const schedule = {
  facility: 'Factum',
  startsOn: 'November 1',
  minutes: 80,
  classes: [
    { days: 'M/T/W', name: 'College Commits', time: '7:00 AM' },
    { days: 'M/W/F', name: 'College Commits', time: '4:00 PM' },
    { days: 'M/W', name: 'High School Performance', time: '5:20 PM' },
    { days: 'T/W', name: 'Youth Lacrosse', time: '6:40 PM' },
    { days: 'T/TH', name: 'High School Lacrosse', time: '4:00 PM' },
    { days: 'T/TH', name: 'Kings 2032', time: '5:20 PM' },
    { days: 'M/TH', name: 'Kings 2031', time: '6:40 PM' },
    { days: 'F', name: 'HS Lacrosse', time: '5:20 PM' },
  ],
};

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is Ad Astra for?',
    a: 'Athletes who want to get faster, stronger and more durable for their sport: youth and high school athletes, lacrosse players and college commits.',
  },
  {
    q: 'What is included in a monthly package?',
    a: 'Packages are sessions per month at Factum: 8 sessions for $300 or 12 sessions for $400. Every session is a coached 80-minute class, not 60, so you get more training for your money.',
  },
  {
    q: 'Where and when do classes run?',
    a: 'Classes run at Factum on a weekly schedule: College Commits, High School Performance, Youth and High School Lacrosse, and Kings 2031 and 2032. See the Schedule page for days and times.',
  },
  {
    q: 'Can I train outside the facility?',
    a: 'Yes. Ask a coach about training away from Factum and we will set you up with coach-built programming in the app.',
  },
  {
    q: 'How does training work during the season?',
    a: 'Your program follows your game schedule. Training load comes down around games and builds back up between them, so you stay fresh when it counts.',
  },
  {
    q: 'Can I cancel?',
    a: 'Packages are month to month. To cancel, give us 14 days\u2019 notice before your next billing date. Exceptions are at the owner\u2019s discretion.',
  },
  {
    q: 'What is the $1 speed evaluation?',
    a: 'A one-time session where a coach times a full 40-yard dash, tests your broad and vertical jump, and screens how you move. You leave knowing your numbers. It costs $1.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a $1 speed evaluation or pick a package, then book into your group on the schedule. Online booking opens soon; until then, email taylor@adastrahp.org and we will get you set up.',
  },
];
