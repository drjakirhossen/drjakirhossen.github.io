import { BookOpen, Crown, SlidersHorizontal, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

const serviceHighlights = profile.serviceHighlights;

const LeadershipServiceSection = () => {
  const getServiceBadge = (title: string) => {
    const normalized = title.toLowerCase();

    if (normalized.includes("editorial")) {
      return { Icon: BookOpen, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" };
    }
    if (normalized.includes("program")) {
      return { Icon: SlidersHorizontal, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" };
    }
    if (normalized.includes("co-chair")) {
      return { Icon: Users, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    }
    if (normalized.includes("chair")) {
      return { Icon: Crown, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" };
    }

    return { Icon: Sparkles, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" };
  };

  return (
    <section id="service" className="py-12 md:py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            Leadership & Service
          </h2>
          <p className="text-muted-foreground text-base">
            Selected academic leadership and professional service highlights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-4">
          {serviceHighlights.map((highlight) => {
            const badge = getServiceBadge(highlight.title);

            return (
              <Card
                key={highlight.title}
                className="bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-2 ${badge.bg} border ${badge.border} rounded-lg`}>
                    <badge.Icon className={`w-5 h-5 ${badge.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90">{highlight.title}</h4>
                    <p className="text-sm text-white/60">{highlight.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{highlight.summary}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipServiceSection;


