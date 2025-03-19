"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  ImageIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export function DrawerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2 bg-background/95">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Drawer</SheetTitle>

        <SheetHeader className="flex flex-col gap-5">
          <ThemeToggle />
        </SheetHeader>

        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-8">
            <div className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link href="#hero-section">
                  <Button className="w-full justify-start" variant="ghost">
                    <HomeIcon className="w-4 mr-2" /> Home
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#about">
                  <Button className="w-full justify-start" variant="ghost">
                    <UserIcon className="w-4 mr-2" /> About
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#skills">
                  <Button className="w-full justify-start" variant="ghost">
                    <BriefcaseBusinessIcon className="w-4 mr-2" /> Skills
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#portfolio">
                  <Button className="w-full justify-start" variant="ghost">
                    <ImageIcon className="w-4 mr-2" /> Portfolio
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </nav>
        </ScrollArea>

        <SheetFooter>
          <h3 className="text-xs text-muted-foreground text-center">
            Built with 🖤 by{" "}
            <Link
              href="mailto:tecinformatica135.139@gmail.com"
              className="underline"
            >
              Vitor Andrey
            </Link>
          </h3>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
