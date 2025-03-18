import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import ProfileImage from "./profile-image";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="section flex justify-center items-center min-h-screen snap-center"
    >
      <div>
        {/* // home container */}
        <div className="grid grid-cols-[116px_repeat(2,1fr)] items-center gap-2">
          {/* // home content */}
          <Socials />
          <ProfileImage />

          <div>
            {" "}
            {/* Home Data */}
            <h1 className="text-5xl flex items-end gap-2 pb-10 font-semibold opacity-90">
              Vitor Andrey 🖐️
            </h1>
            <h3 className="font-semibold flex items-center text-lg gap-4 pb-4 opacity-80">
              <span className="h-px w-16 bg-foreground" />
              Full Stack Engineer
            </h3>
            <p className="pb-6 text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus iste, quos cupiditate in aperiam aliquam!
            </p>
            <Button className="w-36">
              Contact me <SendIcon size={12} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div className="grid grid-cols-[max-content] gap-4">
      {/* //home social */}
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
