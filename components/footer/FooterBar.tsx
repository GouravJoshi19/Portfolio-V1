import Github from "@/public/assets/Github"
import Linkedin from "@/public/assets/linkedin"

export default function FooterBar() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="bg-[#2d2e32] text-[#fff]">
      <div className="min-h-[140px] flex flex-row justify-center items-center">
        <div className="flex flex-row w-3/4 justify-between">
          <p className="text-xl font-semibold">Copyright © {year}. All rights are reserved</p>
          <div className="flex flex-row gap-5">
            <Linkedin width={30} height={30} color="#fff" />
            <Github height={30} width={30} fill="stroke-white stroke-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}