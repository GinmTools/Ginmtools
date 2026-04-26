"use client";

import { useState } from "react";
import { Search, Download, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
// Import catalogs data
import { catalogs } from "../data/catalogs.js";

/**
 * Helper to get Google Drive thumbnail URL from download URL
 */
const getGDThumbnail = (url) => {
  const match = url.match(/[?&]id=([^&]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w600`;
  }
  return null;
};

export default function CatalogGrid() {
  const [search, setSearch] = useState("");
  const [imageErrors, setImageErrors] = useState(new Set());

  const filtered = catalogs.filter(
    (cat) =>
      cat.title.toLowerCase().includes(search.toLowerCase()) ||
      cat.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageError = (catalogId) => {
    setImageErrors(prev => new Set([...prev, catalogId]));
  };

  return (
    <section
      id="catalogs"
      className="scroll-mt-20 bg-gradient-to-b from-gray-50 via-white to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Product Library
          </p>
          <div
            className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-brand-red"
            aria-hidden
          />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-industrial-black sm:text-4xl">
            Download Our Catalogs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Browse our complete product range. Access detailed specifications and edition information for each catalog.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="catalog-search"
              type="text"
              placeholder="Search catalogs by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-300 focus:border-brand-red/40 focus:bg-white focus:ring-2 focus:ring-brand-red/10"
            />
          </div>
        </div>

        {/* Catalog Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((catalog) => {
            const thumbnailUrl = getGDThumbnail(catalog.pdf_download_url);
            const hasImageError = imageErrors.has(catalog.id);
            const showFallback = !thumbnailUrl || hasImageError;
            
            return (
              <div
                key={catalog.id}
                id={`catalog-card-${catalog.id}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 group-hover:after:scale-x-100"
              >
                {/* UI Thumbnail Area */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#232323] to-[#111111]">
                  {/* Real PDF Thumbnail from Google Drive */}
                  {!showFallback ? (
                    <Image
                      src={thumbnailUrl}
                      alt={catalog.title}
                      fill
                      className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(catalog.id)}
                    />
                  ) : (
                    <>
                      {/* Fallback Decorative background pattern */}
                      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />
                      {/* Brand name as fallback */}
                      <span className="relative z-[1] px-6 text-center text-lg font-extrabold uppercase tracking-wider text-white/90 transition-colors duration-300 group-hover:text-white">
                        {catalog.title}
                      </span>
                    </>
                  )}

                  {/* Dark Vignette Overlay for readability */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40" />

                  {/* Red accent line */}
                  <div className="absolute bottom-0 left-0 z-[2] h-[3px] w-0 bg-gradient-to-r from-brand-red to-red-500 transition-all duration-500 group-hover:w-full" aria-hidden />
                  
                  {/* PDF icon watermark */}
                  <FileText className="absolute right-4 top-4 z-[2] h-8 w-8 text-white/30 drop-shadow-md" aria-hidden />
                  
                  {/* Category badge */}
                  <span className="absolute left-3 top-3 z-[2] rounded-md bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
                    {catalog.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-industrial-black line-clamp-2">{catalog.title}</h3>
                  <a
                    id={`download-btn-${catalog.id}`}
                    href={catalog.pdf_download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-red-dark hover:shadow-md hover:shadow-red-500/20"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-gray-400">No catalogs match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
