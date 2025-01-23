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
import { LoadingSpinner } from "../common/loading-spinner/loadingSpinner"
import { logout } from "@/app/login/actions"


// import Menu from "./menu"
import Link from "next/link"
import { useEffect, useState } from "react"
interface HeaderAuthProps {
    usr: User | null;
}
export default function HeaderAuth({ usr }: HeaderAuthProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            console.log("Initial session check:", session); // Debug log
            setUser(session?.user ?? null);
            setLoading(false);
        };

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth state changed:", event, session); // Debug log
            setUser(session?.user ?? null);
            setLoading(false);
        });

        checkSession();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="flex gap-4 size-14 items-center justify-center">
                <LoadingSpinner />
            </div>

        );
    }

    return (
        <div className="flex gap-4">
            {usr ? (
                <>
                    <DropdownMenu>
                        {usr.email}
                        {user?.email}
                        <DropdownMenuTrigger asChild>

                            <Avatar className="cursor-pointer hover:opacity-80 size-12">

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
                                        // Force a re-render or update
                                        // setUser(null);
                                        // setLoading(false);
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



