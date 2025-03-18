"use client";

import { ReactSVG } from "react-svg";

export default function SVG({ path }: { path: string }) {
  return <ReactSVG src={path} />;
}
