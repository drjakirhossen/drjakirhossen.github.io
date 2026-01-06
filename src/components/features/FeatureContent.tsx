import { motion } from "framer-motion";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-xl p-8 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
          <p className="text-gray-400">
            Explore the technical details and implementation of this project in my portfolio.
          </p>
        </div>
      </div>
    </motion.div>
  );
};