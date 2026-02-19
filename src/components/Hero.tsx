import type { ReactNode } from "react";

type HeroAlignment = "left" | "center";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  alignment?: HeroAlignment;
  image?: {
    src: string;
    alt: string;
    mobileAlt?: string;
    mobileSrc?: string;
  };
  children?: ReactNode;
  badge?: {
    icon?: string;
    text: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  alignment = "center",
  image,
  children,
  badge,
}) => {
  const isLeftAligned = alignment === "left";
  const isImageIncluded = !!image;

  return (
    <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-20 md:py-28">
      {/* Background accent elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/60 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {isImageIncluded && isLeftAligned ? (
          // Left-aligned layout with image
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Desktop image */}
            <div className="hidden md:block md:w-1/2 shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full max-h-80 w-full object-cover rounded-r-2xl"
              />
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-6 max-w-xl">
                {badge && (
                  <div className="inline-flex items-center gap-2 w-fit bg-brand/40 text-white rounded-full px-4 py-2">
                    {badge.icon && (
                      <span className="material-icons text-sm">
                        {badge.icon}
                      </span>
                    )}
                    <span className="text-sm font-600">{badge.text}</span>
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="text-lg text-slate-300">{description}</p>
                )}
                {children}
              </div>
            </div>

            {/* Mobile image */}
            {image.mobileSrc && (
              <div className="relative h-80 w-full overflow-hidden md:hidden rounded-b-2xl">
                <img
                  src={image.mobileSrc}
                  alt={image.mobileAlt || image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
              </div>
            )}
          </div>
        ) : isLeftAligned ? (
          // Left-aligned layout without image
          <div className="max-w-3xl">
            <div className="flex flex-col gap-6">
              {badge && (
                <div className="inline-flex items-center gap-2 w-fit bg-brand/40 text-white rounded-full px-4 py-2">
                  {badge.icon && (
                    <span className="material-icons text-sm">{badge.icon}</span>
                  )}
                  <span className="text-sm font-600">{badge.text}</span>
                </div>
              )}
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                {title}
              </h1>
              {subtitle && <p className="text-xl text-slate-300">{subtitle}</p>}
              {description && (
                <p className="text-lg text-slate-400">{description}</p>
              )}
              {children}
            </div>
          </div>
        ) : (
          // Center-aligned layout (default)
          <div className="max-w-3xl mx-auto text-center">
            {badge && (
              <div className="inline-flex items-center gap-2 w-fit bg-brand/40 text-white rounded-full px-4 py-2 mb-6">
                {badge.icon && (
                  <span className="material-icons text-sm">{badge.icon}</span>
                )}
                <span className="text-sm font-600">{badge.text}</span>
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-slate-300 mb-4">{subtitle}</p>
            )}
            {description && (
              <p className="text-lg text-slate-400 mb-6">{description}</p>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
