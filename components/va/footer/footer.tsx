// "use client"
import Link from "next/link";
import { FooterLinks } from "./footer-links";
import { ThemeToggle } from "./theme-toggle";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4">
      <div className="w-full md:flex md:items-center md:justify-between p-4  bg-primary-foreground rounded-lg  shadow-lg">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-secondary-foreground sm:mt-0">
          <li>
            <div className="hover:underline me-4 md:me-6">
              <ThemeToggle />
            </div>
          </li>
          {FooterLinks.map((footerLink) => {
            return (
              <li key={footerLink.id}>
                <Link
                  href={footerLink.href}
                  className="hover:underline me-4 md:me-6"
                >
                  {footerLink.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <span className="text-sm block mt-10 md:mt-0 text-black/50  dark:text-white/50">
          &copy; {year} Voksenannoncer.
        </span>
      </div>
      <div className="w-full p-4">
        <p className="text-xs text-black/50  dark:text-white/50 text-center">
          Denne hjemmeside er kun en reklameplatform og har ingen forbindelse
          eller ansvar med de steder eller personer, der annoncerer her. Vi
          leverer kun reklameplads og er ikke et escortbureau eller på nogen
          måde involveret i vores annoncørers forretninger.
        </p>
      </div>
    </footer>
  );
}
