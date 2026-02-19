import Odometer from "../components/Odometer";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import IconCircle from "../components/IconCircle";
import GradientCard from "../components/GradientCard";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Meet Stephen Becker"
        subtitle="Executive Strategy & Consulting with Global Market Experience"
        description="Decades of leadership across industrial, manufacturing, and international markets — transforming businesses from the boardroom to the shop floor."
        alignment="left"
      />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
        {/* BACKGROUND SECTION */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-8">
                <SectionHeader title="Background" alignment="left" />
              </div>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  <a
                    href="https://www.linkedin.com/in/stephenwbecker"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-brand hover:text-brand transition-colors"
                  >
                    Stephen Becker
                  </a>{" "}
                  is an accomplished senior executive with extensive experience
                  leading industrial companies in both the US and international
                  rail markets. He also maintains numerous Board roles in global
                  markets.
                </p>
                <p>
                  Steve particularly excels at formulating strategies and
                  implementation plans that enable North American firms to
                  secure profitable and prominent entry into foreign markets. He
                  has consistently demonstrated this capability in both
                  high-growth and mature markets across diverse geographies.
                </p>
                <p>
                  It's been said that{" "}
                  <em>
                    "Steve is equally at home in the Board room as on the shop
                    floor"
                  </em>{" "}
                  — reflecting his unique ability to bridge executive strategy
                  with operational excellence.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-brand/60 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <img
                  src="/images/steve.jpeg"
                  alt="Stephen Becker"
                  className="relative h-auto w-full rounded-2xl shadow-2xl object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CAREER HIGHLIGHTS */}
        <section className="mb-24 bg-slate-50 rounded-2xl p-12 md:p-16">
          <SectionHeader title="Career Highlights" alignment="left" />

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="shrink-0">
                <IconCircle icon="trending_up" size="md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  International Business Development
                </h3>
                <p className="text-slate-700">
                  In 2003, recruited to run and build the international business
                  for{" "}
                  <a
                    href="https://www.amstelrail.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-brand/60 hover:text-brand"
                  >
                    Amsted Rail
                  </a>
                  . As Managing Director, accountable for all business
                  activities outside North America. Later transitioned to
                  Executive Vice President Transit to develop the Passenger Rail
                  market.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0">
                <IconCircle icon="people" size="md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Organizational Development &amp; Leadership
                </h3>
                <p className="text-slate-700">
                  Widely recognized for identifying and developing
                  high-potential talent. Passionate about mentoring executives
                  and grooming successors. Led teams through major
                  transformational change initiatives resulting in significant
                  operational improvements.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0">
                <IconCircle icon="engineering" size="md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Operational Excellence &amp; Lean Manufacturing
                </h3>
                <p className="text-slate-700">
                  Led major change processes reducing manufacturing costs by 30%
                  at ABC-NACO. Pioneered implementation of Lean Manufacturing
                  and Six Sigma techniques. Known for streamlining complex
                  operations and improving profitability.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0">
                <IconCircle icon="paid" size="md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Profitable Business Growth
                </h3>
                <p className="text-slate-700">
                  Full accountability for profitable growth of $700M+ revenue
                  businesses. Consistently delivered EBITDA margins above 20%.
                  Successfully configured Joint Venture operations across
                  multiple continents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY METRICS */}
        <section className="mb-24">
          <SectionHeader title="By The Numbers" alignment="left" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Revenue Growth */}
            <GradientCard className="text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-light">$</span>
                  <Odometer
                    value={700}
                    className="text-5xl font-bold text-green-600"
                  />
                </div>
                <p className="text-sm text-slate-600 uppercase tracking-wide font-bold">
                  Million in Revenue
                </p>
                <p className="text-sm text-slate-500">Growth Led</p>
              </div>
            </GradientCard>

            {/* EBITDA margins */}
            <GradientCard className="text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Odometer
                    value={20}
                    className="text-5xl font-bold text-brand/90"
                  />
                  <span className="text-5xl font-light text-green-600">%</span>
                </div>
                <p className="text-sm text-slate-600 uppercase tracking-wide font-bold">
                  EBITDA Margins
                </p>
                <p className="text-sm text-slate-500">Consistently Delivered</p>
              </div>
            </GradientCard>

            {/* Manufacturing costs */}
            <GradientCard className="text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Odometer
                    value={30}
                    className="text-5xl font-bold text-orange-600"
                  />
                  <span className="text-5xl font-light text-orange-600">%</span>
                </div>
                <p className="text-sm text-slate-600 uppercase tracking-wide font-bold">
                  Manufacturing Costs
                </p>
                <p className="text-sm text-slate-500">Reduced</p>
              </div>
            </GradientCard>
          </div>
        </section>

        {/* LEADERSHIP & BOARD ROLES */}
        <section className="mb-24">
          <SectionHeader
            title="Leadership &amp; Board Roles"
            alignment="left"
          />

          <div className="mb-8">
            <p className="text-lg text-slate-600 mb-6">
              Active member of{" "}
              <a
                href="https://www.nacdonline.org/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-brand/60 hover:text-brand"
              >
                The National Association of Corporate Directors
              </a>{" "}
              at both the National and Florida Chapter levels.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Current Board Positions
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <BoardRoleCard
                company="ZZABC Castings Co. Ltd."
                role="Vice-Chairman"
                location="China"
                type="corporate"
                logo=""
                link=""
              />
              <BoardRoleCard
                company="Datong CRRC Amsted Castings"
                role="Vice-Chairman"
                location="China"
                type="corporate"
                logo="/logos/ccrc.png"
                link="https://www.crrcgc.cc/abcen/"
              />
              <BoardRoleCard
                company="Amsted Rail Africa"
                role="Board Member"
                location="South Africa"
                type="corporate"
                logo="/logos/amsted.png"
                link="https://www.amstedrail.com/amsted-rail-at-africa-rail-2017/"
              />
              <BoardRoleCard
                company="Amsted Aikon"
                role="Board Member"
                location="India"
                type="corporate"
                logo="/logos/amsted.png"
                link="https://www.amstedrail.com"
              />
              <BoardRoleCard
                company="Steel Founders Society of America"
                role="Board Member"
                location="USA"
                type="nonprofit"
                logo="/logos/sfsa.png"
                link="https://www.sfsa.org/"
              />
              <BoardRoleCard
                company="Oak Brook Civic Association"
                role="Board Member"
                location="USA"
                type="nonprofit"
                logo="/logos/oakbrook.png"
                link="https://oak-brook.org/"
              />
            </div>
          </div>
        </section>

        {/* EDUCATION & PERSONAL */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <SectionHeader title="Education" size="sm" alignment="left" />
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-900">
                  MBA - Corporate Finance
                </p>
                <p className="text-slate-600">
                  DePaul University - Charles H. Kellstadt Graduate School of
                  Business
                </p>
                <p className="text-sm text-slate-500">
                  Concentration in International Business
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  BSIE - Industrial &amp; Systems Engineering
                </p>
                <p className="text-slate-600">
                  Illinois Institute of Technology
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <SectionHeader title="Personal" size="sm" alignment="left" />
            <p className="text-slate-700 leading-relaxed">
              Stephen resides in Coral Gables, Florida with his wife, where they
              enjoy hunting for antiques, fishing, and spending time with their
              dogs. A passionate outdoorsman with deep roots in both the
              American Midwest and Florida communities.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-linear-to-r from-brand/80 to-brand rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Let's discuss how strategic consulting can drive your organization
            forward.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-600 text-brand transition-all hover:bg-slate-100 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}
/** Board Role Card Component */
type BoardRoleCardProps = {
  company: string;
  role: string;
  location: string;
  type: "corporate" | "nonprofit";
  logo: string;
  link?: string;
};

function BoardRoleCard({
  company,
  role,
  location,
  type,
  logo,
  link,
}: BoardRoleCardProps) {
  return (
    <a href={link || "#"} target="_blank" rel="noreferrer">
      <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-brand transition-all">
        <div className="flex items-start gap-3 mb-2">
          {logo ? (
            <img
              src={logo}
              alt={company}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <span className="material-icons">corporate_fare</span>
          )}
          <div>
            <p className="font-bold text-slate-900 text-sm">{company}</p>
            <p className="text-xs text-slate-600 uppercase tracking-wide">
              {role} {type === "corporate" ? "" : " - Nonprofit"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500 ml-9">
          <span className="material-icons text-xs">public</span>
          {location}
        </div>
      </div>
    </a>
  );
}
