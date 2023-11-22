import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-center h-screen w-full bg-cover text-white">
      <Navbar />
      <div className=" w-9/12 mx-auto mt-8 md:mt-[120px] lg:mt-[100px] text-center lg:text-start">
        <h2 className=" text-secondary font-barlow text-base md:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <div className="flex flex-col gap-10 md:gap-40 lg:gap-10 lg:flex-row justify-center md:justify-between items-center">
          <div className="w-[302px] md:w-[445px]">
            <h1 className=" font-bellefair text-[80px] md:text-[150px]">
              SPACE
            </h1>
            <p className="text-secondary font-barlow text-[15px] md:text-lg">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=" w-[140px] md:w-[274px] h-[140px] md:h-[274px] bg-white rounded-full flex items-center justify-center">
            <h3 className=" text-primary font-bellefair text-[20px] md:text-[32px]">
              EXPLORE
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
