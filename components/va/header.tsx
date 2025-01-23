// "use client"
import Image from "next/image"

import HeaderAuth from "./header-auth"
import Link from "next/link"
// import Menu from "./menu"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">

      <div>
        <Link href="/">
          <Image src="/images/logo-24x24.svg" width="24" height="24" className="size-16" alt="Logo" />
        </Link>
      </div>
      <div>
        {/* <Menu /> */}
      </div>
      <HeaderAuth />

    </header >
  )
}