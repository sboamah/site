export class Projects {
  id!: number;
  title = '';
  img = '';
  role = '';
  description = '';
  key = '';
  projectType = '';
}

export const PROJECTS: Projects[] = [
  {
    id: 1,
    title: 'Mercedes Santana Fashion Website',
    img: 'assets/merfash_favicon.png',
    role: 'Web Developer',
    description: 'Redesigned a website for a fashion designer.',
    key: 'projects/merfash-website',
    projectType: 'sw'
  },
  {
    id: 2,
    title: 'ReCollect',
    img: 'assets/recollect_logo.png',
    role: 'Mobile UI/Front-End Developer',
    description:
      'Developed a mobile application for users with memory-related ailments to connect with family.',
    key: 'projects/recollect',
    projectType: 'sw'
  },
  {
    id: 3,
    title: 'Project Shadow',
    img: 'assets/ps_logo.png',
    role: 'Mobile UI Developer Intern',
    description:
      'Collaborated to integrate screens and finalize user workflows for an iOS and Android mobile stock trading application.',
    key: 'projects/project-shadow',
    projectType: 'sw'
  },
  {
    id: 4,
    title: 'Path Pioneer Case Study',
    img: 'assets/LHBanner.png',
    role: 'UX Designer',
    description:
      "Created a web and mobile prototype for a career coaching app for first-generation students.",
    key: 'projects/path-pioneer',
    projectType: 'ux'
  },
  {
    id: 5,
    title: 'Launch Hoboken Design Competition',
    img: 'assets/LHBanner.png',
    role: 'UI Design Finalist',
    description:
      "Created a website mockup for Launch Hoboken's online Innovation Portal; received second place.",
    key: 'projects/launch-hoboken',
    projectType: 'ux'
  },
  {
    id: 6,
    title: 'Positive Affirmation Generator',
    img: 'assets/PAGseconddesign.jpg',
    role: 'UI Designer and Developer',
    description:
      'Designed and implemented a responsive, user-friendly interface to generate and display randomized affirming sentences.',
    key: 'projects/positive-affirmation-generator',
    projectType: 'sw'
  },
  {
    id: 7,
    title: 'Digital Art & Logo Design',
    img: '',
    role: '',
    description: "A collection of digital art and logos I've worked on",
    key: 'art',
    projectType: 'art'
  }
];
