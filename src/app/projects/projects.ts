export class Projects {
    id!: number;
    title = '';
    img = '';
    role = '';
    description = '';
    key = ''
}

export const PROJECTS: Projects[] = [
    {
        id: 1,
        title: 'ReCollect',
        img: 'assets/recollect_logo.png',
        role: 'Mobile UI/Front-End Developer',
        description: 'Developed a mobile application for users with memory-related ailments to connect with family.',
        key: 'recollect'
    
    },
    {
        id: 2,
        title: 'Project Shadow',
        img: 'assets/ps_logo.png',
        role: 'Mobile UI Developer Intern',
        description: 'Collaborated to integrate screens and finalize user workflows for an iOS and Android mobile stock trading application.',
        key: 'project-shadow'
    },
    {
        id: 3,
        title: 'Launch Hoboken Design Competition',
        img: 'assets/LH_LOGO.png',
        role: 'UI Design Finalist',
        description: "Created a website mockup for Launch Hoboken's online Innovation Portal; received second place.",
        key: 'launch-hoboken'
    },
    {
        id: 4,
        title: 'Positive Affirmation Generator',
        img: 'assets/PAGseconddesign.jpg',
        role: 'UI Designer and Developer',
        description: "Designed and implemented a responsive, user-friendly interface to generate and display randomized affirming sentences.",
        key: 'positive-affirmation-generator'
    },
]