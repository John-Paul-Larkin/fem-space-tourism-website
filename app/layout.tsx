"use client";

import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "@/public/shared/logo.svg";
import hamburger from "@/public/shared/icon-hamburger.svg";
import close from "@/public/shared/icon-close.svg";

import { useState } from "react";
import Link from "next/link";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlow_condensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}`}
    >
      <body className="font-barlow  bg-black text-white">
        <div
          className="fixed 
        z-40
        flex
      h-[5.5rem]
      w-full
      items-center
       tablet:h-24
      desktop:mt-10
    
        "
        >
          <div className="relative ml-6 h-10 w-10 tablet:ml-10 tablet:h-12 tablet:w-12  tablet:min-w-[3rem] desktop:mx-14">
            <Image priority src={logo} fill={true} alt="logo" />
          </div>
          <div className="grow">
            <div
              className="lrg-desktop:block lrg-desktop:opacity-25 lrg-desktop:relative lrg-desktop:z-50 
            
            
            lrg-desktop:h-[1px] 
            lrg-desktop:bg-white
            lrg-desktop:w-[calc(100%+2rem)]
            
            hidden 
            "
            ></div>
            {/* lrg-desktop:left-12  */}
          </div>

          <button
            key="hamburger"
            className="relative z-40 mr-6 text-white tablet:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen && <Image priority src={hamburger} alt="menu" />}

            {isMenuOpen && <Image priority src={close} alt="menu" />}
          </button>

          <nav
            className={
              isMenuOpen
                ? "absolute right-0 top-0  block h-screen w-[15.875rem] bg-white bg-opacity-10 text-white backdrop-blur-xl"
                : "bg-black-rgba hidden tablet:block tablet:h-24 tablet:w-[28.125rem] desktop:w-[51.875rem] desktop:bg-opacity-90 desktop:text-white desktop:backdrop-blur-xl"
            }
          >
            <ul
              className="text-fs-300 tablet:text-fs-100 desktop:text-fs-300 desktop:tracking-ls-4 tablet:tracking-ls-3 tracking-ls-4 ml-7 font-barlow_condensed uppercase
            tablet:flex tablet:h-full tablet:items-center tablet:justify-evenly
            
            lrg-desktop:desktop:ml-28
        
            lrg-desktop:desktop:mr-40 
            
            lrg-desktop:justify-between

            desktop:mx-0 desktop:justify-evenly
            "
            >
              <li
                className="after:tablet:content[''] relative mt-28 cursor-pointer tablet:m-0
                
              tablet:flex tablet:h-full tablet:items-center after:tablet:absolute after:tablet:h-full after:tablet:w-full after:tablet:hover:border-b-[3px] after:tablet:focus:border-b-[3px]"
              >
                <Link
                  href={"/home"}
                  className="z-50 tablet:flex tablet:h-full tablet:items-center"
                >
                  <span className="mr-3 font-bold tablet:hidden desktop:inline">
                    00
                  </span>
                  Home
                </Link>
              </li>
              <li
                className="after:tablet:content[''] relative mt-8 cursor-pointer tablet:m-0
              tablet:flex tablet:h-full tablet:items-center after:tablet:absolute after:tablet:h-full after:tablet:w-full after:tablet:hover:border-b-[3px] "
              >
                <Link
                  href={"/destination"}
                  className="z-50 tablet:flex tablet:h-full tablet:items-center"
                >
                  <span className="mr-3 font-bold tablet:hidden desktop:inline">
                    01
                  </span>
                  Destination
                </Link>
              </li>
              <li
                className="after:tablet:content[''] relative mt-8 cursor-pointer tablet:m-0
              tablet:flex tablet:h-full tablet:items-center after:tablet:absolute after:tablet:h-full after:tablet:w-full after:tablet:hover:border-b-[3px]"
              >
                <Link
                  href={"/crew"}
                  className="z-50 tablet:flex tablet:h-full tablet:items-center"
                >
                  <span className="mr-3 font-bold tablet:hidden desktop:inline">
                    02
                  </span>
                  Crew
                </Link>
              </li>
              <li
                className="after:tablet:content[''] relative mt-8 cursor-pointer tablet:m-0
              tablet:flex tablet:h-full tablet:items-center after:tablet:absolute after:tablet:h-full after:tablet:w-full after:tablet:hover:border-b-[3px] "
              >
                <Link
                  href={"/technology"}
                  className="z-50 tablet:flex tablet:h-full tablet:items-center"
                >
                  <span className="mr-3 font-bold tablet:hidden desktop:inline">
                    03
                  </span>
                  Technology
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
