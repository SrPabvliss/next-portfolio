import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Technology {
  name: string;
  description: string;
  icon?: IconType;
}

export interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  image?: StaticImageData | string;
}

export interface Feature {
  title: string;
  description: string;
  bulletPoints: string[];
  image: StaticImageData | string;
  imageAlt: string;
}

export interface TechnicalStack {
  frontend: Technology[];
  backend: Technology[];
  devOps: Technology[];
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
  codeExample?: string;
}

export interface ProjectRole {
  title: string;
  responsibilities: string[];
  teamContext: string;
  keyAchievements: string[];
  team: TeamMember[];
}

export interface LearningOutcome {
  newSkills: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  technicalLessons: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  areasForImprovement: {
    title: string;
    description: string;
  }[];
}

export interface ClientInfo {
  name: string;
  location: string;
  industry: string;
  challenge: string;
}

export interface CompanyInfo {
  name: string;
  icon?: IconType;
  logo: StaticImageData | string;
}

export interface AdditionalLinks {
  github?: string;
  demo?: string;
  case_study?: string;
}

export interface VisualContent {
  mainImage: StaticImageData | string;
  screenshots: (StaticImageData | string)[];
}

export interface DetailedProject {
  id: string;
  title: string;
  shortDescription: string;
  clientInfo: ClientInfo;
  implementedBenefits: string[];
  keyFeatures: Feature[];
  technicalStack: TechnicalStack;
  projectRole: ProjectRole;
  challenges: Challenge[];
  learningOutcomes: LearningOutcome;
  visualContent: VisualContent;
  company: CompanyInfo;
  links?: AdditionalLinks;
} 