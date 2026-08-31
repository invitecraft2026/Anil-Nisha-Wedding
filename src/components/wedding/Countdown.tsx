import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import coupleCountdown from "@/assets/image3.jpeg";

const TARGET = new Date("2026-09-13T09:00:00+05:30").getTime();

function diff(now: number) {
  const d = Math.max(0, TARGET - now);

  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(() => diff(TARGET));

  useEffect(() => {
    setT(diff(Date.now()));

    const id = setInterval(() => {
      setT(diff(Date.now()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const items = [
    {
      label: "Days",
      v: t.days,
      valueColor: "#2F3127",
      labelColor: "#5F653C",
    },
    {
      label: "Hours",
      v: t.hours,
      valueColor: "#2F3127",
      labelColor: "#5F653C",
    },
    {
      label: "Minutes",
      v: t.minutes,
      valueColor: "#454637",
      labelColor: "#7F854E",
    },
    {
      label: "Seconds",
      v: t.seconds,
      valueColor: "#454637",
      labelColor: "#7F854E",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 md:py-48 px-6 bg-[#F3F0E8]">
      {/* Forehead kiss photo backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={coupleCountdown}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.32]"
          style={{
            objectPosition: "center center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #F3F0E8 0%, rgba(243,240,232,0.20) 22%, rgba(243,240,232,0.20) 78%, #F3F0E8 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="The Sacred Day Awaits"
          title="Counting the Moments"
        />

        {/* Luxury Open Architectural Grid Layout */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative">
          {/* Subtle horizontal luxury anchor line for large viewports */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#A9AD6A]/20 to-transparent hidden lg:block -translate-y-6" />

          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative flex flex-col items-center justify-center text-center px-4"
            >
              {/* Floating Dynamic Arc Behind Numbers */}
              <div className="absolute -top-6 w-32 h-32 rounded-full border border-dashed border-[#A9AD6A]/20 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-110 pointer-events-none transition-all duration-700 ease-out hidden md:block" />

              {/* Decorative Top Luxury Diamond Accent */}
              <div className="mb-4 text-[7px] tracking-widest text-[#7F854E]/60 transition-transform duration-500 group-hover:scale-125">
                ✦
              </div>

              {/* Countdown Numbers */}
              <div className="relative h-16 sm:h-20 md:h-24 flex items-center justify-center select-none overflow-hidden w-full">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={it.v}
                    initial={{
                      y: 35,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -35,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter"
                    style={{
                      color: it.valueColor,
                      textShadow:
                        i < 2
                          ? "0 2px 10px rgba(255,255,255,0.55)"
                          : "none",
                    }}
                  >
                    {String(it.v).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Micro-Geometric Accent Line */}
              <div className="h-px w-6 my-4 bg-gradient-to-r from-transparent via-[#A9AD6A] to-transparent transition-all duration-500 group-hover:w-16" />

              {/* Labels */}
              <div
                className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] uppercase transition-colors duration-300 pl-[0.4em]"
                style={{
                  color: it.labelColor,
                }}
              >
                {it.label}
              </div>

              {/* Vertical Border Dividers */}
              {i < 3 && (
                <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#A9AD6A]/20 to-transparent hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Grand Final Ornament Base */}
        <div className="mt-20 md:mt-28 flex justify-center items-center gap-4 opacity-40">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#A9AD6A]" />

          <span className="text-xs text-[#7F854E]">
            ⚜
          </span>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#A9AD6A]" />
        </div>
      </div>
    </section>
  );
}