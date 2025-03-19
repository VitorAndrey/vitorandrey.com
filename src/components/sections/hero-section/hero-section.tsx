import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SendIcon,
} from "lucide-react";
import Link from "next/link";
import ProfileImage from "./profile-image";

export function HeroSection() {
  return (
    <section id="hero-section" className="section snap-start relative">
      <div>
        <div className="hero_grid">
          <Socials />
          <ProfileImage />

          <div className="col-[1/3] md:col-auto text-center md:text-left">
            <h1 className="text-3xl justify-self-center md:justify-self-start md:text-5xl flex items-end gap-2 md:pb-10 pb-6 pt-6 md:pt-0 font-semibold opacity-90">
              Vitor Andrey 🖐️
            </h1>
            <h3 className="font-semibold justify-center md:justify-start -ml-8 md:-ml-0 flex items-center text-lg gap-4 pb-4 opacity-70">
              <span className="h-px w-8 md:w-12 bg-foreground" />
              Full Stack Engineer
            </h3>
            <p className="pb-6 text-muted-foreground max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus iste, quos cupiditate in aperiam aliquam!
            </p>
            <Button className="w-full max-w-36 h-12 rounded-xl transition hover:bg-transparent border border-secondary-foreground hover:text-secondary-foreground">
              Contact me <SendIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <div className="scale-[.8] md:scale-[1] absolute bottom-8 gap-2 flex items-center text-xs">
        <div className="relative flex border-foreground justify-center border-[2px] w-4.5 h-7 rounded-xl">
          <div className="absolute top-1.5 rounded-xl w-[2px] h-1.5 animate-bounce bg-foreground"></div>
        </div>
        <span>Scroll Down</span> <ArrowDownIcon size={20} />
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div className="grid grid-cols-[max-content] gap-4">
      <Link
        href="https://github.com/VitorAndrey"
        target="_blank"
        className="text-muted-foreground hover:text-foreground transition-all"
      >
        <GithubIcon size={22} />
      </Link>
      <Link
        href="www.linkedin.com/in/vitor-andrey-lopes-santos"
        className="text-muted-foreground hover:text-foreground transition-all"
      >
        <LinkedinIcon size={22} />
      </Link>
      <Link
        href="mailto:vitor.andreylopes@gmail.com"
        className="text-muted-foreground hover:text-foreground transition-all"
      >
        <MailIcon size={22} />
      </Link>
    </div>
  );
}
