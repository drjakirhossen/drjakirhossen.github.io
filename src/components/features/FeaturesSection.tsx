import { features } from "@/config/features";
import { ExternalLink } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-12 md:py-24">
      {/* Header Section */}
      <div className="max-w-2xl mb-12 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 tracking-tight text-left">
          Research <span className="text-gradient font-medium">Projects</span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 text-left">
          Selected funded projects in AI, data analytics, IoT, and network intelligence.
        </p>
      </div>

      <div className="space-y-6">
        {features.map((feature) => (
          <div 
            key={feature.title} 
            className="p-6 rounded-lg border border-transparent hover:border-green-500 transition-all duration-300 cursor-pointer flex items-center justify-between"
          >
            <div className="flex-1">
              {/* Project Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-base">{feature.description}</p>
              {feature.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-green-400 border border-green-500/30 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            
            {/* Project Link - Vertically Centered */}
            <div className="ml-6 flex items-center">
              <a 
                href={feature.linkUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors p-2"
                title="View project site"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
