"use client";

import { ShieldCheck, Award, BadgeCheck, Scale } from "lucide-react";

export default function Heritage() {
  const awards = [
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015",
      desc: "Quality Management Certified",
    },
    {
      icon: BadgeCheck,
      title: "CE Certified",
      desc: "European Conformity Standards",
    },
    {
      icon: Award,
      title: "ANSI Compliant",
      desc: "American National Standards",
    },
    {
      icon: Scale,
      title: "DIN Standards",
      desc: "German Industrial Norms",
    },
  ];

  return (
    <section id="heritage" className="scroll-mt-20 bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left – Story */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Our Heritage
            </p>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-brand-red" aria-hidden />
            <h2 className="mt-4 text-3xl font-black tracking-tight text-industrial-black sm:text-4xl">
              Six Decades of Industrial Excellence
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Founded in 1958, GINM Tools began as a small workshop specializing in 
                industrial-grade metallurgy. Over six decades, we&apos;ve grown into one 
                of Europe&apos;s most trusted B2B tool suppliers.
              </p>
              <p>
                Every tool in our catalog undergoes rigorous testing under extreme conditions — 
                from thermal stress cycling to impact resistance benchmarks — ensuring our 
                partners receive products built to last on the most demanding job sites.
              </p>
              <p>
                Our commitment isn&apos;t just to quality — it&apos;s to the professionals who 
                rely on our tools every day to build, create, and innovate.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-industrial-black">1958</span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Founded</span>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-industrial-black">50+</span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Countries</span>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-industrial-black">1M+</span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Tools Sold</span>
              </div>
            </div>
          </div>

          {/* Right – Awards Grid */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Certifications & Standards
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  id={`award-card-${i}`}
                  className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-red/20 hover:shadow-lg hover:shadow-red-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 transition-transform duration-300 group-hover:scale-105">
                    <award.icon className="h-6 w-6 text-brand-red" strokeWidth={1.5} />
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-industrial-black">{award.title}</h4>
                  <p className="mt-1 text-xs text-gray-400">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
