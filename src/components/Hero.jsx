"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Shield, Zap, Award } from "lucide-react";

// Import hero slide images
import heroSlide1 from "../images/hero-slides/pexels-benjaminlehman-11398216.webp";
import heroSlide2 from "../images/hero-slides/pexels-christina99999-30413428.webp";
import heroSlide3 from "../images/hero-slides/pexels-collab-media-173741945-15060421.webp";
import heroSlide4 from "../images/hero-slides/pexels-cottonbro-7484788.webp";
import heroSlide5 from "../images/hero-slides/pexels-ismaelcampos-16720099.webp";
import heroSlide6 from "../images/hero-slides/pexels-karola-g-7285926.webp";
import ginbIcon from "../images/ginb-icon.png";

const heroSlides = [
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5,
  heroSlide6,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 800);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  const stats = [
    { icon: Shield, value: "65+", label: "Years of Trust" },
    { icon: Zap, value: "1000+", label: "Products" },
    { icon: Award, value: "ISO", label: "Certified" },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-industrial-deep">
      {/* Slideshow Background */}
      {heroSlides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
          style={{ opacity: i === current && !isTransitioning ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`GINM Tools hero slide ${i + 1}`}
            fill
            priority={i === 0}
            className="animate-ken-burns object-cover"
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-8">
        {/* Large Centered Logo: Icon + Styled Text — tight pair (PNG often has right-side transparent padding; -mr pulls type in) */}
        <div className="animate-fade-in-up mb-6 flex w-full max-w-[100vw] flex-col items-center gap-0 px-1 sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:px-0">
          {/* House Icon */}
          <div className="shrink-0 leading-none -mr-10 sm:-mr-[4.5rem] md:-mr-24 lg:-mr-28">
            <Image
              src={ginbIcon}
              alt="GINM Tools Icon"
              width={293}
              height={176}
              className="block h-28 w-auto max-w-none object-left object-contain drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)] sm:h-36 md:h-44"
              priority
              placeholder="blur"
            />
          </div>
          {/* Styled Text: GINM in white, TOOLS in red */}
          <div className="-mt-2 flex min-w-0 flex-col items-center sm:-mt-0 sm:-ml-3 sm:items-start md:-ml-4 lg:-ml-5">
            <h2 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">GINM</span>
              <span className="text-brand-red drop-shadow-[0_2px_10px_rgba(220,38,38,0.4)]">TOOLS</span>
            </h2>
            <div className="mt-2 h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-white/60 sm:text-base md:text-lg">
              Since 1958
            </p>
          </div>
        </div>

        {/* Tagline */}
        <h1
          className="animate-fade-in-up mt-4 text-2xl font-bold leading-tight tracking-tight text-white/80 sm:text-3xl md:text-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          Trusted Tools{" "}
          <span className="text-brand-red">for Professionals</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          Industrial-grade hand tools, power tools, and precision instruments —
          engineered for performance, trusted by enterprises worldwide.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up mt-10 flex justify-center"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#catalogs"
            id="hero-cta-catalogs"
            className="rounded-lg bg-brand-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-red-dark hover:shadow-xl hover:shadow-red-600/30"
          >
            Browse Catalogs
          </a>
        </div>

        {/* Slide Indicators */}
        <div
          className="animate-fade-in-up mt-10 flex gap-2"
          style={{ animationDelay: "0.55s" }}
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrent(i);
                  setIsTransitioning(false);
                }, 400);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-brand-red"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto max-w-5xl px-6 pb-8 lg:px-8">
          <div
            id="stats-bar"
            className="animate-slide-up grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            style={{ animationDelay: "0.6s" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 px-4 py-5 sm:flex-row sm:gap-3 sm:px-8 sm:py-6"
              >
                <stat.icon className="h-5 w-5 text-brand-red sm:h-6 sm:w-6" strokeWidth={2} />
                <div className="text-center sm:text-left">
                  <p className="text-lg font-black text-white sm:text-2xl">{stat.value}</p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/50 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
