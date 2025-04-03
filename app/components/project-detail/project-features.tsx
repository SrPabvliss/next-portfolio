"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Feature } from "@/app/types/project-detail.interface";

interface ProjectFeaturesProps {
  features: Feature[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>

      <div className="space-y-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
              <p className="mb-6 text-gray-600">{feature.description}</p>
              <ul className="space-y-3">
                {feature.bulletPoints?.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 