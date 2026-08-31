import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import venue from "@/assets/venue.jpg";
import coupleSecondary from "@/assets/image1.jpeg";
import { SectionHeading } from "./SectionHeading";

const VENUE_QUERY = encodeURIComponent(
  "Shri Manjunatha Swamy Kalyana Mantapa, Katamnallur",
);

export function Venue() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Soft couple photo backdrop */}
      {/* Soft couple photo backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={coupleSecondary}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.32]"
          style={{
            objectPosition:"36%"
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #F3F0E8 0%, rgba(243,240,232,0.25) 22%, rgba(243,240,232,0.25) 78%, #F3F0E8 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Where We Gather"
          title="The"
          italic="Venue"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(14px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mx-auto mt-16 grid max-w-6xl overflow-hidden rounded-[2rem] md:grid-cols-2"
          style={{
            background:
              "linear-gradient(#FDFCF8, #FDFCF8) padding-box, linear-gradient(135deg, #C8CA91, #A9AD6A, #737847, #C8CA91) border-box",
            border: "1px solid transparent",
            boxShadow:
              "0 30px 60px -30px rgba(69,70,55,0.30)",
          }}
        >
          <div className="relative min-h-[380px] overflow-hidden">
            <img
              src={venue}
              alt="Shri Manjunatha Swamy Kalyana Mantapa"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className="absolute -inset-6 rounded-full blur-2xl"
                  style={{
                    background: "rgba(247,245,239,0.40)",
                  }}
                />

                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
                  style={{
                    color: "#FDFCF8",
                    background:
                      "linear-gradient(135deg, #A9AD6A 0%, #737847 55%, #454637 100%)",
                    boxShadow:
                      "0 10px 25px rgba(69,70,55,0.28)",
                  }}
                >
                  <MapPin className="h-6 w-6" />
                </div>

                <div
                  className="mt-2 h-3 w-3 rotate-45 rounded-sm"
                  style={{
                    background: "#454637",
                  }}
                />
              </div>
            </motion.div>
          </div>

          <div
            className="flex flex-col justify-center gap-6 p-10 md:p-14"
            style={{
              background: "rgba(253,252,248,0.72)",
              backdropFilter: "blur(24px) saturate(140%)",
              WebkitBackdropFilter: "blur(24px) saturate(140%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.65)",
            }}
          >
            <p className="font-display text-[10px] tracking-[0.5em] text-[#7F854E] uppercase">
              Reception & Ceremony
            </p>

            <h3 className="font-serif text-4xl leading-tight text-[#454637] md:text-5xl">
              Shri Manjunatha Swamy{" "}
              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(120deg, #737847 0%, #A9AD6A 45%, #C8CA91 75%, #737847 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Kalyana Mantapa
              </span>
            </h3>

            <p className="text-[#454637]/75 leading-relaxed">
              Katamnallur
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${VENUE_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-[0.35em] uppercase transition-transform hover:scale-[1.02]"
                style={{
                  color: "#FDFCF8",
                  background:
                    "linear-gradient(135deg, #A9AD6A 0%, #737847 60%, #454637 100%)",
                  boxShadow:
                    "0 10px 24px rgba(115,120,71,0.22)",
                }}
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${VENUE_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-[0.35em] uppercase"
                style={{
                  color: "#454637",
                  border: "1px solid rgba(169,173,106,0.55)",
                  background: "rgba(253,252,248,0.35)",
                }}
              >
                <MapPin
                  className="h-4 w-4"
                  style={{
                    color: "#737847",
                  }}
                />
                View on Map
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}