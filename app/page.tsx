import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-home-mobile bg-cover bg-bottom tablet:bg-home-tablet desktop:bg-home-desktop">
      <div
        className="flex h-screen w-screen flex-col items-center justify-between desktop:mx-auto
       desktop:max-w-container-width desktop:flex-row desktop:items-end desktop:justify-around desktop:pb-[8.187rem]
       x-lrg-desktop:items-center x-lrg-desktop:pb-0"
      >
        <div className="mx-6 mt-[7rem] max-w-[20.44rem] text-center tablet:mt-[12.625rem] tablet:max-w-[27.75rem] desktop:m-0 desktop:w-[50%] desktop:text-left">
          <h5 className="font-barlow_condensed text-fs-300 uppercase tracking-ls-4 text-lilac tablet:text-fs-500 tablet:tracking-ls-5 desktop:text-fs-600 desktop:tracking-ls-6">
            So, you want to travel to
          </h5>
          <h1 className="my-4 font-bellefair text-fs-900 uppercase leading-lh-4 tablet:my-6 tablet:text-fs-1100 tablet:leading-lh-5 desktop:my-6 desktop:text-fs-1100 desktop:leading-[1.1]">
            Space
          </h1>

          <p className="text-fs-200 leading-lh-1 text-lilac tablet:text-fs-300 tablet:leading-lh-2 desktop:text-fs-400 desktop:leading-lh-3">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            href="/destination"
            className="relative mb-12 flex h-[9.375rem] w-[9.375rem] items-center justify-center rounded-full
          bg-white text-black after:absolute after:z-20 after:h-[9.375rem] after:w-[9.375rem] after:rounded-full after:bg-white after:opacity-10 after:transition-all after:duration-500
          after:ease-in-out after:hover:scale-150 after:focus:scale-150 tablet:mb-[5.625rem] tablet:h-[15.125rem] tablet:w-[15.125rem] tablet:after:h-[15.125rem] tablet:after:w-[15.125rem] desktop:m-0 desktop:h-[17.125rem] desktop:w-[17.125rem]"
          >
            <span className="font-bellefair text-fs-500 uppercase tracking-ls-1 tablet:text-fs-700 tablet:tracking-ls-2 desktop:text-fs-700 desktop:tracking-ls-2">
              Explore
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
