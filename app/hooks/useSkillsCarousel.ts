import { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

interface Skill {
  icon: IconType;
  title: string;
  description: string;
}

interface UseSkillsCarouselProps {
  skills: Skill[];
  itemsPerPage: number;
}

interface UseSkillsCarouselReturn {
  currentPage: number;
  direction: number;
  totalPages: number;
  currentPageSkills: Skill[];
  handleNext: () => void;
  handlePrev: () => void;
  handlePageChange: (page: number) => void;
}

export const useSkillsCarousel = ({ skills, itemsPerPage }: UseSkillsCarouselProps): UseSkillsCarouselReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && currentPage !== 0) {
        setCurrentPage(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  const getPageSkills = (pageIndex: number) => {
    const startIndex = pageIndex * itemsPerPage;
    return skills.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handlePageChange = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  return {
    currentPage,
    direction,
    totalPages,
    currentPageSkills: getPageSkills(currentPage),
    handleNext,
    handlePrev,
    handlePageChange,
  };
}; 