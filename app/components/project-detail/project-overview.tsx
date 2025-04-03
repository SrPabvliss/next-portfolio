"use client";

import { motion } from "framer-motion";
import { ClientInfo } from "@/app/types/project-detail.interface";

interface ProjectOverviewProps {
  clientInfo: ClientInfo;
  benefits: string[];
}

export const ProjectOverview = ({ clientInfo, benefits }: ProjectOverviewProps) => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold">Client</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Name</h3>
              <p>{clientInfo.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p>{clientInfo.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Industry</h3>
              <p>{clientInfo.industry}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Challenge</h3>
              <p>{clientInfo.challenge}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold">Implemented Benefits</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}; 