import { notFound } from "next/navigation";
import { ProjectDetail } from "@/app/components/project-detail";
import { GAB_MOTORS_PROJECT } from "@/app/constants/project-details/gab-motors";
import { DetailedProject } from "@/app/types/project-detail.interface";

const projectsMap: Record<string, DetailedProject> = {
  "gab-motors": GAB_MOTORS_PROJECT,
};

export async function generateStaticParams() {
  return Object.keys(projectsMap).map((id) => ({
    id,
  }));
}

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsMap[params.id];

  if (!project) notFound();

  return <ProjectDetail project={project} />;
} 