import { Avatar } from "@nextui-org/avatar";
import "@/app/globals.css"
export function AvatarComponent() {
  return (
    <div className="animatdBg">
      <Avatar src={"./assets/joshi.jpg"} className="w-[350px] h-[350px] text-large animatedBg" />
    </div>
  )
}