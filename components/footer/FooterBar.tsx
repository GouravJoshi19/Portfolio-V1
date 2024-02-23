import Github from "@/public/assets/Github"
import Linkedin from "@/public/assets/linkedin"
import { Link } from "@nextui-org/react"

export default function FooterBar() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="bg-[#2d2e32] text-[#fff]">
      <div className="min-h-[140px] flex flex-row justify-center items-center max-lg:flex-row-reverse">
        <div className="flex flex-row w-3/4 justify-between max-lg:flex-col items-center gap-2 text-center">
          <p className="text-xl font-semibold">Copyright © {year}. All rights are reserved</p>
          <div className="flex flex-row gap-5">
            <Link isExternal href="https://www.linkedin.com/in/gourav-joshi-8749a02b6/">
              <Linkedin width={30} height={30} color="#fff" />
            </Link>
            <Link isExternal href="https://github.com/GouravJoshi19">
              <Github height={30} width={30} fill="stroke-white stroke-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}