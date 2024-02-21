import Linkedin from "@/public/assets/linkedin";
import Github from "@/public/assets/Github";

export function HeroText() {
  return (
    <div className="w-3/4 self-start mt-5">
      <h1 className="text-7xl font-bold  text-[#2d2e32]">
        Data Scientist
      </h1>
      <p className="w-3/4 text-2xl text-[#555555] ps-1 my-3">
        Hi, I'm Gourav Joshi. A passionate Data Scientist based in Bikaner, Rajasthan.🐪
      </p>
      <div className="flex flex-row mt-5 gap-2">
        <Linkedin height={30} width={30} color="#000" />
        <Github height={30} width={30} fill="stroke-black stroke-2" />
      </div>
    </div>
  )
}