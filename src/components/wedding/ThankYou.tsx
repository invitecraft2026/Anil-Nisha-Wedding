import { motion } from "framer-motion";
import { FloatingPetals } from "./FloatingPetals";
import { Ornament, LotusIcon } from "./Ornament";

export function ThankYou() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-32 px-6">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(200,202,145,0.40), transparent 60%), radial-gradient(ellipse at 50% 20%, rgba(169,173,106,0.25), transparent 60%)",
        }}
      />

      <FloatingPetals count={20} />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mx-auto text-[#7F854E]"
        >
          <LotusIcon className="h-16 w-16" />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(20px)",
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
            duration: 1.4,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mt-8 font-serif text-4xl leading-tight text-[#454637] md:text-6xl"
        >
          We can&apos;t wait to
          <br />

          <span
            className="italic"
            style={{
              background:
                "linear-gradient(120deg, #737847 0%, #A9AD6A 40%, #C8CA91 70%, #737847 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            celebrate with you.
          </span>
        </motion.h2>

        <Ornament className="mx-auto mt-10 h-6 w-56 text-[#A9AD6A]" />

        <p className="mt-8 font-serif text-lg italic text-[#454637]/70">
          — Nisha &amp; Anil
        </p>

        <p className="mt-2 text-[10px] tracking-[0.5em] text-[#454637]/50 uppercase">
          Katamnallur · 13 September
        </p>
      </div>
    </section>
  );
}