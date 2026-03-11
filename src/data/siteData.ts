import type { ZenithEvent, TeamGroup, ScheduleItem, ContactCard } from '../types';

/* ═══════════════════════════════════════════════════════════
   EVENTS DATA
   ═══════════════════════════════════════════════════════════ */

export const events: ZenithEvent[] = [
  /* ── 1. INTRUDEX45 ─────────────────────────────────────── */
  {
    id: 'intrudex45',
    title: 'INTRUDEX45',
    category: 'technical',
    participants: 4,
    format: 'Team of 4',
    description:
      'INTRUDEX45 is a rapid machine learning challenge where teams bid for datasets and build a working ML model within a strict time limit.',
    fullDescription:
      'INTRUDEX45 – Rapid Model Development Challenge is a technical competition designed to test participants\' strategic thinking and machine learning implementation skills. Teams first participate in a dataset auction where they bid using virtual credits to acquire a dataset. After securing a dataset, teams must quickly preprocess the data, select an appropriate machine learning model, train it, and generate performance metrics within a limited time. The event evaluates participants\' ability to make strategic decisions, build efficient models, and explain their approach effectively.',
    rounds: [
      {
        title: 'Round 1 – Dataset Auction',
        description:
          'Each team receives virtual credits and strategically bids for one dataset displayed with details such as domain, problem type, dataset size, and feature information.',
      },
      {
        title: 'Round 2 – Rapid Model Challenge',
        description:
          'Teams use the acquired dataset to perform data preprocessing, select a suitable machine learning model, train the model, and generate performance metrics within the time limit.',
      },
    ],
    rules: [
      'Each team must consist of 4 participants.',
      'Internet usage may not be allowed depending on lab policy.',
      'Pre-trained models are strictly prohibited.',
      'External datasets cannot be used.',
      'Participants must submit their code at the end of the event.',
      "Judges' decisions will be final.",
    ],
    coordinators: [
      { name: 'Vignesh K', phone: '+91 7695968502' },
      { name: 'Ranjith Kumar K', phone: '+91 979190758' },
    ],
    image: '/assets/events/Indrudex.png',
    poster: '/assets/posters/Indrudex.jpeg',
    pdf: '/assets/docs/Indrudex-45.pdf',
  },

  /* ── 2. UI Matrix ──────────────────────────────────────── */
  {
    id: 'ui-matrix',
    title: 'UI Matrix',
    category: 'technical',
    participants: 2,
    format: 'Team of 2',
    description:
      'UI Matrix is a fast-paced frontend interface coding challenge where teams design and develop a creative user interface from scratch within a limited time.',
    fullDescription:
      'UI Matrix challenges teams to transform a given concept into a clean, responsive interface within limited time, using HTML, CSS and JavaScript creativity.',
    rounds: [
      {
        title: 'Step 1 – UI Idea Announcement',
        description:
          'A UI concept such as an e-commerce product page, event registration interface, student dashboard, travel booking interface, or fitness app homepage will be given on the spot. Teams must quickly plan the layout and structure the UI components.',
      },
      {
        title: 'Step 2 – UI Development',
        description:
          'Teams must build the complete interface within the given time, focusing on structured layout, proper spacing, visually appealing design, clean code, and responsive behavior. Bonus features such as animations or interactive elements may be added if time permits.',
      },
    ],
    rules: [
      'Each team must consist of two participants.',
      'Internet connection will not be provided during the competition.',
      'Mobile phones are strictly prohibited.',
      'Pre-built templates are not allowed.',
      'Copying code from external sources is strictly prohibited.',
      'Participants must build the UI completely from scratch.',
      'Only offline tools and software may be used.',
      "Judges' decisions will be final.",
    ],
    coordinators: [
      { name: 'Dharani M P', phone: '+91 9042078814' },
      { name: 'ParvinKumar K', phone: '+91 7010910428' },
    ],
    image: '/assets/events/UI matrix.png',
    poster: '/assets/posters/UI Matrix.jpeg',
    pdf: '/assets/docs/UI_MATRIX.pdf',
  },

  /* ── 3. Prompt To Pick ─────────────────────────────────── */
  {
    id: 'prompt-to-pick',
    title: 'Prompt To Pick',
    category: 'technical',
    participants: 1,
    format: 'Individual',
    description:
      'Prompt to Pick is an AI prompt engineering competition where participants design effective prompts to generate accurate and creative AI outputs.',
    fullDescription:
      "Prompt to Pick is an interactive competition that tests participants' creativity and skills in AI prompt engineering. The event has two rounds: the first focuses on creating a structured prompt using given elements such as topic, audience, format, and tone, while the second requires participants to generate an AI image similar to a reference image using a descriptive prompt. The competition helps participants improve creative thinking, prompt design, and effective communication with AI tools.",
    rounds: [
      {
        title: 'Round 1 – Prompt Puzzle',
        description:
          'Participants receive prompt elements such as Topic, Audience, Format, and Tone. They must combine these elements logically to create a clear and structured prompt.',
      },
      {
        title: 'Round 2 – Vision to Visual',
        description:
          'Participants are shown a reference image and must recreate a similar image using an AI image generation tool by writing a detailed descriptive prompt.',
      },
    ],
    rules: [
      'Each participant must work individually.',
      'Participants must use all provided prompt elements in Round 1.',
      'AI tools may only be used for prompt testing or image generation.',
      'Uploading the reference image directly into the generator is not allowed.',
      'Participants must complete each round within the given time limit.',
      "Judges' decisions will be final.",
    ],
    coordinators: [
      { name: 'Sriharipriya', phone: '+91 9360767536' },
      { name: 'Charnika', phone: '+91 9095807580' },
    ],
    image: '/assets/events/P2P.png',
    poster: '/assets/posters/p2p.jpeg',
    pdf: '/assets/docs/P2P-description.pdf',
  },

  /* ── 4. Reverse Arena ──────────────────────────────────── */
  {
    id: 'reverse-arena',
    title: 'Reverse Arena',
    category: 'technical',
    participants: 3,
    format: 'Team of up to 3',
    description:
      'Reverse Arena is an intense cybersecurity challenge where participants analyze binaries, encoded files, and scripts to uncover hidden logic and capture flags.',
    fullDescription:
      "Reverse Arena is a reverse engineering competition designed to test analytical thinking, technical expertise, and problem-solving skills under pressure. Participants are given compiled programs, binaries, encoded files, or obfuscated scripts and must analyze them to uncover hidden logic, vulnerabilities, or secrets. The goal is to reverse engineer the challenges and extract the correct flags within the allotted time. This event simulates real-world cybersecurity scenarios such as malware analysis and vulnerability discovery.",
    rounds: [
      {
        title: 'Reverse Engineering Challenge',
        description:
          'Teams analyze provided binaries, executables, or scripts to identify hidden logic, decode protected content, and capture the correct flags within the time limit.',
      },
    ],
    rules: [
      'Participants may compete individually or in teams of up to three members.',
      'Participants must analyze the provided files and extract the correct flags.',
      'Sharing flags between teams is strictly prohibited.',
      'Internet access may be restricted depending on organizer rules.',
      'Fair play must be maintained throughout the competition.',
      "Judges' decisions will be final.",
    ],
    coordinators: [
      { name: 'Abarnesh S', phone: '+91 9944254586' },
      { name: 'Yuvaraja A', phone: '+91 7200080804' },
    ],
    image: '/assets/events/Rev Arena.jpg',
    poster: '/assets/posters/RevArena.jpeg',
    pdf: '/assets/docs/Revarena_Event.pdf',
  },

  /* ── 5. E-Sports ───────────────────────────────────────── */
  {
    id: 'esports',
    title: 'E-Sports',
    category: 'non-technical',
    participants: 4,
    format: 'Team of 4',
    description:
      'E-Sports is a competitive gaming event where participants compete in popular mobile games such as BGMI, Free Fire, and eFootball, testing teamwork, strategy, and gaming skills.',
    fullDescription:
      'E-Sports is an exciting gaming competition designed for students who are passionate about competitive mobile gaming. Participants will compete in popular games such as BGMI, Free Fire, and eFootball. The tournament focuses on teamwork, quick decision-making, and strategic gameplay. Matches will be conducted depending on the number of registered teams and players, with participants competing in different battle modes to determine the winners.',
    rounds: [
      { title: 'BGMI Tournament', description: 'Team-based battle royale matches.' },
      { title: 'Free Fire Tournament', description: 'Team-based battle royale matches.' },
      { title: 'eFootball Tournament', description: 'Competitive football gaming matches.' },
    ],
    rules: [
      'Only mobile devices such as smartphones or tablets are allowed.',
      'Each BGMI and Free Fire team must consist of 4 players.',
      'No substitute players are allowed during matches.',
      'Use of hacks, illegal apps, or unfair methods is strictly prohibited.',
      'Participants must maintain respectful behavior during the tournament.',
      'Breaking tournament rules or misconduct will lead to disqualification.',
      "Organizers' decisions will be final.",
    ],
    coordinators: [
      { name: 'Bharath', phone: '+91 8667308494' },
      { name: 'Siva', phone: '+91 8675015407' },
    ],
    image: '/assets/events/Esports.jpeg',
    poster: '/assets/posters/E-Sports.jpeg',
    pdf: '/assets/docs/E-sports.pdf',
  },

  /* ── 6. Spot and Solve ─────────────────────────────────── */
  {
    id: 'spot-and-solve',
    title: 'Spot and Solve',
    category: 'non-technical',
    participants: 1,
    format: 'Individual',
    description:
      'Spot and Solve is an image-based OSINT quiz where participants analyze real-world images and identify locations, landmarks, and other visual clues using logical reasoning and research.',
    fullDescription:
      'Spot and Solve is an image-based Open Source Intelligence (OSINT) challenge where participants examine real-world images to extract visual clues and answer location-based questions. Using publicly available tools, AI platforms, maps, and search engines, participants must identify locations, landmarks, coordinates, and time of day from the images. The event tests visual intelligence, analytical thinking, and online research skills while encouraging participants to apply logical reasoning and investigative techniques.',
    rounds: [
      {
        title: 'Image Analysis Quiz',
        description:
          'Participants analyze real-world images and answer questions about locations, landmarks, and visual clues within the time limit.',
      },
    ],
    rules: [
      'Individual participation only.',
      'The total time limit for the event is 30 minutes.',
      'Participants may use publicly available tools, AI platforms, search engines, maps, and public databases.',
      'Participants can revisit previous questions within the time limit.',
      'No discussion or collaboration with other participants is allowed.',
      'Each correct answer carries 2 points.',
      'All answers must be verified using Google Maps.',
      'Unverified answers will not be considered.',
      'Any unethical practices or rule violations will lead to disqualification.',
    ],
    coordinators: [
      { name: 'Dhiyanamoorthy M', phone: '+91 8680864850' },
      { name: 'Vaishnavi', phone: '+91 9043617369' },
    ],
    image: '/assets/events/Spot and Solve.jpeg',
    poster: '/assets/posters/spotand solve.jpeg',
    pdf: '/assets/docs/spot_and_solve_zenith.pdf',
  },

  /* ── 7. Inter-College Blitz Chess Championship ─────────── */
  {
    id: 'chess',
    title: 'Inter-College Blitz Chess Championship',
    category: 'non-technical',
    participants: 1,
    format: 'Individual',
    description:
      'Inter-College Blitz Chess Championship is a competitive chess event featuring an online qualification round followed by an over-the-board knockout stage to determine the final champion.',
    fullDescription:
      'The Inter-College Blitz Chess Championship is a competitive inter-college event that combines an online qualification stage with an over-the-board knockout stage. Participants first compete in a fast-paced online arena tournament using the Lichess mobile platform. The top four players from the qualification stage advance to the physical knockout rounds, including semifinals and a final match, where a single overall champion will be crowned.',
    rounds: [
      {
        title: 'Stage 1 – Online Qualification',
        description: 'Fast-paced online arena tournament on the Lichess mobile platform.',
      },
      {
        title: 'Stage 2 – Knockout Stage',
        description: 'Top four players compete in physical semifinals and final matches.',
      },
    ],
    rules: [
      'Each participant must compete individually.',
      'Only verified Lichess accounts are allowed for the online qualification stage.',
      'Participants must use the Lichess mobile application on their personal device.',
      'No headphones, Bluetooth devices, or smartwatches are allowed during the game.',
      'Phone must remain on the table with Do Not Disturb mode enabled.',
      "Network stability is the participant's responsibility.",
      "Judges and the Chief Arbiter's decision will be final in all matters.",
    ],
    coordinators: [
      { name: 'Hanish', phone: '+91 8248421320' },
      { name: 'ParvinKumar K', phone: '+91 7010910428' },
    ],
    image: '/assets/events/Chess.jpeg',
    poster: '/assets/posters/Chess.jpeg',
    pdf: '/assets/docs/Chess_zenith.pdf',
  },

  /* ── 8. IPL Auction ────────────────────────────────────── */
  {
    id: 'ipl-auction',
    title: 'IPL Auction',
    category: 'non-technical',
    participants: 4,
    format: 'Team of 3–4',
    description:
      'IPL Auction is an interactive simulation where teams build a cricket squad by bidding for players using virtual money, testing their cricket knowledge, strategy, and budget management skills.',
    fullDescription:
      "The IPL Auction Simulation is an engaging competition where participants experience the excitement of forming a cricket team similar to the Indian Premier League auction. Teams compete by answering cricket-related quiz questions, strategically bidding for players using virtual money, and building a balanced squad. The event evaluates participants' cricket knowledge, decision-making ability, team strategy, and budget management skills while encouraging teamwork and strategic thinking.",
    rounds: [
      {
        title: 'Round 1 – Player Knowledge Quiz',
        description: 'Cricket-related quiz to determine auction order and advantages.',
      },
      {
        title: 'Round 2 – Mini IPL Auction',
        description: 'Teams bid for cricket players using virtual auction budget.',
      },
      {
        title: 'Round 3 – Team Strategy Presentation',
        description: 'Teams present their squad composition and strategy to the judges.',
      },
    ],
    rules: [
      'Each team must consist of 3 to 4 participants.',
      'All teams will receive the same virtual auction budget.',
      'Teams must follow the time limits for each round.',
      'Fair play and discipline must be maintained throughout the event.',
      'Unfair practices or cheating will lead to disqualification.',
      "The organizers' decision will be final.",
    ],
    coordinators: [
      { name: 'Muthu Kumar', phone: '+91 9043625680' },
      { name: 'Mukil Kumar', phone: '+91 8248372754' },
    ],
    image: '/assets/events/IPL Auction.jpeg',
    poster: '/assets/posters/IPL auction.jpeg',
    pdf: '/assets/docs/IPL AUCTION.pdf',
  },

  /* ── 9. Find the Song ──────────────────────────────────── */
  {
    id: 'find-the-song',
    title: 'Find the Song',
    category: 'fun',
    participants: 1,
    format: 'Individual',
    description:
      'Find the Song is a music-based challenge where participants listen to short audio clips and identify the correct song title, movie, or artist within the given time.',
    fullDescription:
      'Find the Song is an exciting music quiz where participants listen to short audio clips and identify the song title, movie name, or singer associated with the clip. The clips may include instrumental music, background tunes, or short lyric segments. Participants must rely on their listening skills, memory, and quick thinking to recognize the songs. The event tests musical knowledge, attention to detail, and speed of identification.',
    rounds: [
      {
        title: 'Audio Quiz Round',
        description:
          'Participants listen to short audio clips and identify the song, movie, or singer within the time limit.',
      },
    ],
    rules: [
      'Individual participation only.',
      'The total event duration is 30 minutes.',
      'Participants must not discuss answers with others during the event.',
      'Use of music recognition apps or external assistance is strictly prohibited.',
      'Participants may revisit previous questions within the given time limit.',
      'Each correct answer will be awarded one point.',
      'Any misconduct or cheating will lead to disqualification.',
    ],
    coordinators: [
      { name: 'Dharshinipriya', phone: '+91 9655579278' },
      { name: 'Yasheeka', phone: '+91 9025930191' },
    ],
    image: '/assets/events/Find the song.png',
    poster: '/assets/posters/Find the song.jpeg',
    pdf: '/assets/docs/find the song.pdf',
  },
];

