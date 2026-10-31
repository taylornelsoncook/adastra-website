// Everything about the business lives here. Change a value, push, and the whole site updates.
// Anything marked TODO is a placeholder waiting on real information from the owner.

export const site = {
  name: 'Ad Astra Human Performance',
  shortName: 'Ad Astra',
  url: 'https://www.adastrahp.com',
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
  email: 'hello@adastrahp.com', // TODO confirm this inbox exists
  phone: '', // TODO optional
  instagram: 'https://www.instagram.com/adastra.hp/',

  // Where each purchase path goes.
  links: {
    // Factum packages are sold through Mindbody. TODO: paste the Mindbody pricing/checkout link.
    mindbody: 'https://clients.mindbodyonline.com/',
    // Train-anywhere packages are sold through Diamond Protocol (Stripe).
    diamondBook: 'https://app.diamondprotocol.org/book',
    // Diamond Protocol "Ask about training" lead form: inquiries land in Leads with automatic follow-up.
    leadForm: 'https://app.diamondprotocol.org/start',
  },
};

export type Package = {
  id: string;
  name: string;
  where: 'facility' | 'anywhere';
  price: string; // shown as-is, e.g. "$300"
  per: string; // what the price buys, e.g. "8 sessions / month"
  rate?: string; // e.g. "$28 per hour"
  blurb: string;
  features: string[];
  featured?: boolean;
  badge?: string;
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
];

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
    a: 'Packages are month to month. Ask a coach about pausing or canceling.', // TODO confirm the cancellation policy
  },
  {
    q: 'How do I get started?',
    a: 'Pick a package and buy it online, then book into your group on the schedule. Questions first? Ask a coach and we will get back to you.',
  },
];
