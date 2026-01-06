import { Check, Award, BadgeCheck, Medal, Star, Trophy } from "lucide-react";
import { CardSpotlight } from "@/components/cards/CardSpotlight";
import { profile } from "@/data/profile";
import { publications } from "@/data/academic";

const ExperienceCard = ({
  title,
  organization,
  period,
  description,
  highlights,
  isCurrent,
}: {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  isCurrent?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isCurrent ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full pt-6 px-6 pb-2 flex flex-col">
      {isCurrent && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Current
        </span>
      )}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-base font-semibold text-primary">{organization}</span>
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      {highlights?.length ? (
        <ul className="space-y-3 mb-8 flex-grow">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-300">{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  </CardSpotlight>
);

export const HomeHighlightsSection = () => {
  const { experience, education, awards } = profile;
  const publicationColors = [
    "text-emerald-400",
    "text-sky-400",
    "text-amber-400",
    "text-rose-400",
    "text-indigo-400",
    "text-cyan-400",
  ];
  const getAwardBadge = (title: string) => {
    const normalized = title.toLowerCase();

    if (normalized.includes("gold")) {
      return { Icon: Medal, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" };
    }
    if (normalized.includes("silver")) {
      return { Icon: Medal, color: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-500/20" };
    }
    if (normalized.includes("bronze")) {
      return { Icon: Medal, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" };
    }
    if (normalized.includes("best paper") || normalized.includes("best researcher")) {
      return { Icon: Trophy, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    }
    if (normalized.includes("poster")) {
      return { Icon: BadgeCheck, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" };
    }
    if (normalized.includes("nominee")) {
      return { Icon: Star, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" };
    }

    return { Icon: Award, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" };
  };

  return (
    <section className="container px-4 py-12 md:py-24">
      <div id="experience" className="mb-12 md:mb-20">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            <span className="block sm:inline">Professional</span>{" "}
            <span className="text-gradient font-medium">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {experience.map((role) => (
            <ExperienceCard
              key={`${role.title}-${role.organization}`}
              title={role.title}
              organization={role.organization}
              period={role.period}
              description={role.summary}
              highlights={role.highlights}
              isCurrent={role.isCurrent}
            />
          ))}
        </div>
      </div>

      <div id="education" className="mb-12 md:mb-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            <span className="block sm:inline">Academic</span>{" "}
            <span className="text-gradient font-medium">Background</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {education.map((item) => (
            <ExperienceCard
              key={`${item.degree}-${item.institution}`}
              title={item.degree}
              organization={item.institution}
              period={item.period}
              description={item.summary}
              highlights={item.highlights}
            />
          ))}
        </div>
      </div>

      <div id="publications" className="mb-12 md:mb-20">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            <span className="block sm:inline">Research</span>{" "}
            <span className="text-gradient font-medium">Publications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {publications.map((publication, index) => (
            <div
              key={publication.title}
              className="publication-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 hover:bg-black/60 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <span
                  className={`text-xs md:text-sm font-medium ${publicationColors[index % publicationColors.length]}`}
                >
                  {publication.publication}
                </span>
                <span className="text-xs md:text-sm text-gray-400">{publication.year}</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold mb-2">{publication.title}</h4>
              <p className="text-sm md:text-base text-gray-400 mb-2">{publication.authors}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{publication.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="awards">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            <span className="block sm:inline">Honors and</span>{" "}
            <span className="text-gradient font-medium">Awards</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {awards.map((award) => {
            const badge = getAwardBadge(award.title);

            return (
              <div
                key={`${award.title}-${award.year}`}
                className="award-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 hover:bg-black/60 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 ${badge.bg} border ${badge.border} rounded-lg`}>
                      <badge.Icon className={`w-5 h-5 ${badge.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold mb-2">{award.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 mb-2">{award.awarder}</p>
                      {award.summary ? (
                        <p className="text-sm text-gray-500">{award.summary}</p>
                      ) : null}
                      <span className="text-sm text-gray-400 md:hidden">{award.year}</span>
                    </div>
                  </div>
                  <span className="hidden md:inline text-sm text-gray-400 md:text-base">{award.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


