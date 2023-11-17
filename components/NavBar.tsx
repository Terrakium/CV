"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";
import ContactDialog from "./ContactDialog";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 space-x-4">
      <div>Mon CV</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ContactDialog />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
}
