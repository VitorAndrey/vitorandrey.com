"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

import Image from "next/image";
import { EffectCards } from "swiper/modules";

const projects = [
  {
    url: "https://www.linkedin.com/posts/vitor-andrey-ls_sistema-de-gest%C3%A3o-para-empresas-de-m%C3%B3veis-activity-7308283891201576960-Eh1_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKDVnoBsgopMgH0L8U1ikPQptmrqP6gU3k",
    image: "/moveis-peview.png",
    platform: "Web",
    name: "Moveis",
    title: "Moveis Store",
    description:
      "A system for real-time stock management, product reports, and customer catalogs for furniture businesses.",
  },
  {
    url: "https://network-news.vercel.app/",
    image: "/network-preview.png",
    platform: "Web",
    name: "Network",
    title: "Network News App",
    description:
      "A portal for hosting newsletters and tech-related content by a passionate IT team.",
  },
  {
    url: "https://www.linkedin.com/posts/vitor-andrey-ls_gostaria-compartilhar-o-projeto-incr%C3%ADvel-activity-7156635084333162497-vkhx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKDVnoBsgopMgH0L8U1ikPQptmrqP6gU3k",
    image: "/martinho-preview.png",
    platform: "Mobile",
    name: "Martinho",
    title: "Martinho Project",
    description:
      "An app that helps users navigate supermarkets, find aisles, and get promotions along the way.",
  },
];

export function Portfolio() {
  return (
    <div id="portfolio" className="section snap-end">
      <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
        Portfolio
      </h2>
      <h3 className="text-muted-foreground text-center opacity-80 md:pb-10 pb-6">
        Some of my latest work
      </h3>

      <div className="hidden md:flex gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            className="flex flex-col flex-1 gap-1"
          >
            <div className="w-full h-[180px] relative">
              <Image
                fill
                src={project.image}
                alt={`${project.name} Preview`}
                className="bg-cover bg-center border brightness-75 dark:brightness-90 transition-all"
              />
            </div>

            <span className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
              <div className="h-px w-4 bg-muted-foreground"></div>
              {project.platform}
            </span>
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="text-xs md:pr-4 text-muted-foreground">
              {project.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="bg-background border">
              <Link
                href={project.url}
                target="_blank"
                className="flex flex-col gap-2"
              >
                <img
                  src={project.image}
                  alt={`${project.name} Preview`}
                  className="rounded-t-lg"
                />
                <div className="px-4">
                  <span className="text-sm text-muted-foreground">
                    {project.platform}
                  </span>
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
