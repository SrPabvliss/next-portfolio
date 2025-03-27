import { IconType } from "react-icons";
import { motion } from "@/app/components/motion";

interface SkillCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <motion.div
      className="h-[500px] rounded-3xl bg-[#2d2d2d] border border-white/5 overflow-hidden"
      whileHover={{ 
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="p-8 flex flex-col gap-8 h-full justify-between">
        <motion.div
          className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-12 h-12 text-white" />
        </motion.div>
        
        <div className="flex flex-col gap-4">
          <motion.h3 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="h-[6px] w-12 bg-white"
            whileHover={{ width: 48 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;