import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex h-[calc(100vh-112px)] flex-col items-center justify-around bg-home-mobile 
    bg-cover bg-center  tablet:bg-home-tablet desktop:bg-home-desktop"
    >
      <div className="mx-[24px] text-center">
        <h5 className="text-fs-300 tracking-ls-4 uppercase ">
          So, you want to travel to
        </h5>
        <h1 className="text-fs-900 my-[16px] font-bellefair uppercase leading-[125%]">
          Space
        </h1>

        <p className="text-fs-200 leading-[25px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className=" ">
        <Link
          href="/"
          className="flex h-[9.375rem] w-[9.375rem] items-center justify-center rounded-full bg-white text-black"
        >
          <span className="text-fs-500 font-bellefair uppercase tracking-[1.25px]">
            Explore
          </span>
        </Link>
      </div>
    </main>
  );
}
