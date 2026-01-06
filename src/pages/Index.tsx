import { motion } from "framer-motion";
import { ArrowRight, Brain, ChevronUp, Facebook, GraduationCap, Linkedin, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import { HomeHighlightsSection } from "@/components/sections/HomeHighlightsSection";
import ResearchSkillsSection from "@/components/sections/ResearchSkillsSection";
import LeadershipServiceSection from "@/components/sections/LeadershipServiceSection";
import Footer from "@/components/layout/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PixelGridBackdrop from "@/components/effects/PixelGridBackdrop";
import { useState, useEffect } from "react";
import { profile } from "@/data/profile";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const assetBase = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxHeight, 1);
      
      setShowBackToTop(scrolled > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash);
    if (target) {
      setTimeout(() => {
        const yOffset = -100;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: profile.social.linkedin,
      Icon: Linkedin,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    {
      label: "Google Scholar",
      href: profile.social.scholar,
      Icon: GraduationCap,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      label: "ORCID",
      href: profile.social.orcid,
      Icon: LinkIcon,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      label: "Facebook",
      href: profile.social.facebook,
      Icon: Facebook,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
  ];
  const interestAccents = [
    { text: "text-emerald-300", border: "border-emerald-500/30", bg: "bg-emerald-500/5" },
    { text: "text-sky-300", border: "border-sky-500/30", bg: "bg-sky-500/5" },
    { text: "text-amber-300", border: "border-amber-500/30", bg: "bg-amber-500/5" },
    { text: "text-rose-300", border: "border-rose-500/30", bg: "bg-rose-500/5" },
    { text: "text-indigo-300", border: "border-indigo-500/30", bg: "bg-indigo-500/5" },
    { text: "text-cyan-300", border: "border-cyan-500/30", bg: "bg-cyan-500/5" },
    { text: "text-violet-300", border: "border-violet-500/30", bg: "bg-violet-500/5" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ethereal Light Beam Background */}
      <div className="fixed inset-0 z-0 bg-background overflow-hidden hero-backdrop">
        {/* Main vertical light beam - responsive positioning */}
        <div className="absolute top-0 right-1/4 md:right-1/3 w-0.5 md:w-1 h-full bg-gradient-to-b from-transparent via-blue-400/60 md:via-blue-400/80 to-transparent transform rotate-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 md:via-white/60 to-transparent blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/30 md:via-cyan-300/40 to-transparent blur-md"></div>
        </div>
        
        {/* Secondary light beams - hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent transform rotate-6 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-sm"></div>
        </div>
        
        <div className="hidden md:block absolute top-0 right-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent transform -rotate-3 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent blur-sm"></div>
        </div>
        
        {/* Glowing orb/energy source - smaller on mobile */}
        <div className="absolute top-1/4 right-1/4 md:right-1/3 w-16 h-16 md:w-32 md:h-32 transform translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 md:from-blue-400/30 via-cyan-300/15 md:via-cyan-300/20 to-transparent rounded-full blur-xl md:blur-2xl animate-pulse"></div>
          <div className="absolute inset-2 md:inset-4 bg-gradient-radial from-white/30 md:from-white/40 via-blue-200/20 md:via-blue-200/30 to-transparent rounded-full blur-lg md:blur-xl animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute inset-4 md:inset-8 bg-gradient-radial from-cyan-100/40 md:from-cyan-100/60 via-blue-100/30 md:via-blue-100/40 to-transparent rounded-full blur-md md:blur-lg"></div>
        </div>
        
        {/* Atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 md:from-blue-900/10 via-transparent to-purple-900/3 md:to-purple-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/3 md:via-blue-800/5 to-cyan-900/5 md:to-cyan-900/10"></div>
        
        {/* Subtle particle field - fewer particles on mobile */}
        <div className="absolute inset-0">
          {Array.from({length: 15}).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-200/30 md:bg-blue-200/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
          {/* Additional particles for desktop */}
          <div className="hidden md:block">
            {Array.from({length: 15}).map((_, i) => (
              <div
                key={i + 15}
                className="absolute w-0.5 h-0.5 bg-blue-200/40 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Dark gradient overlay for content readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/80 to-black/50 md:to-transparent hero-contrast-overlay"></div>
      </div>

      <Navigation />
      
      {/* Animated Pixel Grid */}
      <PixelGridBackdrop />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-24 md:pt-40 pb-8 md:pb-20 z-10"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4 mt-4 md:mt-8">
              <Brain className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
              <span className="text-xs md:text-sm font-medium text-green-400">Associate Professor</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-normal mb-4 tracking-tight text-left leading-tight">
              <span className="text-white font-medium">
                <TextGenerateEffect words={profile.name} />
              </span>
            </h1>

            <p className="text-sm md:text-base text-cyan-400 mb-4">
              {profile.role} | {profile.organization}
            </p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8 text-left leading-relaxed"
            >
              {profile.summary} <span className="text-white">Open to research collaboration and academic partnerships.</span>
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-8">
              {profile.stats.slice(0, 6).map((stat) => (
                <div key={stat.label} className="glass rounded-lg p-3">
                  <p className="text-lg md:text-xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {profile.interests.map((interest, index) => {
                const accent = interestAccents[index % interestAccents.length];

                return (
                <span
                  key={interest}
                  className={`text-xs md:text-sm ${accent.text} border ${accent.border} ${accent.bg} px-3 py-1 rounded-full`}
                >
                  {interest}
                </span>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-row gap-2 md:gap-4 items-center"
            >
            <Button size="lg" className="button-gradient flex-1 sm:flex-none" asChild>
              <a href={`${assetBase}publications`}>View Research</a>
            </Button>
              <Button size="lg" variant="link" className="text-white flex-1 sm:flex-none justify-center" asChild>
              <a href={`${assetBase}jakir-hossen-cv.pdf`} target="_blank" rel="noopener noreferrer">
                Download CV <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            </motion.div>
          </div>

          <div className="relative z-10 w-full max-w-md lg:justify-self-end">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-lg">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={`${assetBase}jakir.jpg`}
                  alt={profile.name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Social</p>
                <div className="grid grid-cols-2 gap-3">
                  {profile.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-start gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs md:text-sm text-white/80 hover:border-white/30 transition-colors"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-md shrink-0">
                        <Mail className="w-4 h-4 text-emerald-300" />
                      </span>
                      <span className="break-all leading-tight">{email}</span>
                    </a>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 rounded-lg border ${link.border} ${link.bg} px-3 py-2 text-xs md:text-sm text-white/80 hover:border-white/30 transition-colors`}
                    >
                      <link.Icon className={`w-4 h-4 ${link.color}`} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <div className="relative z-10">
        <ResearchSkillsSection />
      </div>

      {/* Experience & Education Section */}
      <div className="bg-black/80 backdrop-blur-sm relative z-10">
        <HomeHighlightsSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black/80 backdrop-blur-sm relative z-10">
        <LeadershipServiceSection />
      </div>

      {/* CTA Section */}
      <section id="cta" className="container px-4 py-12 md:py-20 relative z-10 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in AI, data analytics, or robotics research collaboration? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            {profile.emails.map((email) => (
              <div key={email} className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                {email}
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-sky-400" />
              {profile.location}
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="button-gradient" asChild>
              <a href={`mailto:${profile.emails[0]}`}>
                Send Email
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black/80 backdrop-blur-sm relative z-10">
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative w-12 h-12">
            {/* Progress Circle */}
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              {/* Background circle */}
              <path
                className="text-gray-600"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress circle */}
              <path
                className="text-green-500"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={`${scrollProgress * 100}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            {/* Button */}
            <motion.button
              onClick={scrollToTop}
              className="absolute inset-0 w-12 h-12 bg-transparent hover:bg-green-500/10 text-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;

