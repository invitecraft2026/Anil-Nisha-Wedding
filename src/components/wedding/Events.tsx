import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import coupleEvents from "@/assets/image5.jpeg";

const events = [
  {
    tag: "Reception",
    title: "Reception",
    date: "Saturday · 12 September 2026",
    time: "7:00 PM",
    location: "Shri Manjunatha Swamy Kalyana Mantapa, Katamnallur",
  },
  {
    tag: "Wedding Ceremony",
    title: "Marriage",
    date: "Sunday · 13 September 2026",
    time: "Mugurtham · 9:00 AM",
    location: "Shri Manjunatha Swamy Kalyana Mantapa, Katamnallur",
  },
];

export function Events() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Soft couple photo backdrop */}
      {/* Soft couple photo backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={coupleEvents}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.32]"
          style={{
            objectPosition:"60%"
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
          eyebrow="The Celebrations"
          title="Wedding"
          italic="Events"
        />

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 1.1,
                delay: i * 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[2rem] p-10"
              style={{
                background:
                  "linear-gradient(#FDFCF8, #FDFCF8) padding-box, linear-gradient(135deg, #C8CA91, #A9AD6A, #737847, #C8CA91) border-box",
                border: "1px solid transparent",
                backdropFilter: "blur(24px) saturate(140%)",
                WebkitBackdropFilter: "blur(24px) saturate(140%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.6), 0 30px 60px -30px rgba(69,70,55,0.30)",
              }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: "rgba(200,202,145,0.25)",
                }}
              />

              <div
                className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: "rgba(169,173,106,0.25)",
                }}
              />

              <p className="font-display text-[10px] tracking-[0.5em] text-[#7F854E] uppercase">
                {e.tag}
              </p>

              <h3 className="mt-4 font-serif text-5xl text-[#454637]">
                {e.title}
              </h3>

              <div className="mt-8 space-y-4 text-sm text-[#454637]/80">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-[#7F854E]" />

                  <span className="tracking-wide">
                    {e.date}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#7F854E]" />

                  <span className="tracking-wide">
                    {e.time}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#7F854E]" />

                  <span className="tracking-wide">
                    {e.location}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A9AD6A]/40 to-transparent" />

                <span className="font-serif italic text-[#454637]/60">
                  with your blessings
                </span>

                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A9AD6A]/40 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}