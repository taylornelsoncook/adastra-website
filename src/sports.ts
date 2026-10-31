// One page per sport at /sports/<slug>/. Edit the words here; the page layout is in src/pages/sports/[slug].astro.
// Proof lines only use teams, programs and athletes from the coach's resume (src/coaches.ts).

import { proAthletes } from './coaches';

export type Sport = {
  slug: string;
  name: string;
  athlete: string; // "football players"
  headline: string;
  intro: string;
  focus: { t: string; d: string }[];
  proof: { label: string; items: string[] }[];
  classes: string[]; // class names from the schedule that fit this sport
  faqs: { q: string; a: string }[];
};

export const sports: Sport[] = [
  {
    slug: 'football',
    name: 'Football',
    athlete: 'football players',
    headline: 'Get faster, stronger and harder to tackle.',
    intro:
      'Football training built by a coach who has prepared 200+ athletes for the NFL Combine and Pro Days. Acceleration, top speed, power and strength for every position, from high school through college.',
    focus: [
      { t: 'First-step speed', d: 'Acceleration and starts that win the first three steps, the ones that decide most plays.' },
      { t: 'Position-ready power', d: 'Explosive lower-body and upper-body power for linemen, skill players and everyone in between.' },
      { t: 'Strength that holds up', d: 'Lifting from tested maxes, progressed every block, built to last a full season of contact.' },
      { t: 'Combine and camp testing', d: '40-yard dash, shuttle, vertical and broad jump coaching for camps, combines and recruiting.' },
    ],
    proof: [
      { label: 'NFL athletes trained', items: proAthletes.nfl.slice(0, 10) },
      { label: 'Programs', items: ['Regis Jesuit Football', 'Arapahoe High School Football', 'Altus High School Football'] },
    ],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Do you train football players in season?', a: 'Yes. In season, training load comes down around games so players stay fast and fresh, then builds back up between games.' },
      { q: 'Can you help with combine and camp testing?', a: 'Yes. We coach the 40, shuttle and jumps, and we test them regularly so you know your numbers before camp.' },
    ],
  },
  {
    slug: 'lacrosse',
    name: 'Lacrosse',
    athlete: 'lacrosse players',
    headline: 'Win the ground ball. Beat your defender.',
    intro:
      'Lacrosse speed, agility and strength training with dedicated youth and high school lacrosse groups. Built for the sprints, cuts and contact that decide lacrosse games.',
    focus: [
      { t: 'Change of direction', d: 'Cutting, dodging and recovering at full speed, coached rep by rep.' },
      { t: 'Repeat sprint ability', d: 'The conditioning to sprint, recover and sprint again in the fourth quarter.' },
      { t: 'Upper-body and core power', d: 'Shot speed and contact strength built through rotational power and lifting.' },
      { t: 'Injury reduction', d: 'Knee, ankle and hamstring work that keeps lacrosse players on the field.' },
    ],
    proof: [{ label: 'Programs', items: ['Valor Lacrosse', 'Youth and high school lacrosse groups at Ad Astra'] }],
    classes: ['Youth Lacrosse', 'High School Lacrosse', 'HS Lacrosse'],
    faqs: [
      { q: 'Do you have lacrosse-only groups?', a: 'Yes. Youth Lacrosse and High School Lacrosse each have their own weekly sessions. See the schedule for days and times.' },
      { q: 'What age can youth lacrosse players start?', a: 'Ask a coach about your athlete’s age and experience and we will point you to the right group.' },
    ],
  },
  {
    slug: 'soccer',
    name: 'Soccer',
    athlete: 'soccer players',
    headline: 'First to the ball, last one tired.',
    intro:
      'Soccer performance training for speed, agility and durability, from a coach who has built programs for Real Colorado and Colorado United and directs soccer performance training today.',
    focus: [
      { t: 'Acceleration and top speed', d: 'Win the race to the ball and recover on defense.' },
      { t: 'Agility and deceleration', d: 'Stop, turn and go without losing speed or loading the knees badly.' },
      { t: 'Match fitness', d: 'Repeat sprint conditioning that lasts all 90 minutes.' },
      { t: 'ACL and hamstring injury reduction', d: 'Landing, cutting and hamstring strength work shown in research to lower injury risk.' },
    ],
    proof: [{ label: 'Programs', items: ['Real Colorado Soccer', 'Colorado United'] }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Will lifting make my soccer player slower or bulky?', a: 'No. Training is built for speed and durability, with loads chosen to make players faster and harder to knock off the ball.' },
      { q: 'Do you work around club schedules?', a: 'Yes. Training load is planned around games and tournaments so players are fresh when it counts.' },
    ],
  },
  {
    slug: 'baseball',
    name: 'Baseball',
    athlete: 'baseball players',
    headline: 'More velocity, more bat speed, faster to first.',
    intro:
      'Baseball performance training from a coach who has worked with MLB players including Bobby Witt Jr., Trevor Story and Bryce Elder. Rotational power, speed and arm care for high school and college players.',
    focus: [
      { t: 'Rotational power', d: 'Hip and core power that carries into bat speed and throwing velocity.' },
      { t: 'Speed on the bases', d: 'Acceleration and sprint mechanics for home to first and first to third.' },
      { t: 'Arm care and durability', d: 'Shoulder and elbow strength and mobility to stay healthy through a long season.' },
      { t: 'Strength in the off-season', d: 'Build the base in the off-season and keep it through the spring.' },
    ],
    proof: [{ label: 'MLB athletes trained', items: proAthletes.mlb }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Do you train pitchers?', a: 'Yes. Pitchers get arm care, mobility and lower-body power work built around their throwing schedule.' },
      { q: 'When should baseball players train?', a: 'The off-season is the time to build strength and power. In season we maintain it so players stay strong into the summer.' },
    ],
  },
  {
    slug: 'basketball',
    name: 'Basketball',
    athlete: 'basketball players',
    headline: 'Jump higher, move quicker, finish stronger.',
    intro:
      'Basketball performance training for vertical, quickness and durability, from a coach who has built programs for state-champion Rock Canyon Basketball.',
    focus: [
      { t: 'Vertical jump', d: 'Plyometrics and lower-body power to get off the floor faster and higher.' },
      { t: 'Lateral quickness', d: 'Defensive slides, closeouts and first-step quickness.' },
      { t: 'Strength through contact', d: 'Finish through bodies and hold position in the post.' },
      { t: 'Knee and ankle durability', d: 'Landing mechanics and strength work to stay healthy on hard courts.' },
    ],
    proof: [{ label: 'Programs', items: ['Rock Canyon Basketball (state champions)'] }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Can training really improve vertical jump?', a: 'Yes. Our head coach’s combine athletes averaged a 5.5 inch vertical improvement. Every athlete is tested so you see your own progress.' },
      { q: 'Do you train basketball players in season?', a: 'Yes, at a lower volume so legs stay fresh for games.' },
    ],
  },
  {
    slug: 'swimming',
    name: 'Swim',
    athlete: 'swimmers',
    headline: 'Stronger off the blocks and the walls.',
    intro:
      'Dryland training for swimmers: power for starts and turns, shoulder durability, and strength that carries into the water. Built by a coach who has programmed for HRA Swim.',
    focus: [
      { t: 'Starts and turns', d: 'Lower-body power for explosive starts and push-offs.' },
      { t: 'Shoulder health', d: 'Strength and mobility to handle high yardage without shoulder pain.' },
      { t: 'Core and trunk strength', d: 'A strong, stable body line through every stroke.' },
      { t: 'Taper-aware planning', d: 'Dryland load planned around your meet and taper schedule.' },
    ],
    proof: [{ label: 'Programs', items: ['HRA Swim'] }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Is dryland training worth it for swimmers?', a: 'Yes. Strength and power out of the water helps starts, turns and shoulder durability, as long as it is planned around pool training.' },
      { q: 'Will lifting affect my taper?', a: 'Dryland is planned around your meets so you are fresh when you taper.' },
    ],
  },
  {
    slug: 'track-and-field',
    name: 'Track and Field',
    athlete: 'track and field athletes',
    headline: 'Speed is a skill. We coach it.',
    intro:
      'Sprint, jump and throw performance training: acceleration, max velocity, power and strength, from a coach whose combine athletes cut an average of 0.33 seconds off their 40.',
    focus: [
      { t: 'Acceleration', d: 'Block starts, drive phase and the first 30 meters.' },
      { t: 'Max velocity', d: 'Sprint mechanics that hold top speed longer.' },
      { t: 'Power for jumpers and throwers', d: 'Plyometrics and Olympic-style lifts for more distance and height.' },
      { t: 'Hamstring durability', d: 'The strength work sprinters need to stay healthy at top speed.' },
    ],
    proof: [{ label: 'Results', items: ['200+ NFL Combine athletes prepared', '0.33s average 40-yard dash improvement', '+12 inch average broad jump improvement'] }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Do you coach sprint technique?', a: 'Yes. Speed work is coached, timed and progressed, not just conditioning.' },
      { q: 'Can field event athletes train with you?', a: 'Yes. Jumpers and throwers get power and strength work built for their event.' },
    ],
  },
];
