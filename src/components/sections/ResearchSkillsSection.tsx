import { motion } from "framer-motion";
import { Brain, Cpu, BarChart, Shield, Globe, Code, Pencil, CircuitBoard } from "lucide-react";

const ResearchSkillsSection = () => {
  // Research focus and technical skills
  const techStack = [
    { name: "AI & Machine Learning", icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, color: "text-green-400" },
    { name: "Data Analytics", icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" />, color: "text-emerald-400" },
    { name: "Anomaly Detection", icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, color: "text-blue-400" },
    { name: "IoT & Robotics", icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />, color: "text-cyan-400" },
    { name: "Robotics Control", icon: <CircuitBoard className="w-5 h-5 md:w-6 md:h-6" />, color: "text-indigo-400" },
    { name: "Python & MATLAB", icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, color: "text-yellow-400" },
    { name: "C/C++/Java/HTML", icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, color: "text-orange-400" },
    { name: "TCP/IP & SNMP", icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, color: "text-purple-400" },
    { name: "Photoshop", icon: <Pencil className="w-5 h-5 md:w-6 md:h-6" />, color: "text-pink-400" },
  ];

  return (
    <div className="w-full bg-background/50 backdrop-blur-sm py-4 md:py-8 mt-6 md:mt-16">
      <div className="container px-4">
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-400 mb-1">Research Focus & Skills</h3>
          <p className="text-xs md:text-sm text-gray-500">Core technical strengths and research directions</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`${tech.color} transition-colors duration-200 flex items-center justify-center`}>
                {tech.icon}
              </div>
              <span className="text-sm md:text-base text-gray-300 font-medium leading-tight">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchSkillsSection;
