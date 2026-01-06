import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PixelGridBackdrop = () => {
  const [gridData, setGridData] = useState<number[][]>([]);
  const gridSize = 16; // 16x16 grid like in your image

  useEffect(() => {
    // Initialize grid with random values
    const initialGrid = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => Math.random())
    );
    setGridData(initialGrid);

    // Update grid periodically to create animation
    const interval = setInterval(() => {
      setGridData(prevGrid => {
        const newGrid = [...prevGrid];
        // Randomly update some cells
        for (let i = 0; i < 3; i++) {
          const row = Math.floor(Math.random() * gridSize);
          const col = Math.floor(Math.random() * gridSize);
          newGrid[row][col] = Math.random();
        }
        return newGrid;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const getPixelColor = (value: number) => {
    // Create a color mapping similar to your image
    if (value < 0.2) return "bg-gray-900"; // Dark
    if (value < 0.4) return "bg-blue-900/60";
    if (value < 0.6) return "bg-blue-700/70";
    if (value < 0.75) return "bg-blue-500/80";
    if (value < 0.85) return "bg-cyan-400/90";
    if (value < 0.95) return "bg-green-400/80";
    return "bg-white/90"; // Bright
  };

  return (
    <div className="fixed top-1/4 right-[8%] z-[1] pointer-events-none hidden md:block">
      {/* Main Grid Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Grid Border */}
        <div className="absolute -inset-1 border border-blue-400/30 rounded-sm bg-black/20 backdrop-blur-sm"></div>
        
        {/* Pixel Grid */}
        <div className="grid grid-cols-16 gap-[1px] p-3 bg-black/40 rounded-sm"
             style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
          {gridData.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className={`w-4 h-4 ${getPixelColor(value)} transition-colors duration-300`}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (rowIndex + colIndex) * 0.05
                }}
              />
            ))
          )}
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 border-l-2 border-cyan-400/60"
          animate={{
            x: [0, 256, 0] // Sweep across the larger grid (16 * 4px * 4 = 256px)
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Additional Floating Pixels */}
      <div className="absolute -right-8 top-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-blue-400/60"
            style={{
              top: `${i * 12}px`,
              right: `${Math.random() * 20}px`
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 10, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Data Stream Lines */}
      <div className="absolute -left-12 top-1/2 space-y-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/50"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelGridBackdrop;

