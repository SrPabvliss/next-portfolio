"use client";

import { DetailedProject } from "@/app/types/project-detail.interface";
import ProjectDetailComponent from "./detail";

interface ProjectDetailProps {
  project: DetailedProject;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <ProjectDetailComponent project={project} />
  );
};