import Link from "next/link";

export function Header() {
  return (
    <div className="fixed">
      <nav className="flex gap-5">
        <Link href="#hero-section">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#portfolio">Portfolio</Link>
      </nav>
    </div>
  );
}
