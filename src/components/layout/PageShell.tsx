import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PixelGridBackdrop from "@/components/effects/PixelGridBackdrop";

interface PageShellProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  align?: "left" | "center";
  children: ReactNode;
}

const PageShell = ({ title, subtitle, actions, align = "left", children }: PageShellProps) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-background overflow-hidden hero-backdrop">
        <div className="absolute top-0 right-1/4 md:right-1/3 w-0.5 md:w-1 h-full bg-gradient-to-b from-transparent via-blue-400/60 md:via-blue-400/80 to-transparent transform rotate-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 md:via-white/60 to-transparent blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/30 md:via-cyan-300/40 to-transparent blur-md"></div>
        </div>
        <div className="hidden md:block absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent transform rotate-6 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-sm"></div>
        </div>
        <div className="hidden md:block absolute top-0 right-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent transform -rotate-3 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent blur-sm"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 md:right-1/3 w-16 h-16 md:w-32 md:h-32 transform translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 md:from-blue-400/30 via-cyan-300/15 md:via-cyan-300/20 to-transparent rounded-full blur-xl md:blur-2xl animate-pulse"></div>
          <div
            className="absolute inset-2 md:inset-4 bg-gradient-radial from-white/30 md:from-white/40 via-blue-200/20 md:via-blue-200/30 to-transparent rounded-full blur-lg md:blur-xl animate-pulse"
            style={{ animationDuration: "3s" }}
          ></div>
          <div className="absolute inset-4 md:inset-8 bg-gradient-radial from-cyan-100/40 md:from-cyan-100/60 via-blue-100/30 md:via-blue-100/40 to-transparent rounded-full blur-md md:blur-lg"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 md:from-blue-900/10 via-transparent to-purple-900/3 md:to-purple-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/3 md:via-blue-800/5 to-cyan-900/5 md:to-cyan-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/80 to-black/50 md:to-transparent hero-contrast-overlay"></div>
      </div>

      <Navigation />
      <PixelGridBackdrop />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-24 md:pt-40 pb-8 md:pb-12 z-10"
      >
        <div className="relative z-10 w-full">
          <div
            className={`flex w-full flex-col gap-4 ${
              align === "center" ? "items-center text-center md:justify-center" : "items-start md:justify-between"
            } md:flex-row md:items-start`}
          >
            <div className={`max-w-4xl ${align === "center" ? "mx-auto" : ""}`}>
              <h1 className={`text-2xl sm:text-3xl md:text-5xl font-normal mb-4 tracking-tight leading-tight ${alignment}`}>
                {title}
              </h1>
              {subtitle ? (
                <p className={`text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed ${alignment}`}>
                  {subtitle}
                </p>
              ) : null}
            </div>
            {actions ? (
              <div className={`${align === "center" ? "mt-1" : "md:pt-2"} shrink-0`}>
                {actions}
              </div>
            ) : null}
          </div>
        </div>
      </motion.section>

      {children}

      <div className="bg-black/80 backdrop-blur-sm relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default PageShell;

