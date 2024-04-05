"use client";

import ButtonLink from "@/components/ButtonLink";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "./Logo";

type NavBarProps = {
  navprops: Array<{
    item: string;
    label: string;
    link: string;
  }>;
};

const navigation = [
  { item: "About", label: "About Us", link: "/about" },
  { item: "GetStarted", label: "GetStarted", link: "/dashboard" },
];
export default function NavBar({ navprops }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <Logo />
            <span className="sr-only">Glisten.ai Home Page</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {navigation.map((item) => (
              <ButtonLink
                key={item.label}
                href={item.link}
                onClick={() => setOpen(false)}
                aria-current={pathname.includes(item.link) ? "page" : undefined}
              >
                {item.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className=" hidden gap-6 md:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <ButtonLink
                href={item.link}
                onClick={() => setOpen(false)}
                aria-current={pathname.includes(item.link) ? "page" : undefined}
              >
                {item.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
