import { useEffect, useState } from "react";

export interface CarouselItem {
  number: number;
  title: string;
  msg: string;
  icon: string;
  img: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [selectedPlankIndex, setSelectedPlankIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small delay to trigger mount animations
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop: Expanding card carousel */}

      <div className="hidden md:block w-full max-h-96">
        <div className="relative mx-auto max-w-6xl px-4">
          {/* Cards container - centered with side peek */}
          <div className="flex gap-4 h-full overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 items-center justify-center">
            {items.map((plank, index) => {
              const isSelected = index === selectedPlankIndex;
              return (
                <button
                  key={plank.number}
                  type="button"
                  onClick={() => setSelectedPlankIndex(index)}
                  className={`snap-center transition-all duration-500 ease-out shrink-0 rounded-2xl overflow-hidden cursor-pointer group relative`}
                  style={{
                    // animate width smoothly between collapsed and expanded states
                    width: isSelected ? 672 : 80,
                    maxWidth: isSelected ? 672 : 80,
                    transition:
                      "width 500ms cubic-bezier(.22,.9,.36,1), max-width 500ms cubic-bezier(.22,.9,.36,1), transform 350ms ease",
                    transform: mounted
                      ? isSelected
                        ? "scale(1)"
                        : "scale(.98)"
                      : "scale(.97)",
                  }}
                >
                  <div
                    className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900`}
                  >
                    {/* Background image */}
                    <img
                      src={plank.img}
                      alt={plank.title}
                      className="absolute inset-0 h-full w-full  object-cover transition-transform duration-500"
                      style={{
                        transform: isSelected ? "scale(1.03)" : undefined,
                      }}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Glassmorphism panel - centered within the card when selected */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 ${
                        isSelected
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                      style={{ pointerEvents: isSelected ? "auto" : "none" }}
                    >
                      <div className="backdrop-blur-sm bg-white/18 border border-white/10 rounded-xl p-6 max-w-md text-left shadow-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="material-icons text-2xl text-white/90 mt-1">
                            {plank.icon}
                          </span>
                          <div>
                            <h3 className="text-2xl font-semibold text-white/95 leading-tight">
                              {plank.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-white/85 mb-4 leading-relaxed">
                          {plank.msg}
                        </p>
                      </div>
                    </div>

                    {/* Collapsed state - title on spine */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ${
                        !isSelected
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-8"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="transform -rotate-90 whitespace-nowrap align-middle flex items-center gap-2 px-4 py-2 rounded-lg ">
                          <span className="material-icons text-xl mr-2">
                            {plank.icon}
                          </span>
                          <span className="text-lg font-bold">
                            {plank.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Accent border on selected */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 border-brand transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hint text */}
          {/* <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                <span className="material-icons text-lg">touch_app</span>
                Click a card to explore
              </div> */}
        </div>
      </div>
      {/* Mobile: Card grid */}
      <div className="md:hidden grid grid-cols-1 gap-4 min-w-[90%]">
        {items.map((plank) => (
          <div
            key={plank.number}
            className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            {/* Background image */}
            <img
              src={plank.img}
              alt={plank.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-brand/60 text-lg">
                  {plank.icon}
                </span>
                <h3 className="text-xl font-bold">{plank.title}</h3>
              </div>
              <p className="text-xs text-slate-200 line-clamp-2">{plank.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
