"use client";

import { DetailedProject } from "@/app/types/project-detail.interface";
import { ProjectHero } from "./project-hero";
import { ProjectOverview } from "./project-overview";
import { ProjectTeam } from "./project-team";
import { ProjectStack } from "./project-stack";
import { ProjectChallenges } from "./project-challenges";
import { ProjectGallery } from "./project-gallery";
import { ProjectLearnings } from "./project-learning";
import { ProjectFeatures } from "./project-features";

interface ProjectDetailProps {
  project: DetailedProject;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="space-y-20">
      <ProjectHero 
        title={project.title}
        shortDescription={project.shortDescription}
        mainImage={project.visualContent.mainImage as string}
      />
      <ProjectOverview
        clientInfo={project.clientInfo}
        benefits={project.implementedBenefits}
      />
      <ProjectFeatures features={project.keyFeatures} />
      <ProjectStack stack={project.technicalStack} />
      <ProjectTeam 
        role={project.projectRole}
        team={project.projectRole.team}
      />
      <ProjectChallenges challenges={project.challenges} />
      <ProjectLearnings learnings={project.learningOutcomes} />
      <ProjectGallery screenshots={project.visualContent.screenshots as string[]} />
    </div>
  );
}; 