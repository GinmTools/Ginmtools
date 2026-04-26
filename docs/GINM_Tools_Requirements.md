# GINM TOOLS: B2B Platform Web Architecture & Requirements Document

## 1. Project Overview
* **Business:** GINM TOOLS (Established 1958)
* **Type:** B2B Tool Supplier & Manufacturer
* **Project Goal:** To design, develop, and deploy a high-trust, corporate web platform tailored for B2B lead generation. The primary conversion mechanisms are a gated PDF catalog library and a direct bulk-quote request system.

---

## 2. System Architecture & Tech Stack
The platform will be built using a modern, scalable web architecture focused on performance, SEO, and smooth animations.
* **Frontend Framework:** React.js (Next.js recommended for SEO and static site generation).
* **Styling:** Tailwind CSS for responsive layout, augmented with pure CSS keyframes and Framer Motion for premium UI interactions.
* **Icons:** Lucide-React (corporate, clean SVG icons).
* **Deployment & Hosting:** * Codebase hosted on **GitHub**.
    * Continuous Deployment (CD) via **Vercel** or **Netlify**.
* **Asset Management (PDFs & Media):**
    * *Images/Icons:* Stored locally in the GitHub repository (`public/images`).
    * *PDF Catalogs:* Stored in a Cloud Storage Bucket (**Supabase Storage** or **AWS S3**) to keep the GitHub repository lightweight and ensure fast global delivery via CDN.
* **Lead Capture / Backend:** Serverless API functions (Next.js API routes or Supabase Edge Functions) routing form submissions to a secure database or email autoresponder.

---

## 3. UI/UX Design System
* **Primary Color Palette:** * Brand Red: `#dc2626` (Tailwind `red-600`)
    * Industrial Black: `#000000` & `#18181b` (Tailwind `zinc-900`)
    * Clean White & Grays: `#ffffff`, `#f9fafb` (Tailwind `gray-50`)
* **Typography:** Modern Sans-Serif. Heavy use of `font-black` and `font-bold` for headings to evoke strength and industrial durability.
* **Animation Philosophy:** "Corporate & Smooth." Use slow fades (`fade-in-up`), subtle scaling, and Ken Burns background effects to create a premium, high-trust feel. Avoid bouncy or playful animations.

---

## 4. Core Functional Requirements (Features)

### 4.1. Navigation & Header
* **Sticky Header:** Transforms from transparent to solid white upon scrolling.
* **Elements:** Brand Logo and anchor links (Catalogs, Heritage).

### 4.2. Hero Section
* **Visuals:** Dark, industrial background image featuring a continuous, slow CSS "Ken Burns" animation (scale 1 to 1.15 over 20s).
* **Content:** "Trusted Tools for Professionals" headline, "Since 1958" badge.
* **Stats Bar:** A floating bottom bar displaying dynamic or static metrics (e.g., "65+ Years of Trust", "1000+ Products", "ISO Certified").

### 4.3. Social Proof (Client Marquee)
* **Functionality:** An infinite-scrolling horizontal marquee of partner/client logos.
* **Interaction:** Animation pauses gracefully when the user hovers over the marquee to allow logo readability.

### 4.4. The Catalog Library (Core Engine)
* **Layout:** A responsive 3-column CSS grid displaying catalog cards.
* **Search Feature:** Real-time text input to filter catalogs by title or category.
* **Card Anatomy:** High-res cover thumbnail, Category Badge, Title, Edition Year, File Size, and a primary "Download PDF" button.
* **Gated Download Modal (Lead Capture):** * Triggered upon clicking "Download PDF".
    * Prevents download until the user provides: `First Name`, `Company Name`, and `Business Email`.
    * Upon valid submission, triggers the PDF download from the cloud storage link and logs the lead.

### 4.5. Heritage & Awards Section
* **Content:** Dedicated area highlighting the 1958 origin, industrial-grade metallurgy, and rigorous testing standards.
* **Awards Grid:** Visual display of industry certifications (e.g., ISO 9001, CE & ANSI Standards) with hover-scale effects.

### 4.6. Testimonials Slider
* **Functionality:** An interactive carousel displaying B2B reviews.
* **Content Required:** Quote, Author Name, and Author's Corporate Title (e.g., "Director of Procurement").
* **Controls:** Left/Right chevron navigation.

### ~~4.7. Bulk Order Quote Request (Lead Funnel)~~ *(removed — site is informational brochure + catalog library only)*

---

## 5. Data Structures (Mock / Database Schema)

### 5.1. Catalog Object Structure
```json
{
  "id": "uuid",
  "title": "Heavy Duty Power Tools",
  "year": "2025",
  "size": "8.5 MB",
  "category": "Power Tools",
  "image_url": "https://...",
  "pdf_download_url": "https://..."
}
```

### 5.2. Captured Lead Object Structure (From Gated Download)
```json
{
  "id": "uuid",
  "timestamp": "2026-04-10T10:00:00Z",
  "name": "John Doe",
  "company_name": "Apex Construction",
  "email": "jdoe@apex.com",
  "downloaded_catalog_id": "catalog_uuid"
}
```

---

## 6. Future Scalability (Phase 2 Considerations)
* **Admin CRM Dashboard:** A secure `/admin` route allowing the GINM Tools sales team to view captured leads and export them to CSV.
* **Dynamic Catalog Manager:** A UI for the client to upload new PDFs to the cloud bucket and automatically generate a new card in the Catalog Library without requiring code deployments.