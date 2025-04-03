"use client";

import { motion } from "framer-motion";
import { LearningOutcome } from "@/app/types/project-detail.interface";

interface ProjectLearningsProps {
  learnings: LearningOutcome;
}

export const ProjectLearnings = ({ learnings }: ProjectLearningsProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Learnings
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-2xl font-bold">New skills</h3>
          <div className="space-y-8">
            {learnings.newSkills.map((skill, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h4 className="mb-4 text-xl font-semibold">{skill.title}</h4>
                <p className="mb-4 text-gray-600">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-2xl font-bold">Technichal lessons</h3>
          <div className="space-y-8">
            {learnings.technicalLessons.map((lesson, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h4 className="mb-4 text-xl font-semibold">{lesson.title}</h4>
                <p className="mb-4 text-gray-600">{lesson.description}</p>
                <ul className="space-y-2">
                  {lesson.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="mb-6 text-2xl font-bold">Areas of improvement</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {learnings.areasForImprovement.map((area, index) => (
            <div key={index} className="rounded-lg border p-6">
              <h4 className="mb-4 text-xl font-semibold">{area.title}</h4>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 