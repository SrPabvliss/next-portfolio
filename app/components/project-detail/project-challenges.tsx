"use client";

import { useState } from "react";
import { motion } from "@/app/components/motion";
import { Challenge } from "@/app/types/project-detail.interface";
import { AlertTriangle, Lightbulb, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}

// Challenge card component with expandable code example
const ChallengeCard = ({ challenge, index }: ChallengeCardProps) => {
  const [codeExpanded, setCodeExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-800/50 rounded-xl border border-white/10 overflow-hidden mb-12"
    >
      {/* Challenge Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/20">
            <AlertTriangle className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
        </div>
        
        <p className="text-white/80 leading-relaxed">
          {challenge.description}
        </p>
      </div>
      
      {/* Solution */}
      <div className="p-6 bg-zinc-900/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-green-500/20">
            <Lightbulb className="w-5 h-5 text-green-400" />
          </div>
          <h4 className="text-lg font-semibold text-white">Solution</h4>
        </div>
        
        <p className="text-white/80 leading-relaxed">
          {challenge.solution}
        </p>
      </div>
      
      {/* Code Example (if present) */}
      {challenge.codeExample && (
        <div className="border-t border-white/5">
          <button
            onClick={() => setCodeExpanded(!codeExpanded)}
            className="flex items-center justify-between w-full p-4 text-white/80 hover:text-white hover:bg-blue-500/10 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Code Implementation</span>
            </div>
            {codeExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          
          {codeExpanded && (
            <div className="p-4 bg-zinc-900">
              <SyntaxHighlighter
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  margin: 0,
                  fontSize: '0.9rem'
                }}
                showLineNumbers
              >
                {challenge.codeExample}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default function ProjectChallengesSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Challenges & Solutions
      </motion.h2>
      
      <div>
        {challenges.map((challenge, index) => (
          <ChallengeCard 
            key={index} 
            challenge={challenge} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}