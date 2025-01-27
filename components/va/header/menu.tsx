"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { MenuLinks } from "./menu-links";
export default function Menu() {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {MenuLinks.map((menuLink) => {
            return (
              <NavigationMenuItem key={menuLink.id}>
                <Link href={menuLink.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    {menuLink.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
