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
  {
    slug: 'golf',
    name: 'Golf',
    athlete: 'golfers',
    headline: 'More club speed. Fewer aches.',
    intro:
      'Golf performance training from a Titleist Performance Institute (TPI) certified coach: rotational power, mobility and strength for more club head speed and a body that holds up through the season.',
    focus: [
      { t: 'Club head speed', d: 'Rotational power and lower-body force that turn into distance off the tee.' },
      { t: 'Mobility for the swing', d: 'Hip, thoracic and shoulder mobility so you can reach the positions your swing needs.' },
      { t: 'Strength and stability', d: 'A strong base and trunk to stay balanced and repeatable through impact.' },
      { t: 'Back and joint health', d: 'Training that protects the lower back, hips and shoulders from the stress of repetitive swings.' },
    ],
    proof: [{ label: 'Certification', items: ['Titleist Performance Institute (TPI)', 'Certified Strength and Conditioning Specialist (CSCS)'] }],
    classes: ['High School Performance', 'College Commits'],
    faqs: [
      { q: 'Does strength training help golfers?', a: 'Yes. Speed comes from the ground up, so stronger, more powerful golfers swing faster. Training also lowers the wear on the back and hips.' },
      { q: 'Do I need to be a competitive golfer?', a: 'No. Junior, high school and college golfers are all welcome, and every program starts from a movement screen.' },
    ],
  },
];

// Sample session blocks shown on each sport page: one photo plus example warm-up, speed, power and strength work.
// These are generic examples. Each athlete's actual program is set from their evaluation, age and season.
export type Training = {
  photo: { src: string; small: string; alt: string; w: number; h: number };
  warmup: string[];
  speed: string[];
  power: string[];
  strength: string[];
};

