import { HeroText } from "./HeroText";
import { AvatarComponent } from "./AvatarComponent";
import { TechStack } from "./TechStack";

export function HeroSection() {
  return (
    <section className="w-3/4 flex flex-col justify-evenly min-h-[600px] mt-5">
      <div className="flex flex-row items-center justify-between content-center mb-5 max-lg:flex-col-reverse">
        <HeroText />
        <AvatarComponent />
      </div>
      <div>
        <TechStack />
      </div>
    </section>
  )
}
