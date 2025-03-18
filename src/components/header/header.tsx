import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { DrawerMenu } from "./drawer-menu";

export function Header() {
  return (
    <header className="fixed w-full py-4 px-4 md:px-8 h-20 xl:px-[8%] z-50">
      <nav className="flex justify-between items-center w-full">
        <Link href="#">Andrey</Link>

        <div className="hidden bg-background text-sm shadow-sm md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2 border">
          {[
            { href: "#hero-section", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#portfolio", label: "Portfolio" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn("hover:text-foreground text-muted-foreground")}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="md:flex hidden">
          <ThemeToggle />
        </div>

        <div className="md:hidden block">
          <DrawerMenu />
        </div>
      </nav>
    </header>
  );
}
