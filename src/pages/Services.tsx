import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const services = [
    {
      icon: "trending_up",
      title: "Strategic Planning",
      description:
        "Develop comprehensive strategies to strengthen competitive position and drive sustainable growth in dynamic markets.",
    },
    {
      icon: "business_center",
      title: "Executive Guidance",
      description:
        "Partner with leadership teams to navigate complex decisions and implement transformational change initiatives.",
    },
    {
      icon: "people",
      title: "Organizational Development",
      description:
        "Build high-performing teams, identify talent, and mentor the next generation of executive leaders.",
    },
    {
      icon: "public",
      title: "International Expansion",
      description:
        "Navigate cultural differences and market entry strategies across global markets with proven expertise.",
    },
    {
      icon: "assessment",
      title: "Operational Excellence",
      description:
        "Implement lean methodologies and data-driven improvements to enhance productivity and profitability.",
    },
    {
      icon: "handshake",
      title: "Joint Venture Development",
      description:
        "Successfully structure and manage international partnerships and joint venture operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Our Services"
        description="Comprehensive consulting solutions tailored to drive growth, enhance operations, and build organizational strength"
        alignment="center"
      />

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16">
            <SectionHeader title="Service Offerings" alignment="center" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:border-brand/40 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand/30 text-brand group-hover:bg-brand group-hover:text-white transition-all mb-4">
                  <span className="material-icons text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-linear-to-br from-slate-50 to-slate-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16">
            <SectionHeader
              title="How We Work"
              description="A collaborative approach tailored to your business needs"
              alignment="center"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discover",
                desc: "Understand your business, challenges, and objectives",
              },
              {
                step: "2",
                title: "Strategize",
                desc: "Develop comprehensive plans and implementation roadmaps",
              },
              {
                step: "3",
                title: "Execute",
                desc: "Partner with your team to drive real results",
              },
              {
                step: "4",
                title: "Optimize",
                desc: "Measure impact and continuously improve outcomes",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 text-center">
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-linear-to-r from-brand to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-linear-to-r from-brand/80 to-brand">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand/30 mb-8">
            Let's discuss how our expertise can accelerate your success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-600 text-brand/90 transition-all hover:bg-slate-100 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
