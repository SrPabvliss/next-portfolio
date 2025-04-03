"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectRole, TeamMember } from "@/app/types/project-detail.interface";

interface ProjectTeamProps {
  role: ProjectRole;
  team: TeamMember[];
}

export const ProjectTeam = ({ role, team }: ProjectTeamProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Team and Roles
      </motion.h2>

      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-2xl font-bold">{role.title}</h3>
          <p className="mb-8 text-gray-600">{role.teamContext}</p>
          
          <div className="mb-8">
            <h4 className="mb-4 text-xl font-semibold">Responsibilities</h4>
            <ul className="space-y-3">
              {role.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p>{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-semibold">Key Achievements</h4>
            <ul className="space-y-3">
              {role.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-lg border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {member.image && (
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              )}
              <h4 className="mb-2 text-xl font-semibold">{member.name}</h4>
              <p className="mb-4 text-gray-600">{member.role}</p>
              <ul className="space-y-2">
                {member.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-sm">{responsibility}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 