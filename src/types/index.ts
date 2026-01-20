import type {LucideIcon} from "lucide-react";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    image: string;
}

export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
    icon: LucideIcon;
}