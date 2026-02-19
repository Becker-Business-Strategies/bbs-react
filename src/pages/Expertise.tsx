import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

type ExpertiseItem = {
  name: string;
  link: string;
  summary?: string;
  icon?: string;
};

type ExpertiseProps = {
  expertiseItems?: ExpertiseItem[];
};

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    name: "Strategic Planning",
    link: "/expertise/strategic-planning",
    summary:
      "Defining clear priorities, objectives, and execution plans that align leaders and teams.",
    icon: "trending_up",
  },
  {
    name: "Organizational Design",
    link: "/expertise/organizational-design",
    summary:
      "Structuring teams, roles, and decision rights so work actually flows instead of bottlenecking.",
    icon: "account_tree",
  },
  {
    name: "Change Management",
    link: "/expertise/change-management",
    summary:
      "Guiding organizations through transformation with practical communication and adoption plans.",
    icon: "autorenew",
  },
  {
    name: "Operational Excellence",
    link: "/expertise/operational-excellence",
    summary:
      "Streamlining processes, workflows, and metrics to reduce friction and improve performance.",
    icon: "speed",
  },
];

export default function Expertise({ expertiseItems }: ExpertiseProps) {
  const items =
    expertiseItems && expertiseItems.length > 0
      ? expertiseItems
      : defaultExpertiseItems;

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Expertise"
        description={
          <>
            <p className="text-lg text-slate-400 mt-4">
              Becker Business Strategies brings depth in strategy, operations,
              and organizational change — with a focus on practical execution,
              not consultancy theater.
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Explore our core areas of expertise below. Each engagement is
              tailored to your context, scale, and leadership team.
            </p>
          </>
        }
        alignment="left"
      />

      {/* Expertise grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16">
            <SectionHeader
              title="Core Areas of Expertise"
              description="These domains represent the core of where we drive impact — from high-level strategy to the practical execution that transforms organizations."
              alignment="left"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item) => (
              <article
                key={item.link}
                className="group rounded-xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:border-brand transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl  text-brand mb-2">
                      <div className="material-icons text-brand text-2xl mr-2">
                        {item.icon || "arrow_right_alt"}
                      </div>
                      {item.name}
                    </h3>
                  </div>
                </div>
                {item.summary && (
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="rounded-2xl bg-white p-10 md:p-16 shadow-lg border border-slate-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mb-8">
              Many leaders come to us with overlapping challenges — growth,
              alignment, capacity, and change. We can help you clarify the real
              problem and shape an approach across strategy, structure, and
              operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3 text-base font-600 text-white transition-all hover:bg-brand shadow-lg hover:shadow-xl"
            >
              Schedule a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
