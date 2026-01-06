import PageShell from "@/components/layout/PageShell";
import { profile } from "@/data/profile";
import { CardSpotlight } from "@/components/cards/CardSpotlight";
import { Check } from "lucide-react";

const Experience = () => {
  return (
    <PageShell
      title="Experience"
      subtitle="Professional appointments and leadership roles"
      align="center"
    >
      <section className="container px-4 pb-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {profile.experience.map((role) => (
            <CardSpotlight
              key={`${role.title}-${role.organization}`}
              className={`border-2 ${role.isCurrent ? "border-primary" : "border-white/10"}`}
            >
              <div className="relative h-full p-6">
                {role.isCurrent ? (
                  <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4 inline-block">
                    Current
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-sm text-primary mb-2">{role.organization}</p>
                <p className="text-xs text-gray-400 mb-4">{role.period}</p>
                <p className="text-sm text-gray-300 mb-4">{role.summary}</p>
                {role.highlights?.length ? (
                  <ul className="space-y-2 text-sm text-gray-400">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CardSpotlight>
          ))}
        </div>
      </section>
      <section className="container px-4 pb-16 md:pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Languages</h2>
            <p className="text-sm text-gray-400">Communication proficiency levels</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.languages.map((language, index) => {
              const value = Number.parseFloat(language.level);
              const size = 110;
              const stroke = 10;
              const radius = (size - stroke) / 2;
              const circumference = 2 * Math.PI * radius;
              const progress = (value / 100) * circumference;
              const colors = ["stroke-emerald-400", "stroke-sky-400", "stroke-amber-400"];
              const trackColors = ["stroke-emerald-400/20", "stroke-sky-400/20", "stroke-amber-400/20"];

              return (
                <div
                  key={language.name}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
                >
                  <div className="mx-auto mb-4 h-[110px] w-[110px]">
                    <svg
                      width={size}
                      height={size}
                      viewBox={`0 0 ${size} ${size}`}
                      className="block"
                    >
                      <circle
                        className={`fill-transparent ${trackColors[index % trackColors.length]}`}
                        strokeWidth={stroke}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                      />
                      <circle
                        className={`fill-transparent ${colors[index % colors.length]}`}
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={`${progress} ${circumference}`}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                      />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-current text-foreground text-sm font-semibold"
                      >
                        {language.level}
                      </text>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-foreground">{language.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Experience;

