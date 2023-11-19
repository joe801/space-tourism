import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" bg-home-desktop bg-no-repeat bg-center h-screen w-full text-white">
      <Navbar />
      <div className=" w-9/12 mx-auto mt-[100px]">
        <h2 className=" text-secondary font-barlow text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <div className="flex justify-between items-center">
          <div className="w-[445px]">
            <h1 className=" font-bellefair text-[150px]">SPACE</h1>
            <p className="text-secondary font-barlow text-lg">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="w-[274px] h-[274px] bg-white rounded-full flex items-center justify-center">
            <h3 className=" text-primary font-bellefair text-[32px]">
              EXPLORE
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
