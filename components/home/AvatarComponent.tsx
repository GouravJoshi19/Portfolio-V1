import { Avatar } from "@nextui-org/avatar";
import "@/app/globals.css"
export function AvatarComponent() {
  return (
    <div className="flex flex-row justify-center w-1/2 animatdBg">
      <Avatar src={"./assets/joshi.jpg"} className="min-w-[300px] h-[350px] text-large animatedBg max-lg:w-[300px] 
      h-[300px]" />
    </div>
  )
}