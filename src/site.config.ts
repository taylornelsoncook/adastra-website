// Everything about the business lives here. Change a value, push, and the whole site updates.
// Anything marked TODO is a placeholder waiting on real information from the owner.

export const site = {
  name: 'Ad Astra Human Performance',
  shortName: 'Ad Astra',
  url: 'https://www.adastrahp.com',
  tagline: 'Train like the season depends on it.',
  description:
    'Monthly strength, speed and performance training packages for athletes. Train in our facility or anywhere with coach-built programming.',

  // TODO: real city, address and contact details. Local search depends on these.
  location: {
    city: 'Your City',
    region: 'ST',
    street: '',
    postalCode: '',
    country: 'US',
    serviceArea: 'Your City and surrounding areas',
  },
  email: 'hello@adastrahp.com', // TODO confirm this inbox exists
  phone: '', // TODO optional
  instagram: '', // TODO e.g. https://instagram.com/adastrahp

  // Where each purchase path goes.
  links: {
    // In-facility packages are sold through Mindbody. TODO: paste the Mindbody pricing/checkout link.
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
  price: string; // shown as-is, e.g. "$249/mo"
  blurb: string;
  features: string[];
  featured?: boolean;
};

// TODO: real package names, prices and inclusions.
export const packages: Package[] = [
  {
    id: 'remote',
    name: 'Remote Performance',
    where: 'anywhere',
    price: '$—/mo',
    blurb: 'Coach-built programming in the app for athletes who train on their own schedule.',
    features: [
      'Individual program built around your sport and season',
      'Workouts, weights and demo videos in the app',
      'Program adjusts around your game schedule',
      'Monthly progress report and coach check-ins',
    ],
  },
  {
    id: 'facility',
    name: 'Facility Membership',
    where: 'facility',
    price: '$—/mo',
    blurb: 'Coached small-group sessions in our facility, every week.',
    features: [
      'Coached small-group training sessions each week',
      'Speed, strength and power testing every block',
      'Full program in the app for days away from the facility',
      'Priority booking for camps and clinics',
    ],
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite 1:1',
    where: 'facility',
    price: '$—/mo',
    blurb: 'Private coaching for athletes chasing the next level.',
    features: [
      'Private sessions with your coach',
      'Fully individual programming and testing',
      'Recovery and readiness tracking',
      'Direct line to your coach',
    ],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is Ad Astra for?',
    a: 'Athletes who want to get faster, stronger and more durable for their sport, from middle school through college and beyond. Every program starts from where the athlete is today.',
  },
  {
    q: 'What is included in a monthly package?',
    a: 'Every package includes a program written for your sport and season, delivered in the app with weights and demo videos. Facility packages add coached sessions in person. See the Packages page for the details of each.',
  },
  {
    q: 'Do I have to train at the facility?',
    a: 'No. Remote Performance gives you the same coach-built programming to follow anywhere, with your coach watching your progress in the app.',
  },
  {
    q: 'How does training work during the season?',
    a: 'Your program follows your game schedule. Training load comes down around games and builds back up between them, so you stay fresh when it counts.',
  },
  {
    q: 'Can I cancel?',
    a: 'Packages are month to month. TODO: confirm the cancellation policy.',
  },
  {
    q: 'How do I get started?',
    a: 'Pick a package and buy it online, or ask us a question and a coach will get back to you with the best fit and a free evaluation.',
  },
];
