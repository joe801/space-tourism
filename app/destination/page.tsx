import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { destination } from "../utils/utils";
import jsonData from "../../public/starter-code/data.json"


const Destination = () => {
  
  return (
    <section className="h-screen w-full bg-dest-mobile bg-no-repeat bg-center bg-cover text-white">
      <Navbar />
      <div>
        <h4>
          <span>01</span> PICK YOUR DESTINATION
        </h4>
        <div>
          {/* {jsonData.destinations.map((dest, index) => (
            <div key={index}>
              <Image src={dest.images.png} alt={dest.name} width={200} height={300}/>
            </div>
          ))} */}
          {destination.map((dest, index)=>(
            <div key={index}>
              {/* <Image src={dest.images.webp} alt={dest.name} width={500} height={500}/> */}
              <div>
                {index == 0 && <h4>{dest.name}</h4>}
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
