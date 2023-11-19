import Image from "next/image";
import logo from "../../public/starter-code/assets/shared/logo.svg";

const Navbar = () => {
  return (
    <nav className="pt-8 pl-12 bg-transparent text-white font-barlow flex justify-between items-center ">
      <Image src={logo} alt="logo" />
      <div className=" flex items-center">
        <div className="h-[1px] w-[473px] bg-white opacity-25 -mr-6 z-10"></div>
        <div className="  pl-20 w-[700px] flex bg-[#FFFFFF01] backdrop-blur-2xl gap-6">
          <p className="py-6 border-b-2">
            <span className="font-bold mr-1">00</span> Home
          </p>
          <p className="py-6">
            <span className="font-bold mr-1">01</span> Destination
          </p>
          <p className="py-6">
            <span className="font-bold mr-1">02</span> Crew
          </p>
          <p className="py-6">
            <span className="font-bold mr-1">03</span> Technology
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
