import Link from "next/link";

const martinhoPostUrl =
  "https://www.linkedin.com/posts/vitor-andrey-lopes-santos_gostaria-compartilhar-o-projeto-incr%C3%ADvel-activity-7156635084333162497-jVCr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKDVnoBsgopMgH0L8U1ikPQptmrqP6gU3k";
const networkNewsPostUrl = "";
const moveisPostUrl = "";

export function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <Link href={moveisPostUrl}>Moveis</Link>
      <Link href={networkNewsPostUrl}>Network</Link>
      <Link href={martinhoPostUrl}>Martinho</Link>
    </div>
  );
}
