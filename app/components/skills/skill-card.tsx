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
      className="h-[500px] rounded-3xl bg-gradient-to-br from-[#2d2d2d] to-[#212121] border border-white/5 overflow-hidden relative group"
      whileHover={{ 
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 20
      }}
    >
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20"
        whileHover={{ scale: 1.1 }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10"
        whileHover={{ scale: 1.1 }}
      />

      <div className="h-full flex flex-col justify-between relative z-10">
        <div className="p-8 pb-0">
          <motion.div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
            whileHover={{ 
              rotate: 5, 
              scale: 1.05,
              boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        
        <div className="px-8 pt-6">
          <motion.h3 
            className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="mt-4 text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        
        <div className="p-8 pt-0">
          <div className="flex items-center">
            <motion.div 
              className="h-[3px] w-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              whileHover={{ width: 80 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className="relative w-full h-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-12 h-12 rounded-full border border-white/30"
              style={{ 
                top: `${i * 5}px`, 
                right: `${i * 5}px`,
                opacity: 1 - i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;