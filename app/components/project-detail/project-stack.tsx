"use client";

import { motion } from "framer-motion";
import { TechnicalStack } from "@/app/types/project-detail.interface";
import { IconType } from "react-icons";

interface StackSectionProps {
  title: string;
  technologies: {
    name: string;
    description: string;
    icon?: IconType;
  }[];
}

const StackSection = ({ title, technologies }: StackSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="rounded-lg border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-4">
              {/* <tech.icon className="h-8 w-8 text-primary" /> */}
              <h4 className="text-xl font-semibold">{tech.name}</h4>
            </div>
            <p className="text-gray-600">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface ProjectStackProps {
  stack: TechnicalStack;
}

export const ProjectStack = ({ stack }: ProjectStackProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Stack
      </motion.h2>

      <div className="space-y-12">
        <StackSection title="Frontend" technologies={stack.frontend} />
        <StackSection title="Backend" technologies={stack.backend} />
        <StackSection title="DevOps" technologies={stack.devOps} />
      </div>
    </section>
  );
}; 