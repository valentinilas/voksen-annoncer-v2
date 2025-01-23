import Image from "next/image"
import HeaderAuth from "./header-auth"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server"
export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser()
  console.log(user);

  return (
    <header className="w-full flex items-center justify-between p-4">
      <div>
        <Link href="/">
          <Image src="/images/logo-24x24.svg" width="24" height="24" className="size-12" alt="Logo" />
        </Link>
      </div>
      <div>
        {/* <Menu /> */}
      </div>
      <HeaderAuth usr={user}/>
    </header >
  )
}