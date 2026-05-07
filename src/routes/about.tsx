import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { motion, Variants } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tech Thinkers" },
      {
        name: "description",
        content:
          "A premium software studio building secure, modern products with precision engineering.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    t: "Quality",
    d: "We focus on the small details—from lightning-fast speeds to beautiful layouts—to make your product feel truly premium.",
  },
  {
    t: "Reliability",
    d: "We build bulletproof foundations so your data stays safe and your systems stay online, no matter the challenge.",
  },
  {
    t: "Collaboration",
    d: "We work as a natural extension of your team, sharing every decision transparently to build great things together.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div
            variants={fadeUp}
            className="text-xs tracking-[0.4em] uppercase text-accent font-semibold mb-4"
          >
            ABOUT US
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-8 leading-relaxed"
          >
            Tech Thinkers is a dedicated team of engineers who believe that software should be as
            beautiful as it is powerful. We turn complex logic into seamless human experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8"
      >
        {values.map((v) => (
          <motion.div
            key={v.t}
            variants={fadeUp}
            className="group rounded-[32px] bg-card border border-border p-10 hover:border-silver/30 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="h-1 w-12 bg-accent/30 mb-8 group-hover:w-20 transition-all duration-500" />
            <h3 className="font-display text-3xl text-foreground mb-4 tracking-tight">{v.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.d}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-secondary/30 border border-border p-10 md:p-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-silver mb-12">
              Our Journey
            </h2>
            <ol className="grid md:grid-cols-4 gap-12">
              {["Discover", "Design", "Build", "Deploy"].map((step, i) => (
                <li key={step} className="group">
                  <div className="text-accent/60 font-mono text-xs mb-4 tracking-widest">
                    PHASE // 0{i + 1}
                  </div>
                  <div className="h-px w-full bg-border mb-6 group-hover:bg-accent/40 transition-colors" />
                  {/* Changed text-accent/60 to text-foreground for better readability */}
                  <div className="text-foreground text-xl font-medium tracking-tight">{step}</div>
                </li>
              ))}
            </ol>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
        </motion.div>
      </section>
    </Layout>
  );
}
