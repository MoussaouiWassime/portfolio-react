import type {SkillCategory} from '../types';
import { Server, Layout, Code2, Database } from 'lucide-react';

export const skillsData: SkillCategory[] = [
    {
        title: "Backend & Frameworks",
        icon: Server,
        skills: [
            { name: "Symfony", icon: "devicon-symfony-original" },
            { name: "PHP", icon: "devicon-php-plain" },
            { name: "Doctrine", icon: "devicon-doctrine-plain" }
        ]
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "React", icon: "devicon-react-original" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "Tailwind", icon: "devicon-tailwindcss-original" },
            { name: "HTML5", icon: "devicon-html5-plain" },
            { name: "CSS3", icon: "devicon-css3-plain" }
        ]
    },
    {
        title: "Langages & Scripting",
        icon: Code2,
        skills: [
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Java", icon: "devicon-java-plain" }
        ]
    },
    {
        title: "Data & Outils",
        icon: Database,
        skills: [
            { name: "Oracle", icon: "devicon-oracle-original" },
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitLab", icon: "devicon-gitlab-plain" },
            { name: "Github", icon: "devicon-github-plain" }
        ]
    }
];