export const training: Record<string, Training> = {
  football: {
    photo: { src: '/photos/qb-throw.webp', small: '/photos/qb-throw-800.webp', alt: 'Quarterback throwing as the coach watches during an outdoor session', w: 1068, h: 1600 },
    warmup: ['Leg swings, front to back and side to side', 'World’s greatest stretch with a reach', 'A-march and A-skip', 'Two build-up runs at 70 and 85 percent'],
    speed: ['10-yard starts from a three-point stance', 'Resisted sled sprints, 10 to 20 yards', 'Flying 20s for top speed', '5-10-5 pro shuttle for change of direction'],
    power: ['Broad jumps and triple broad jumps', 'Box jumps from a quarter squat', 'Med ball chest pass and scoop toss', 'Hang power clean (high school and up)'],
    strength: ['Trap bar deadlift', 'Front or back squat', 'Bench press and dumbbell row', 'Split squats and Nordic hamstring curls'],
  },
  lacrosse: {
    photo: { src: '/photos/youth-speed-class.webp', small: '/photos/youth-speed-class-800.webp', alt: 'Coach demonstrating a high-knee drill to a youth speed class', w: 1065, h: 1600 },
    warmup: ['Walking knee hugs and quad pulls', 'Lateral lunges and hip openers', 'Carioca and backpedal', 'Line hops for quick feet'],
    speed: ['Short sprints from a ground-ball position', 'Cone dodges: plant, cut and accelerate', 'Defensive drop step into a sprint', 'Repeat 30-yard sprints with short rest'],
    power: ['Lateral bounds with a held landing', 'Rotational med ball throws for shot speed', 'Skater jumps', 'Box jumps'],
    strength: ['Goblet squats', 'Single-leg Romanian deadlifts', 'Push-ups and inverted rows', 'Pallof press and side planks'],
  },
  soccer: {
    photo: { src: '/photos/cu-soccer.webp', small: '/photos/cu-soccer-800.webp', alt: 'Coach with a University of Colorado soccer player after a game', w: 1200, h: 1600 },
    warmup: ['Adductor rockbacks and hip circles', 'Walking lunges with a twist', 'A-skips and B-skips', 'Lateral shuffles and crossover runs'],
    speed: ['5 to 10-yard acceleration starts', 'Curved sprints like an overlapping run', 'Flying 20s for top speed', 'Decelerate-and-turn drills'],
    power: ['Single-leg hops for distance', 'Lateral bounds with a held landing', 'Med ball overhead throws', 'Pogo jumps for ankle stiffness'],
    strength: ['Rear-foot elevated split squats', 'Nordic hamstring curls', 'Copenhagen side planks for the groin', 'Single-leg calf raises'],
  },
  baseball: {
    photo: { src: '/photos/banded-lunge-start.webp', small: '/photos/banded-lunge-start-800.webp', alt: 'Coach holding a resistance band as an athlete drives out of a lunge start', w: 1600, h: 1152 },
    warmup: ['Thoracic rotations on all fours', 'Band pull-aparts and arm circles', 'Walking lunges with an overhead reach', 'Build-up runs'],
    speed: ['Lead-off starts and first-step steals', '10-yard sprints from a split stance', 'Home-to-first sprints', 'Crossover steps into a sprint'],
    power: ['Rotational med ball scoop throws', 'Shot-put med ball throws from the stance', 'Lateral bounds', 'Broad jumps'],
    strength: ['Trap bar deadlift', 'Goblet or front squat', 'Single-arm dumbbell row', 'Rotator cuff band work and half-kneeling chops'],
  },
  basketball: {
    photo: { src: '/photos/skip-demo.webp', small: '/photos/skip-demo-800.webp', alt: 'Coach demonstrating a high-knee skip as pro athletes watch', w: 1600, h: 1097 },
    warmup: ['Ankle rocks and calf mobility', 'Lateral lunges', 'Skips for height', 'Defensive slides at half speed'],
    speed: ['First-step drives from a triple-threat stance', 'Defensive slide into a sprint', 'Baseline-to-baseline sprints', 'Reactive cone drills off a coach’s call'],
    power: ['Approach jumps off one and two feet', 'Depth jumps (trained athletes only)', 'Med ball slams', 'Lateral bounds with a held landing'],
    strength: ['Front squats', 'Romanian deadlifts', 'Single-leg step-ups', 'Push-ups, rows and core anti-rotation work'],
  },
  swimming: {
    photo: { src: '/photos/shoulder-mobility.webp', small: '/photos/shoulder-mobility-800.webp', alt: 'Coach correcting shoulder position during a ring mobility drill', w: 1600, h: 1039 },
    warmup: ['Band pull-aparts and external rotations', 'Thoracic spine rotations', 'Ankle and hip mobility', 'Streamline squats with arms overhead'],
    speed: ['Short dryland sprints for leg drive', 'Start reaction drills off a signal', 'Quick-feet ladder work', 'Sprint skips'],
    power: ['Squat jumps for starts and walls', 'Broad jumps', 'Med ball overhead slams', 'Med ball chest pass'],
    strength: ['Pull-ups or assisted pull-ups', 'Goblet squats', 'Single-arm rows', 'Dead bugs, side planks and Y-T-W raises'],
  },
  'track-and-field': {
    photo: { src: '/photos/sprint-talk.webp', small: '/photos/sprint-talk-800.webp', alt: 'Coach explaining a sprint cue to a young athlete on an indoor track', w: 1600, h: 1067 },
    warmup: ['Leg swings and hip mobility', 'A-march, A-skip and B-skip', 'Straight-leg bounds', 'Two to three build-ups'],
    speed: ['Block or three-point starts, 10 to 30 meters', 'Resisted sled sprints', 'Flying 30s for max velocity', 'Wicket runs for rhythm'],
    power: ['Standing broad and triple jumps', 'Bounding for distance', 'Hurdle hops', 'Overhead back med ball throws'],
    strength: ['Back squat', 'Hip thrusts', 'Nordic hamstring curls', 'Single-leg calf raises'],
  },
  golf: {
    photo: { src: '/photos/overhead-mobility.webp', small: '/photos/overhead-mobility-800.webp', alt: 'Coach cueing ribcage position during an overhead mobility screen', w: 1067, h: 1600 },
    warmup: ['Open books for thoracic rotation', '90/90 hip switches', 'Pelvic tilts and turns in a golf posture', 'Half-speed swings with a club'],
    speed: ['Speed-stick or overspeed swings', 'Short sprints for general athleticism', 'Lateral shuffle into a stop', 'Quick-feet ladder work'],
    power: ['Rotational med ball throws into a wall', 'Step-behind med ball scoop throws', 'Squat jumps', 'Lateral bounds'],
    strength: ['Trap bar deadlift', 'Split squats', 'Single-arm cable rows', 'Pallof press and anti-rotation holds'],
  },
};
