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

// "Our focus" block on each sport page: one photo, a short summary, and one line per training area.
// Written as what we focus on for the sport, not a session plan. Each athlete's program is set from their evaluation, age and season.
export type Training = {
  photo: { src: string; small: string; alt: string; w: number; h: number };
  summary: string;
  warmup: string;
  speed: string;
  power: string;
  strength: string;
};

export const training: Record<string, Training> = {
  football: {
    photo: { src: '/photos/qb-throw.webp', small: '/photos/qb-throw-800.webp', alt: 'Quarterback throwing as the coach watches during an outdoor session', w: 1068, h: 1600 },
    summary: 'Football is decided in short bursts: the first three steps, the collision and the next snap. Training centers on acceleration, force and the strength to absorb contact for a full season.',
    warmup: 'Hips, ankles and hamstrings prepared for explosive starts, so the first sprint of the day is a fast one.',
    speed: 'Acceleration out of a stance and the first 10 yards, with top-speed work for skill positions.',
    power: 'Jumping and throwing to turn strength into explosiveness off the line and through contact.',
    strength: 'Lower-body and upper-body strength built from tested numbers to hold up to hits all season.',
  },
  lacrosse: {
    photo: { src: '/photos/youth-speed-class.webp', small: '/photos/youth-speed-class-800.webp', alt: 'Coach demonstrating a high-knee drill to a youth speed class', w: 1065, h: 1600 },
    summary: 'Lacrosse rewards the player who can cut, accelerate and do it again in the fourth quarter. Training centers on change of direction, repeat sprints and rotational power for shooting and contact.',
    warmup: 'Hips, groin and ankles prepared for hard cuts and quick changes of direction.',
    speed: 'Acceleration out of dodges and ground balls, and the conditioning to repeat it all game.',
    power: 'Lateral and rotational power that shows up in dodges, shot speed and checks.',
    strength: 'Single-leg, upper-body and core strength that protects knees and ankles and wins contact.',
  },
  soccer: {
    photo: { src: '/photos/cu-soccer.webp', small: '/photos/cu-soccer-800.webp', alt: 'Coach with a University of Colorado soccer player after a game', w: 1200, h: 1600 },
    summary: 'Soccer players sprint, slow down and turn hundreds of times a match. Training centers on getting to the ball first, stopping and turning under control, and staying healthy through a long season.',
    warmup: 'Hips, groin and hamstrings prepared for sprinting and turning, the areas soccer injuries hit most.',
    speed: 'Short acceleration and top speed for runs in behind and recovery on defense.',
    power: 'Single-leg power for explosive first steps, jumps and stronger tackles.',
    strength: 'Hamstring, groin and calf strength that holds up to 90 minutes and a full season.',
  },
  baseball: {
    photo: { src: '/photos/banded-lunge-start.webp', small: '/photos/banded-lunge-start-800.webp', alt: 'Coach holding a resistance band as an athlete drives out of a lunge start', w: 1600, h: 1152 },
    summary: 'Baseball is a rotational, explosive sport played in single efforts. Training centers on first-step speed, rotational power for hitting and throwing, and keeping shoulders and elbows healthy.',
    warmup: 'Thoracic spine, hips and shoulders prepared to rotate freely and throw safely.',
    speed: 'First-step quickness for stealing, fielding and running the bases.',
    power: 'Rotational power from the ground up for bat speed and throwing velocity.',
    strength: 'Leg and trunk strength to drive power, plus shoulder and arm care for a long season.',
  },
  basketball: {
    photo: { src: '/photos/skip-demo.webp', small: '/photos/skip-demo-800.webp', alt: 'Coach demonstrating a high-knee skip as pro athletes watch', w: 1600, h: 1097 },
    summary: 'Basketball is a game of first steps, jumps and landings, repeated all game. Training centers on a quicker first step, a higher and more repeatable jump, and the strength to land safely.',
    warmup: 'Ankles, knees and hips prepared for jumping and landing on a hard court.',
    speed: 'First-step quickness on drives and defensive slides, and sprinting the floor.',
    power: 'Vertical and lateral power for rebounds, finishing at the rim and closeouts.',
    strength: 'Leg and trunk strength to absorb landings, hold position and finish through contact.',
  },
  swimming: {
    photo: { src: '/photos/shoulder-mobility.webp', small: '/photos/shoulder-mobility-800.webp', alt: 'Coach correcting shoulder position during a ring mobility drill', w: 1600, h: 1039 },
    summary: 'Swimmers win races off the blocks and the walls and need shoulders that last through high yardage. Dryland training centers on explosive starts and turns, a strong trunk, and shoulder health.',
    warmup: 'Shoulders, upper back and ankles prepared to move through a full range without pain.',
    speed: 'Quick reaction and leg drive for faster starts off the blocks.',
    power: 'Jumping power that carries into starts and push-offs from the wall.',
    strength: 'Pulling, leg and core strength, with shoulder work that holds up to the yardage.',
  },
  'track-and-field': {
    photo: { src: '/photos/sprint-talk.webp', small: '/photos/sprint-talk-800.webp', alt: 'Coach explaining a sprint cue to a young athlete on an indoor track', w: 1600, h: 1067 },
    summary: 'Track athletes are measured to the hundredth, so technique and force both matter. Training centers on sprint mechanics, acceleration and top speed, and the power behind jumps and throws.',
    warmup: 'Sprint drills that rehearse posture and rhythm before every session.',
    speed: 'Starts, acceleration and max-velocity work coached for technique and timed for progress.',
    power: 'Bounding and jumping that build elastic, reactive power for sprints and jumps.',
    strength: 'Hip, hamstring and calf strength to run faster and keep hamstrings healthy.',
  },
  golf: {
    photo: { src: '/photos/overhead-mobility.webp', small: '/photos/overhead-mobility-800.webp', alt: 'Coach cueing ribcage position during an overhead mobility screen', w: 1067, h: 1600 },
    summary: 'Golfers gain distance by moving well and producing speed from the ground up. Training centers on hip and upper-back mobility, rotational power for clubhead speed, and a resilient lower back.',
    warmup: 'Hips and upper back prepared to rotate fully, so the swing is not forced through the lower back.',
    speed: 'Clubhead speed training and quick, athletic footwork.',
    power: 'Rotational power that transfers from the legs through the trunk into the club.',
    strength: 'Leg and core strength that supports a stable swing and protects the lower back.',
  },
};
