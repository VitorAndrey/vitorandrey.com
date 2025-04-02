import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export function Socials() {
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
        href="https://www.linkedin.com/in/vitor-andrey-ls"
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
