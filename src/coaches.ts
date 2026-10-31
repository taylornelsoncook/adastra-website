// Coach bios and the athletes they have trained. Edit here; the Coaches page and the home page read from this file.
// Rules: only list athletes who are OK being named, and get a parent's OK for anyone under 18.

export type Role = { org: string; title: string; dates: string; points: string[]; programs?: string[]; athletes?: string[] };

export const headCoach = {
  name: 'Taylor Nelson-Cook',
  creds: 'CSCS, PN1',
  title: 'Founder & Head Performance Coach',
  photo: '', // TODO: add a photo to public/coaches/ and put its path here, e.g. '/coaches/taylor.webp'
  instagram: 'https://www.instagram.com/tnelsoncook19/',
  years: '12+',
  summary:
    'Taylor has spent more than 12 years developing athletes at every level, from elementary-school movement classes to NFL Combine prep and MLB off-seasons. Taylor has directed performance programs, led coaching staffs and built training systems used by high school, club and college programs.',
  bio: [
    'Before founding Ad Astra, Taylor spent eight years at APEC (Athletes’ Performance Enhancement Center) as Training Director and Lead Performance Coach. Taylor directed programming there for professional athletes in the NFL, MLB and minor league baseball, ran NFL Combine and Pro Day preparation, and built the youth development system that took athletes from their first day in the weight room to college and beyond.',
    'Next came Kula Sports Performance, where Taylor served as Vice President of Operations and Master Coach, designing programs for club and high school teams across the Denver area and coaching remote athletes through the KSP online platform. Most recently Taylor has been Director of Performance at KNGDM Sports Performance, leading programming for football, soccer and lacrosse athletes from youth through the pros and mentoring the coaching staff.',
    'The approach is simple: test the athlete, train what moves the needle, and measure it again. Every program balances speed, strength, power and durability, and is built around the athlete’s sport, age and season. That is the system Ad Astra athletes train in today.',
  ],
};

export const combineResults = {
  athletes: '200+',
  stats: [
    { value: '0.33s', label: 'faster 40-yard dash' },
    { value: '+5.5″', label: 'vertical jump' },
    { value: '+12″', label: 'broad jump' },
    { value: '+10', label: 'reps on the 225 bench test' },
  ],
};

export const proAthletes = {
  nfl: [
    'Patrick Mahomes', 'Travis Kelce', 'Christian McCaffrey', 'Saquon Barkley', 'Jalen Hurts', 'Jerry Jeudy',
    'Mac Jones', 'Will Howard', 'Quinn Ewers', 'Sam Ehlinger', 'Mecole Hardman', 'Jedrick Wills Jr.',
    'Solomon Thomas', 'DeShon Elliott', 'Joe Schobert', 'Cody Latimer',
  ],
  mlb: [
    'Bobby Witt Jr.', 'Trevor Story', 'Trent Grisham', 'Matt Carpenter', 'Noah Syndergaard', 'Derek Holland',
    'Brandon Workman', 'Kyle Crick', 'TJ Rumfield', 'Hagen Smith', 'AJ Smith-Shawver', 'Bryce Elder',
  ],
};

// TODO: confirm each person here is OK being named (parent OK for anyone under 18).
export const developmentAthletes = [
  'JT Cross', 'Mark Bowman', 'Jordan Nytes', 'Brek Kolojay', 'Hauss Hejny', 'Myles Purchase', 'Blake Purchase',
  'Cole Payton', 'Jackson Coleman', 'Titus Huard', 'Jayden Fox', 'Harry Luong', 'Wyatt Branish', 'Grant Van Wyk',
  'Sean Kilkenney', 'James Riches', 'DJ Bordeaux', 'Josh Morrisey', 'Jack Howell', 'Jae Howell', 'Tess Boade',
  'Meg Boade', 'Jordan Jackson', 'Chase Wilson',
];

export const programs = [
  { name: 'Rock Canyon Basketball', note: 'State champions' },
  { name: 'Cherry Creek Hockey', note: 'State champions' },
  { name: 'Regis Jesuit Football' },
  { name: 'Legend High School' },
  { name: 'Arapahoe High School Football' },
  { name: 'Valor Lacrosse' },
  { name: 'Real Colorado Soccer' },
  { name: 'Colorado United' },
  { name: 'HRA Swim' },
  { name: 'Aspen School District' },
  { name: 'Altus High School Football' },
];

export const career: Role[] = [
  {
    org: 'KNGDM Sports Performance',
    title: 'Director of Performance',
    dates: 'Dec 2024 – present',
    points: [
      'Directs all performance programming for football, soccer and lacrosse athletes',
      'Builds long-term athletic development systems for youth, high school, college and pro athletes',
      'Created the exercise library and online training resources used by athletes and coaches',
      'Trains and mentors the coaching staff on program design and coaching standards',
      'Brought in ARPwave recovery technology to speed up rehab and return to play',
    ],
  },
  {
    org: 'Kula Sports Performance',
    title: 'Vice President of Operations & Master Coach',
    dates: 'Jun 2022 – Aug 2024',
    points: [
      'Designed team programs for high school and club programs across the Denver area',
      'Coached individual athletes remotely through the KSP Remote Training platform',
      'Built the operating systems and processes that let the coaching team scale',
    ],
  },
  {
    org: 'APEC (Athletes’ Performance Enhancement Center)',
    title: 'Training Director & Lead Performance Coach',
    dates: 'May 2014 – Apr 2022',
    points: [
      'Director of Professional Sports Performance for NFL, MLB and MiLB athletes',
      'Prepared more than 200 athletes for the NFL Combine and Pro Days',
      'Directed programming from elementary and middle school through college athletics',
      'Youth Development Coordinator: built the long-term development model focused on movement quality, speed, strength and injury prevention',
      'Lead Adult Performance Coach, 2016 – 2020',
    ],
  },
];

export const certifications = [
  { short: 'CSCS', name: 'Certified Strength and Conditioning Specialist' },
  { short: 'PN1', name: 'Precision Nutrition Level 1' },
  { short: 'XPS', name: 'EXOS Performance Specialist' },
  { short: 'TPI', name: 'Titleist Performance Institute' },
  { short: 'CAFS', name: 'Certified Athletic Functional Exercise Specialist' },
  { short: 'CAPEC', name: 'Certified Athletic Performance Enhancement Coach' },
  { short: 'PRIMAL', name: 'PRIMAL Certification' },
];
