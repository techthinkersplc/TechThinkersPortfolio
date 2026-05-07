import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import logo from "@/assets/logo.png";
import {
  motion,
  Variants,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useState, useEffect } from "react";

// --- IMAGE IMPORTS (UNCHANGED) ---
import n1 from "@/assets/n1.png";
import n2 from "@/assets/n2.png";
import n3 from "@/assets/n3.png";
import n4 from "@/assets/n4.png";
import n5 from "@/assets/n5.png";
import t1 from "@/assets/t1.png";
import t2 from "@/assets/t2.png";
import t3 from "@/assets/t3.png";
import t4 from "@/assets/t4.png";
import t5 from "@/assets/t5.png";
import t6 from "@/assets/t6.png";
import t7 from "@/assets/t7.png";
import t8 from "@/assets/t8.png";
import t9 from "@/assets/t9.png";
import t10 from "@/assets/t10.png";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import d4 from "@/assets/d4.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Thinkers — Software, Apps & UX/UI Design" },
      { name: "description", content: "We build secure, modern web and mobile software." },
    ],
  }),
  component: Index,
});

// --- NEW ANIMATED COUNTER COMPONENT ---
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

// Data
const metrics = [
  { k: 25, v: "Production Deployments", s: "+" },
  { k: 98, v: "Client Success Rate", s: "%" },
  { k: 4, v: "Years Technical Mastery", s: "" },
];

const projects = [
  {
    id: "p1",
    title: "Enterprise E-commerce",
    category: "Web Development",
    thumbnail: n1,
    gallery: [n1, n2, n3, n4, n5],
    description:
      "A high-velocity retail ecosystem engineered for global scalability and sub-second load times.",
  },
  {
    id: "p2",
    title: "Tour and Car Rental Platform",
    category: "Web Development",
    thumbnail: t1,
    gallery: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10],
    description:
      "A seamless, high-velocity mobility ecosystem engineered for bespoke travel experiences and precision fleet coordination.",
  },
  {
    id: "p3",
    title: "Pharmacy Stock Management System",
    category: "System Development",
    thumbnail: p1,
    gallery: [p1, p2, p3, p4, p5, p6, p7, p8],
    description:
      "A refined, high-precision stock ecosystem tailored for clinical pharmacy excellence and data integrity.",
  },
  {
    id: "p4",
    title: "Clinical Management system",
    category: "System Development",
    thumbnail: d1,
    gallery: [d1, d2, d3, d4],
    description:
      "Step into the next era of clinical oversight with our advanced management suite for modern dental practices.",
  },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Index() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Software · Apps · Design
            </span>
            <h1 className="text-5xl md:text-7xl leading-[1.05] font-display mb-6">
              <span className="text-gradient-silver">Thinking</span> in code,
              <br />
              Building in <em className="not-italic text-gradient-silver">silver</em>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10">
              Tech Thinkers is a software studio crafting secure web platforms and refined user
              interfaces — built to perform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-medium hover:scale-105 transition-transform shadow-elegant"
              >
                Talk to us
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-border px-8 py-3 font-medium hover:bg-secondary transition"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={logo}
              alt="Logo"
              className="relative w-64 h-64 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-gradient-silver">
              Selected Projects.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-[2rem] overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/20">
                  <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] tracking-widest uppercase text-primary font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED COUNTING METRICS SECTION */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-display text-gradient-silver mb-2">
                  <Counter value={metric.k} />
                  {metric.s}
                </div>
                <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-bold">
                  {metric.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
              <motion.div layoutId={`card-${selectedProject.id}`} className="relative w-full max-w-5xl h-full max-h-[90vh] overflow-y-auto bg-card rounded-[2.5rem] border border-border shadow-2xl no-scrollbar">
                <button onClick={() => setSelectedProject(null)} className="fixed md:absolute top-6 right-6 z-50 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">✕</button>
              <div className="p-8 md:p-12">
                <div className="max-w-2xl mb-12">
                  <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block font-bold">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display text-gradient-silver mb-6">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">{selectedProject.description}</p>
                </div>
                <div className="flex flex-col gap-8">
                  {selectedProject.gallery.map((imgUrl: string, i: number) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-2xl overflow-hidden bg-secondary/10 border border-border">
                        <img src={imgUrl} className="w-full h-auto" alt="screenshot" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
