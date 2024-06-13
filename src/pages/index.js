import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-red-500 lg:text-green-500 xl:text-blue-500">
      <div className="text bg-home-banner-one bg-center bg-cover bg-no-repeat w-full h-99-0"></div>
      {/* <div className="flex justify-start items-center flex-col">
        <div className="relative w-full">
          <div className="w-full ">
            <img src="/images/home-banner-one.png" alt=""></img>
          </div>
          <div className="flex flex-col justify-start items-center font-bold text-2-5 text-center text-white w-full pt-8-0 absolute top-0-1">
            Everyone's <br></br> Favorite EX.Zone
          </div>
        </div>
      </div> */}
    </div>
  );
}
