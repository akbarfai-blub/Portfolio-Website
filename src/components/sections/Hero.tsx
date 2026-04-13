"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium text-text-secondary border border-border rounded-full mb-6">
                Frontend Developer
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                Building clean web experiences with React & Next.js
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Data science enthusiast. I care about clean code, good UX, and
                things that actually work.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button href="#projects">View Projects</Button>
                <Button href="mailto:akbarfai2428@gmail.com" variant="outline">
                  Get in touch
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    className="text-border"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-2 rounded-full opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    strokeDasharray="2 6"
                    className="text-text-muted"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-linear-to-br from-bg-btn-primary/10 to-transparent"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-linear-to-tr from-text-secondary/10 to-transparent"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-border"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/image.png"
                  alt="Akbar Fai"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
