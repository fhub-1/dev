import { createClient } from "@/prismicio";
import Link from "next/link";
import Logo from "./Logo";

export default async function Footer() {
  const navigation = [
    { item: "About", label: "About Us", link: "/about" },
    { item: "GetStarted", label: "GetStarted", link: "/dashboard" },
  ];
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Logo />
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
