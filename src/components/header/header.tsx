import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { DrawerMenu } from "./drawer-menu";

export function Header() {
  return (
    <header className="fixed w-full py-4 px-4 md:px-8 h-20 xl:px-[8%] z-50">
      <nav className="flex justify-between items-center w-full">
        <Link href="#">
          <Image
            src="/favicon.png"
            alt="logo"
            width={40}
            height={40}
            className="w-8 md:w-10"
          />
        </Link>

        <div className="hidden bg-background/90 text-sm shadow-sm md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-1">
          {[
            { href: "#hero-section", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#portfolio", label: "Portfolio" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <Button
                className="text-foreground hover:text-muted-foreground transition-all"
                variant="link"
              >
                {label}
              </Button>
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
