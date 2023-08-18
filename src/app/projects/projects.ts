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
        title: 'Mercedes Santana Fashion Website',
        img: '',
        role: 'Web Developer',
        description: 'Redesigned a website for a fashion designer.',
        key: 'projects/merfash-website'
    
    },
    {
        id: 2,
        title: 'ReCollect',
        img: 'assets/recollect_logo.png',
        role: 'Mobile UI/Front-End Developer',
        description: 'Developed a mobile application for users with memory-related ailments to connect with family.',
        key: 'projects/recollect'
    
    },
    {
        id: 3,
        title: 'Project Shadow',
        img: 'assets/ps_logo.png',
        role: 'Mobile UI Developer Intern',
        description: 'Collaborated to integrate screens and finalize user workflows for an iOS and Android mobile stock trading application.',
        key: 'projects/project-shadow'
    },
    {
        id: 4,
        title: 'Launch Hoboken Design Competition',
        img: 'assets/LHBanner.png',
        role: 'UI Design Finalist',
        description: "Created a website mockup for Launch Hoboken's online Innovation Portal; received second place.",
        key: 'projects/launch-hoboken'
    },
    {
        id: 5,
        title: 'Positive Affirmation Generator',
        img: 'assets/PAGseconddesign.jpg',
        role: 'UI Designer and Developer',
        description: "Designed and implemented a responsive, user-friendly interface to generate and display randomized affirming sentences.",
        key: 'projects/positive-affirmation-generator'
    },
]