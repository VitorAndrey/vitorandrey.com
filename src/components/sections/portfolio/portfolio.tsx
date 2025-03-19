"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

import { EffectCards } from "swiper/modules";

const projects = [
  {
    url: "https://www.linkedin.com/posts/vitor-andrey-lopes-santos_gostaria-compartilhar-o-projeto-incr%C3%ADvel-activity-7156635084333162497-jVCr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKDVnoBsgopMgH0L8U1ikPQptmrqP6gU3k",
    image: "/work1.jpg",
    platform: "Web",
    name: "Martinho",
    title: "Martinho Project",
    description:
      "A web project showcasing innovative solutions for modern challenges.",
  },
  {
    url: "#portfolio",
    image: "/work2.jpg",
    platform: "Mobile",
    name: "Network",
    title: "Network News App",
    description:
      "A mobile app for staying updated with the latest network news.",
  },
  {
    url: "#portfolio",
    image: "/work3.jpg",
    platform: "Web",
    name: "Moveis",
    title: "Moveis Store",
    description: "An e-commerce platform for furniture shopping.",
  },
];

export function Portfolio() {
  return (
    <div id="portfolio" className="section">
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
            className="flex flex-col flex-1 gap-4"
          >
            <img
              src={project.image}
              alt={`${project.name} Preview`}
              className="rounded-lg brightness-50 dark:brightness-75 transition-all"
            />
            <span className="text-sm text-muted-foreground">
              {project.platform}
            </span>
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="text-sm text-muted-foreground">
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
              <Link href={project.url} className="flex flex-col gap-2">
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
