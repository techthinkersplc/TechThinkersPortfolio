import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { motion, Variants } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tech Thinkers" },
      {
        name: "description",
        content: "High-performance Web, App, and Design services built with precision.",
      },
    ],
  }),
  component: Services,
});

const items = [
  {
    n: "01",
    title: "Web Development",
    desc: "Scalable, high-performance web platforms designed for speed and built with modern tools.",
    bullets: [
      "Enterprise SaaS",
      "Next-Gen E-Commerce",
      "Intelligent Dashboards",
      "Robust Backends",
    ],
  },
  {
    n: "02",
    title: "App Development",
    desc: "Native-feel applications designed for seamless performance across iOS and Android platforms.",
    bullets: ["Cross-Platform", "Native Build", "App Store Launch"],
  },
  {
    n: "03",
    title: "UX / UI Design",
    desc: "Research-led design systems and interactive prototypes that prioritize user intent and identity.",
    bullets: ["UX Research", "Design Systems", "Prototyping", "Brand Identity"],
  },
  {
    n: "04",
    title: "Safe and Scalable Systems",
    desc: "We build secure, automated foundations so you can ship features faster without ever worrying about downtime.",
    bullets: ["Smart Security", "Safety Testing", "Global Hosting"],
  },
  {
    n: "05",
    title: "Large ERP System",
    desc: "Comprehensive enterprise resource planning solutions designed to unify complex business processes into a single, efficient platform.",
    bullets: ["Inventory Management", "Financial Systems", "HR & Payroll", "Data Analytics"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Services() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div
            variants={fadeUp}
            className="text-xs tracking-[0.4em] uppercase text-accent font-semibold mb-4"
          >
            Our Services
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display text-gradient-silver max-w-4xl leading-tight"
          >
            Complete Digital Mastery
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-8 leading-relaxed"
          >
            From first sketch to production launch, we cover every layer of modern product
            development using modern tools.
          </motion.p>
        </motion.div>
      </section>

      {/* Modern Grid Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {items.map((s) => (
          <motion.article
            key={s.n}
            variants={fadeUp}
            className="group relative rounded-[32px] bg-card border border-border p-10 md:p-14 
                       hover:bg-secondary/5 hover:border-silver/30 hover:-translate-y-1 
                       transition-all duration-500 ease-out shadow-sm hover:shadow-2xl"
          >
            {/* Header with Phase Index */}
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-xs tracking-widest text-accent/60 uppercase">
                {s.n}
              </span>
              <div className="h-px flex-grow bg-border/50 group-hover:bg-accent/20 transition-colors" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 tracking-tight">
              {s.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{s.desc}</p>

            {/* Modern Capability Summary */}
            <div className="pt-8 border-t border-border/40">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors font-medium">
                Focus: {s.bullets.join(" • ")}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/contact"
            preload="intent"
            className="inline-flex rounded-full bg-primary text-primary-foreground px-12 py-4 text-lg font-bold hover:scale-105 transition-transform shadow-xl"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}