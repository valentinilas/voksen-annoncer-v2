"use client";
import { Button } from "@/components/ui/button";
import {
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  SquarePlus,
  UserRoundPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingSpinner } from "../common/loading-spinner/loadingSpinner";
import { logout } from "@/app/login/actions";
import { cdnUrl } from "@/utils/imagekit/cdn-url";

// import Menu from "./menu"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { MenuLinks } from "./menuLinks";

export default function MenuCorner() {
  const { user, loading, setUser, userProfile } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      setUser(null);
      router.refresh();
      router.push("/");
    } else {
      console.error("Logout failed:", result.error);
    }
  };

  if (loading) {
    return (
      <div className="flex gap-4 size-14 items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <>
        {user ? (
          <>
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                    <span className="text-sm">{userProfile?.username}</span>

                    <Avatar className=" size-12">
                      {userProfile?.avatar_url && (
                        <AvatarImage
                          src={cdnUrl(userProfile?.avatar_url, 48, 48)}
                        />
                      )}

                      <AvatarFallback>
                        <UserIcon />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/private" className="w-full cursor-pointer">
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-post" className="w-full cursor-pointer">
                      <SquarePlus className="mr-2 h-4 w-4" />
                      New post
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        ) : (
          <div className="hidden md:flex gap-4">
            <Button asChild variant="outline">
              <Link href="/login">
                <LogInIcon className="mr-2" />
                Log ind
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Ny konto</Link>
            </Button>
          </div>
        )}
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {user && (
                <>
                  <DropdownMenuLabel>Konto</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/private" className="w-full cursor-pointer">
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-post" className="w-full cursor-pointer">
                      <SquarePlus className="mr-2 h-4 w-4" />
                      New post
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              {!user && (
                <>
                  <DropdownMenuLabel>Konto</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="w-full cursor-pointer">
                      <UserRoundPlus />
                      Ny konto
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="w-full cursor-pointer">
                      <LogInIcon />
                      Log in
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              {MenuLinks.map((menuLink) => {
                return (
                  <DropdownMenuItem key={menuLink.id} asChild>
                    <Link
                      className="w-full cursor-pointer"
                      href={menuLink.href}
                    >
                      {menuLink.title}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    </div>
  );
}
