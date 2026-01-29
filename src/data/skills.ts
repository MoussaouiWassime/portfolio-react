import type {SkillCategory} from '../types';
import { Globe, Code2, Database, Palette } from 'lucide-react';

export const skillsData: SkillCategory[] = [
    {
        title: "Développement Web",
        icon: Globe,
        skills: [
            { name: "Symfony", icon: "devicon-symfony-original" },
            { name: "React", icon: "devicon-react-original" },
            { name: "PHP", icon: "devicon-php-plain" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "Tailwind", icon: "devicon-tailwindcss-original" },
            { name: "Doctrine", icon: "devicon-doctrine-plain" }
        ]
    },
    {
        title: "Logiciel & Scripting",
        icon: Code2,
        skills: [
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "Java", icon: "devicon-java-plain" },
            { name: "Python", icon: "devicon-python-plain" }
        ]
    },
    {
        title: "Data & DevOps",
        icon: Database,
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "Oracle", icon: "devicon-oracle-original" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitLab", icon: "devicon-gitlab-plain" },
            { name: "Docker", icon: "devicon-docker-plain" }
        ]
    },
    {
        title: "Design & Environnement",
        icon: Palette,
        skills: [
            { name: "Figma", icon: "devicon-figma-plain" },
            { name: "Canva", icon: "devicon-canva-original" },
            { name: "JetBrains", icon: "devicon-jetbrains-plain" },
            { name: "VS Code", icon: "devicon-vscode-plain" },
            { name: "VS Code", icon: "devicon-vscode-plain" }
        ]
    }
];