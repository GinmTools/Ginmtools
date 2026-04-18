"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// Import testimonials data
import { testimonials } from "../data/testimonials.js";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Testimonials
          </p>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-brand-red" aria-hidden />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-industrial-black sm:text-4xl">
            What Our Partners Say
          </h2>
        </div>

        {/* Slider */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-shadow duration-300 sm:p-12 hover:border-gray-200/80 hover:shadow-md">
            {/* Quote Icon */}
            <Quote
              className="absolute -top-4 left-8 h-8 w-8 rounded-lg bg-brand-red p-1.5 text-white"
              strokeWidth={2}
            />

            {/* Quote Text */}
            <blockquote className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-industrial-black text-sm font-bold text-white">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-bold text-industrial-black">{t.author}</p>
                <p className="text-xs text-gray-500">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
              <span className="text-xs font-medium text-gray-400">
                {current + 1} / {testimonials.length}
              </span>
              <div className="flex gap-2">
                <button
                  id="testimonial-prev"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-brand-red/30 hover:text-brand-red"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  id="testimonial-next"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-brand-red/30 hover:text-brand-red"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
