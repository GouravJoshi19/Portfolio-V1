import Linkedin from "@/public/assets/linkedin";
import Github from "@/public/assets/Github";
import { Link } from "@nextui-org/react";

export function HeroText() {
  return (
    <div className="w-3/4 self-start mt-10 max-lg:flex flex-col items-center max-lg:border-none w-full self-center">
      <h1 className="text-6xl font-bold text-[#2d2e32] max-lg:text-center lg:text-start">
        Data Scientist
      </h1>
      <p className="w-3/4 text-2xl text-start text-[#555555] ps-1 py-5 max-lg:text-center w-full">
        Hi, I am Gourav Joshi. A passionate Data Scientist based in Bikaner, Rajasthan.🐪
      </p>
      <div className="flex flex-row mt-5 gap-2">
        <Link isExternal href="#">
          <Linkedin  height={30} width={30} color="#000" />
        </Link>
        <Link isExternal href="https://github.com/GouravJoshi19">
          <Github height={30} width={30} fill="stroke-black stroke-2" />
        </Link>
      </div>
    </div>
  )
}