"use client";

import { motion } from "framer-motion";
import { Challenge } from "@/app/types/project-detail.interface";
import { CodeBlock } from "@/app/components/ui/code-block";

interface ProjectChallengesProps {
  challenges: Challenge[];
}

export const ProjectChallenges = ({ challenges }: ProjectChallengesProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Challenges and Solutions
      </motion.h2>

      <div className="space-y-12">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="rounded-lg border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-bold">{challenge.title}</h3>
            <p className="mb-6 text-gray-600">{challenge.description}</p>
            
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold">Solution</h4>
              <p className="text-gray-600">{challenge.solution}</p>
            </div>

            {challenge.codeExample && (
              <div>
                <h4 className="mb-2 text-xl font-semibold">Code Example</h4>
                <CodeBlock code={challenge.codeExample} language="typescript" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 