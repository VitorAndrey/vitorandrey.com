import { DownloadCloudIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function About() {
  return (
    <div id="about" className="section">
      <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
        About Me
      </h2>
      <h3 className="text-muted-foreground text-center opacity-80 md:pb-10 pb-6">
        My Introduction
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={350}
          height={350}
          className="rounded-3xl grayscale-100 mx-auto md:mx-0 w-full max-w-[150px] sm:max-w-[225px] md:max-w-[300px] lg:max-w-[350px]"
        />

        <div className="flex flex-col gap-6 ">
          <div className="flex gap-2">
            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 md:gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 md:gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 md:gap-1 flex flex-col items-center text-center justify-center">
              <HomeIcon size={20} />
              <h3>Sample</h3>
              <span className="text-muted-foreground text-xs px-2">
                3+ years
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-center max-w-sm md:text-left text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            perferendis necessitatibus eum .
          </p>

          <Button className="w-full max-w-44 self-center md:self-start h-12 rounded-xl transition hover:bg-transparent border border-secondary-foreground hover:text-secondary-foreground">
            Download CV <DownloadCloudIcon size={12} />
          </Button>
        </div>
      </div>
    </div>
  );
}
