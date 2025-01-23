"use client"
import { Button } from "@/components/ui/button"
import { LogInIcon, LogOutIcon, UserIcon } from "lucide-react"
import { createClient } from "@/utils/supabase/client"
import { User } from '@supabase/supabase-js'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LoadingSpinner } from "./loadingSpinner"
import { logout } from "@/app/login/actions"


// import Menu from "./menu"
import Link from "next/link"
import { useState } from "react"

export default function HeaderAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { auth } = createClient();
    auth.onAuthStateChange((_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
    });

    if (loading) {
        return (
            <div className="flex gap-4 size-14 items-center justify-center">
                <LoadingSpinner />
            </div>

        );
    }

    return (
        <div className="flex gap-4">
            {user ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer hover:opacity-80 size-14">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/private" className="w-full cursor-pointer">
                                    <UserIcon className="mr-2 h-4 w-4" />Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link
                                    href="#"
                                    className="w-full cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();

                                    }}
                                >
                                    <LogOutIcon className="mr-2 h-4 w-4" />Log out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </>
            ) : (
                <>
                    <Button asChild variant="outline">
                        <Link href="/login"><LogInIcon className="mr-2" />Log in</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                </>
            )}
        </div>
    )
}



