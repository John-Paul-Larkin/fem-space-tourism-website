"use client";

import Image from "next/image";
import logo from "@/public/shared/logo.svg";
import hamburger from "@/public/shared/icon-hamburger.svg";
import close from "@/public/shared/icon-close.svg";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-[10] w-screen">
      <div className="z-[11] mx-auto flex h-[5.5rem] w-full max-w-container-width items-center tablet:h-24 desktop:mt-10">
        <Link href="/">
          <div className="relative ml-6 h-10 w-10 tablet:ml-10 tablet:h-12 tablet:w-12  tablet:min-w-[3rem] desktop:mx-14">
            <Image priority src={logo} fill={true} alt="logo" />
          </div>
        </Link>
        <div className="grow">
          <div className="hidden lrg-desktop:relative lrg-desktop:z-[12] lrg-desktop:block lrg-desktop:h-[1px] lrg-desktop:w-[calc(100%+2rem)] lrg-desktop:bg-white lrg-desktop:opacity-25"></div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-[11] mr-6 text-white tablet:hidden"
        >
          {!isMenuOpen && <Image src={hamburger} alt="hamburger menu" />}
          {isMenuOpen && <Image src={close} alt="close menu" />}
        </button>

        <nav
          className={
            isMenuOpen
              ? "absolute right-0 top-0  block h-screen w-[15.875rem] bg-white bg-opacity-10 text-white backdrop-blur-xl"
              : "hidden bg-black-rgba tablet:block tablet:h-24 tablet:w-[28.125rem] desktop:w-[51.875rem] desktop:bg-opacity-90 desktop:text-white desktop:backdrop-blur-xl"
          }
        >
          <ul className="ml-7 font-barlow_condensed text-fs-300 uppercase tracking-ls-4 tablet:flex tablet:h-full tablet:items-center tablet:justify-evenly tablet:text-fs-100 tablet:tracking-ls-3 desktop:mx-0 desktop:justify-evenly desktop:text-fs-300 desktop:tracking-ls-4 lrg-desktop:desktop:ml-28 lrg-desktop:desktop:mr-40 lrg-desktop:justify-between">
            <NavMenuItem
              menuItem="home"
              index="00"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <NavMenuItem
              menuItem="destination"
              index="01"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <NavMenuItem
              menuItem="crew"
              index="02"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <NavMenuItem
              menuItem="technology"
              index="03"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

type Props = {
  index: string;
  menuItem: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenuItem = (props: Props) => {
  const segment = useSelectedLayoutSegment();

  const { menuItem, setIsMenuOpen, index, isMenuOpen } = props;

  return (
    <li
      className={`nav-btn relative mt-8 tablet:m-0 tablet:flex tablet:items-center ${
        segment == menuItem ? "after:tablet:border-b-[3px]" : ""
      }`}
    >
      <Link
        href={`/${menuItem === "home" ? "" : menuItem}`}
        className="z-[12] tablet:flex tablet:h-full tablet:items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="mr-3 font-bold tablet:hidden desktop:inline">
          {index}
        </span>
        {menuItem}
      </Link>
    </li>
  );
};
