import { DownloadCloudIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function About() {
  return (
    <div className="section flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center pb-2">About Me</h2>
      <h3 className="text-muted-foreground text-center opacity-80 pb-10">
        My Introduction
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={350}
          height={350}
          className="rounded-3xl mx-auto md:mx-0 w-full max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
        />

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <div className="border flex-1 rounded-2xl p-4 md:h-30 h-28 gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
            <div className="border flex-1 rounded-2xl p-4 md:h-30 h-28 gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
            <div className="border flex-1 rounded-2xl p-4 md:h-30 h-28 gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-center md:text-left text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            perferendis necessitatibus eum debitis exercitationem recusandae
            blanditiis non ratione provident hic?
          </p>

          <Button className="w-full max-w-44 self-center md:self-start h-12 rounded-xl transition hover:bg-transparent border border-secondary-foreground hover:text-secondary-foreground">
            Download CV <DownloadCloudIcon size={12} />
          </Button>
        </div>
      </div>
    </div>
  );
}
