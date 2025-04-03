"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
  screenshots: string[];
}

export const ProjectGallery = ({ screenshots }: ProjectGalleryProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            className="group relative aspect-video overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 