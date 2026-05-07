import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tech Thinkers" },
      {
        name: "description",
        content:
          "Let's build something extraordinary together. Reach out to the Tech Thinkers team.",
      },
    ],
  }),
  component: Contact,
});

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
    transition: { staggerChildren: 0.1 },
  },
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // --- TELEGRAM CONFIGURATION UPDATED ---
    // Your Bot Token from @BotFather
    const BOT_TOKEN = "8632138643:AAGk9Qwwqa2nkKpL3ae8XJdKg2pZL_B0B6Q";
    // The new Chat ID for @TechThinkers07
    const CHAT_ID = "8653703609";
    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      // Formatting the message for Telegram
      const messageText = `
<b>🚀 New Inquiry: Tech Thinkers</b>
<b>Name:</b> ${formData.get("name")}
<b>Email:</b> ${formData.get("email")}
<b>Company:</b> ${formData.get("company") || "N/A"}
<b>Subject:</b> ${formData.get("subject")}
<b>Message:</b> ${formData.get("message")}
      `;

      try {
        const response = await fetch(TELEGRAM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: messageText,
            parse_mode: "HTML",
          }),
        });

        if (response.ok) {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        } else {
          throw new Error("Failed to send to Telegram");
        }
      } catch (error) {
        console.error("TELEGRAM ERROR:", error);
        alert("Something went wrong. Please try again or email us directly.");
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="text-xs tracking-[0.4em] uppercase text-accent font-semibold mb-6"
            >
              Get in Touch
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-display text-gradient-silver leading-tight mb-8"
            >
              Let’s build <br /> your vision.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-12"
            >
              Have an idea? Let’s turn it into a high-performance digital reality.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-8 pt-8 border-t border-border/40">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Message Us
                </div>
                <div className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                  techthinkers07@gmail.com
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Current Location
                </div>
                <div className="text-xl font-medium text-foreground">Addis Ababa, Ethiopia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <form
              ref={formRef}
              onSubmit={sendToTelegram}
              className="relative z-10 rounded-[40px] bg-card border border-border p-8 md:p-12 shadow-2xl backdrop-blur-sm"
            >
              <div className="space-y-6">
                {(["Name", "Email", "Company", "Subject"] as const).map((label) => (
                  <div key={label} className="group">
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within:text-accent transition-colors mb-2 ml-1">
                      {label}
                    </label>
                    <input
                      required={label !== "Company"}
                      name={label.toLowerCase()}
                      type={label === "Email" ? "email" : "text"}
                      placeholder={`Enter your ${label.toLowerCase()}...`}
                      className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 ml-1">
                    Project Details
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your goals and timeline..."
                    className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 ml-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+251 9..."
                    className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="w-full rounded-full bg-primary text-primary-foreground py-5 font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl disabled:opacity-50 disabled:scale-100"
                >
                  {loading ? "Sending..." : sent ? "Message Received" : "Send Message"}
                </button>
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-accent text-sm mt-6 font-medium"
                >
                  Thank you. Our team is reviewing your concept.
                </motion.p>
              )}
            </form>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
