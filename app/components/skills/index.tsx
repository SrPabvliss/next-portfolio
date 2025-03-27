"use client";

import React, { useState, useEffect } from "react";
import { motion} from "@/app/components/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkillCard from "./skill-card";
import { SKILLS_DATA } from "@/app/constants/skills";
import { AnimatePresence } from "framer-motion";

const Skills = () => {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(SKILLS_DATA.length / ITEMS_PER_PAGE);
  
  // Handle window resize to ensure responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Reset to first page on mobile to prevent layout issues
      if (window.innerWidth < 768 && currentPage !== 0) {
        setCurrentPage(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Create arrays of skills for each page
  const getPageSkills = (pageIndex: number) => {
    const startIndex = pageIndex * ITEMS_PER_PAGE;
    return SKILLS_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Calculate the page variant based on direction
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#1c1c1c] py-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          {/* Header and navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-medium text-lg">/</span>
                <span className="text-white font-medium text-lg">MY SKILLS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">My extensive list of skills</h2>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="p-6 rounded-full bg-[#2d2d2d] hover:bg-blue-500 transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="p-6 rounded-full bg-[#2d2d2d] hover:bg-blue-500 transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 25 },
                }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {getPageSkills(currentPage).map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.1, 
                        delay:  0.05,
                        ease: "easeOut" 
                      }}
                    >
                      <SkillCard
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${
                  currentPage === index ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
                }`}
                initial={false}
                animate={{ 
                  width: currentPage === index ? 32 : 8,
                  backgroundColor: currentPage === index ? "#3b82f6" : "#4b5563"
                }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: currentPage === index ? "#3b82f6" : "#6b7280"
                }}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;