"use client";

import React from "react";
import { motion } from "@/app/components/motion";
import { SKILLS_DATA } from "@/app/constants/skills";
import { useSkillsCarousel } from "@/app/hooks/useSkillsCarousel";
import SkillsHeader from "./skills-header";
import SkillsCarousel from "./skills-carousel";
import SkillsPagination from "./skills-pagination";

const ITEMS_PER_PAGE = 3;

const Skills = () => {
  const {
    currentPage,
    direction,
    totalPages,
    currentPageSkills,
    handleNext,
    handlePrev,
    handlePageChange,
  } = useSkillsCarousel({
    skills: SKILLS_DATA,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#1c1c1c] py-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <SkillsHeader onPrev={handlePrev} onNext={handleNext} />
          
          <SkillsCarousel
            currentPage={currentPage}
            direction={direction}
            skills={currentPageSkills}
          />

          <SkillsPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;