/* ═══════════════════════════════════════════════════════════
   SCHEDULE
   ═══════════════════════════════════════════════════════════ */

export const schedule: ScheduleItem[] = [
  {
    time: '09:00 AM',
    title: 'Inauguration Ceremony',
    description: 'Official commencement of Zenith 2k26 with our chief guests.',
  },
  {
    time: '10:00 AM',
    title: 'Technical Events',
    description: 'Intrudex45, UI Matrix, Prompt to Pick and Rev Arena.',
  },
  {
    time: '12:30 PM',
    title: 'Lunch',
    description: 'Enjoy a delicious lunch and connect with fellow participants.',
  },
  {
    time: '01:30 PM',
    title: 'Non-Technical Events',
    description: 'E-Sports, IPL Auction, Chess and Spot and Solve.',
  },
  {
    time: '03:15 PM',
    title: 'Fun Events',
    description: 'Find the Song.',
  },
  {
    time: '03:45 PM',
    title: 'Prize Distribution',
    description: 'Prize distribution and closing remarks.',
  },
];

/* ═══════════════════════════════════════════════════════════
   TEAM / COMMITTEE
   ═══════════════════════════════════════════════════════════ */

export const teamGroups: TeamGroup[] = [
  {
    title: 'Principal',
    members: [
      {
        name: 'Dr. S. Suresh Kumar',
        role: 'Principal',
        image: '/assets/committee/Principal.webp',
      },
    ],
  },
  {
    title: 'Head of Department',
    members: [
      {
        name: 'Dr. NirmalaDevi J',
        role: 'HOD',
        department: 'IT & AIML',
        image: '/assets/committee/Dr-Nirmaladevi-J.webp',
      },
      {
        name: 'Dr. Joel Anandraj E',
        role: 'HOD',
        department: 'CYS',
        image: '/assets/committee/Mr-Joel-Anandraj-E.webp',
      },
    ],
  },
  {
    title: 'Staff Coordinators',
    members: [
      {
        name: 'Prof. R.Shirley',
        role: 'Staff Coordinator',
        department: 'Department of AIML',
        image: '/assets/committee/Ms-Shirley-Josephine-Mary-R.webp',
      },
      {
        name: 'Prof. C.Suresh Kumar',
        role: 'Staff Coordinator',
        department: 'Department of IT',
        image: '/assets/committee/Mr-Sureshkumar-C.webp',
      },
      {
        name: 'Prof. R.Kamalakannan',
        role: 'Staff Coordinator',
        department: 'Department of CYS',
        image: '/assets/committee/Mr-Kamalakkannan-R.webp',
      },
    ],
  },
  {
    title: 'Student Coordinators',
    members: [
      {
        name: 'K.Parvinkumar',
        role: 'Student Coordinator',
        department: 'Department of IT',
        image: '/assets/committee/Prasanth.png', // fallback, using available
      },
      {
        name: 'Mega Varshini',
        role: 'Student Coordinator',
        department: 'Department of IT',
        image: '/assets/committee/mega.png',
      },
      {
        name: 'S.Sri Vatsan',
        role: 'Student Coordinator',
        department: 'Department of AIML',
        image: '/assets/committee/Vatsan.png',
      },
      {
        name: 'S.Prasanth',
        role: 'Student Coordinator',
        department: 'Department of CYS',
        image: '/assets/committee/Prasanth.png',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   CONTACTS
   ═══════════════════════════════════════════════════════════ */

export const contacts: ContactCard[] = [
  {
    name: 'Shirley Josphine Mary R',
    role: 'Staff Coordinator',
    phone: '+91 95979 95659',
  },
  {
    name: 'Parvinkumar K',
    role: 'Student Coordinator',
    phone: '+91 70109 10428',
  },
];

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════ */

export const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfcAEgGAK4hzb6sBqy6F-cB9-yOndYrjvXFfHc-vazbtyqsEA/viewform?usp=publish-editor';

export const TARGET_DATE = new Date('2026-03-24T08:30:00').getTime();

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/KGiSL+Institute+of+Technology/@11.0546,76.9919,17z';

export const VIDEO1_FRAME_COUNT = 252;
export const VIDEO2_FRAME_COUNT = 168;
