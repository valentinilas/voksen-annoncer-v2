import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import MenuCorner from "./menu-corner";
export default async function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="w-1/2 flex justify-start">
        <Link href="/" className="hover:opacity-80 flex gap-4 items-center">
          <Image
            src="/images/logo-24x24.svg"
            width="24"
            height="24"
            className="size-9 md:size-12"
            alt="Logo"
          />
          <span className="text-sm font-semibold">Voksenannoncer</span>
        </Link>
      </div>
      <div>
        <Menu />
      </div>
      <div className="w-1/2 flex justify-end">
        <MenuCorner />
      </div>
    </header>
  );
}
