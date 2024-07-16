// Libraries.
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <nav className="header px-[10rem] h-[10vh]">
      <ul className="diagonal-borders-global">
        <li className="space-grotesk text-[1.2rem]">
          <Link href="/" className="font-[900] italic">
            Lina2Bot
          </Link>
        </li>
      </ul>
    </nav>
  );
};
