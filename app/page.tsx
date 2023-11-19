import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
  
     bg-home-mobile bg-cover 
    bg-bottom
    tablet:bg-home-tablet desktop:bg-home-desktop
    "
 
    >
      <div
        className="   
       desktop:max-w-container-width
       desktop:mx-auto


       flex
       flex-col items-center justify-between 
       desktop:flex-row
       desktop:items-end
       
       desktop:justify-around
       h-screen
      w-screen 
   desktop:pb-[8.187rem]
    "
      >
        <div
          className=" mx-6 max-w-[20.44rem] text-center  tablet:max-w-[27.75rem]
  desktop:m-0

  desktop:w-[50%]
  desktop:text-left
  mt-[7rem] tablet:mt-[12.625rem]


      "
        >
          <h5
            className="text-fs-300 tracking-ls-4 tablet:text-fs-500 tablet:tracking-ls-5 desktop:text-fs-600 desktop:tracking-ls-6 font-barlow_condensed
        uppercase text-lilac
        
        
        "
          >
            So, you want to travel to
          </h5>
          <h1
            className="text-fs-900 leading-lh-4 tablet:text-fs-1100 tablet:leading-lh-5 desktop:text-fs-1100 my-4 font-bellefair uppercase
        
          tablet:my-6 desktop:my-6 desktop:leading-[1.1]
        
        "
          >
            Space
          </h1>

          <p
            className="text-fs-200 leading-lh-1 tablet:text-fs-300 tablet:leading-lh-2 desktop:text-fs-400
        desktop:leading-lh-3 text-lilac
        "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className="   
  
     
  
 
    

      "
        >
          <Link
            href="/"
            className="before:content[''] relative z-30 mb-12 flex h-[9.375rem] w-[9.375rem] items-center justify-center rounded-full
          bg-white text-black 
          after:absolute
          after:z-20
          after:h-[9.375rem] after:w-[9.375rem]
          after:rounded-full 
          after:bg-white
          after:opacity-10
          after:transition-all
          after:duration-500
          after:ease-in-out
          after:hover:scale-150         
          after:focus:scale-150 

          tablet:mb-[5.625rem]         
          tablet:h-[15.125rem] 

          tablet:w-[15.125rem]
          tablet:after:h-[15.125rem] tablet:after:w-[15.125rem] desktop:m-0
          
         

          desktop:h-[17.125rem]

          desktop:w-[17.125rem]



          "
          >
            <span
              className="text-fs-500 tracking-ls-1 tablet:text-fs-700 tablet:tracking-ls-2 desktop:text-fs-700 desktop:tracking-ls-2
          font-bellefair
          uppercase



"
            >
              Explore
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

// desktop:mb-[8.187rem]
//  desktop:mb-[8.187rem]
