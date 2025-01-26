// "use client"
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-4">
      <footer className="">
        <div className="w-full md:flex md:items-center md:justify-between p-4  bg-primary-foreground rounded-lg  shadow-lg">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-secondary-foreground sm:mt-0">
            <li>
              <div className="hover:underline me-4 md:me-6">
                <ThemeToggle />
              </div>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:underline me-4 md:me-6">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/word-guide" className="hover:underline me-4 md:me-6">
                Word guide
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline me-4 md:me-6">
                Support
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie policy
              </Link>
            </li>
          </ul>
          <span className="text-sm block mt-10 md:mt-0 text-black/50  dark:text-white/50">
            &copy; {year} Voksenannoncer.
          </span>
        </div>
        <div className="w-full p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Denne hjemmeside er kun en reklameplatform og har ingen forbindelse
            eller ansvar med de steder eller personer, der annoncerer her. Vi
            leverer kun reklameplads og er ikke et escortbureau eller på nogen
            måde involveret i vores annoncørers forretninger.
          </p>
        </div>
      </footer>
    </div>
  );
}
