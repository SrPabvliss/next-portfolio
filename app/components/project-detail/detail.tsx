"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "@/app/components/motion";
import { DetailedProject } from "@/app/types/project-detail.interface";
import ProjectOverview from "./project-overview";
import ProjectFeatures from "./project-features";
import ProjectStack from "./project-stack";
import ProjectTeam from "./project-team";
import ProjectChallenges from "./project-challenges";
import ProjectLearnings from "./project-learning";
import ProjectGallery from "./project-gallery";

export default function ProjectDetailComponent({ project }: { project: DetailedProject }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply z-10" />
        {project.visualContent.mainImage && (
          <div className="absolute inset-0">
            <Image 
              src={project.visualContent.mainImage as string} 
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-20" />
        
        <div className="absolute inset-0 flex flex-col justify-end z-30 p-8 container mx-auto">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-white/90 hover:text-white mb-8 w-fit group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-blue-500 mb-4"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 space-y-24">
        <ProjectOverview
          clientInfo={project.clientInfo} 
          benefits={project.implementedBenefits} 
        />
        
        <ProjectFeatures 
          features={project.keyFeatures} 
        />
        
        <ProjectStack 
          stack={project.technicalStack} 
        />
        
        <ProjectTeam
          role={project.projectRole} 
          team={project.projectRole.team} 
        />
        
        <ProjectChallenges
          challenges={project.challenges} 
        />
        
        <ProjectLearnings
          learnings={project.learningOutcomes} 
        />
        
        <ProjectGallery
          screenshots={project.visualContent.screenshots as string[]} 
        />
        
        {/* Back to Projects and Demo Links */}
        <div className="container mx-auto px-4 flex flex-wrap gap-5 justify-center">
          {project.links?.demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              View Live Demo
            </motion.a>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/#projects"
              className="px-8 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium border border-white/10 transition-colors"
            >
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}