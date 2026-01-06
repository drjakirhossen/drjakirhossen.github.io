import PageShell from "@/components/layout/PageShell";
import { recognitionService, memberships } from "@/data/academic";

const Others = () => {
  return (
    <PageShell
      title="Others"
      subtitle="Recognition, professional service, and memberships."
    >
      <section className="container px-4 pb-16 md:pb-24 relative z-10 space-y-12">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Recognition and Service</h2>
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc pl-5">
              {recognitionService.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Professional Memberships</h2>
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc pl-5">
              {memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Others;

