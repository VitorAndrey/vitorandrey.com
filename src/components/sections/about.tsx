"use client";

import { cn } from "@/lib/utils";
import {
  AwardIcon,
  BriefcaseBusinessIcon,
  DownloadCloudIcon,
  HeadphonesIcon,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function About() {
  return (
    <div id="about" className="section snap-center">
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
          className="rounded-xl grayscale-100 mx-auto md:mx-0 w-full max-w-[150px] sm:max-w-[225px] md:max-w-[300px] lg:max-w-[350px]"
        />

        <div className="flex flex-col gap-6 ">
          <div className="flex gap-2">
            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 gap-1 flex flex-col items-center text-center justify-center">
              <BriefcaseBusinessIcon size={18} />
              <h3 className="text-sm font-semibold">Completed</h3>
              <span className="text-muted-foreground text-xs px-2">
                30+ projects
              </span>
            </div>

            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 gap-1 flex flex-col items-center text-center justify-center">
              <AwardIcon size={18} />
              <h3 className="text-sm font-semibold">Experience</h3>
              <span className="text-muted-foreground text-xs px-2">
                Full Stack
              </span>
            </div>

            <div className="border flex-1 rounded-2xl md:p-4 p-2 md:h-30 py-3 gap-1 flex flex-col items-center text-center justify-center">
              <HeadphonesIcon size={18} />
              <h3 className="text-sm font-semibold">Support</h3>
              <span className="text-muted-foreground text-xs px-2">24/7</span>
            </div>
          </div>

          <p className="text-muted-foreground text-center max-w-sm md:text-left text-sm md:text-base">
            I started coding games as a kid, driven by curiosity and a passion
            for problem-solving. Now, I build applications using JavaScript
          </p>

          <Link
            download
            href={"/VitorAndrey_CV.pdf"}
            target="_blank"
            className={cn(
              buttonVariants(),
              "w-full max-w-44 self-center md:self-start h-12 rounded-xl transition hover:bg-transparent border border-secondary-foreground hover:text-secondary-foreground",
            )}
          >
            Download CV <DownloadCloudIcon size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
