import Image from "next/image";
import ginbLogo from "@/images/ginb-logo-transparent.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-gray-800 bg-industrial-deep py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src={ginbLogo}
              alt="GINB Tools Logo"
              width={373}
              height={125}
              className="h-20 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.4)) drop-shadow(0 2px 8px rgba(220,38,38,0.25))' }}
              placeholder="blur"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Professional tool supplier since 1958. Industrial-grade solutions for enterprises, construction firms, and manufacturers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {["Catalogs", "Heritage"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-red"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:sales@ginbtools.com"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-red"
                >
                  sales@ginbtools.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+491234567890"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-red"
                >
                  +49 (0) 123 456 7890
                </a>
              </li>
              <li className="text-sm text-gray-500">
                Stuttgart, Germany
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} GINB Tools GmbH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
