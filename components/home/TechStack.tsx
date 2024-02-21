import { FloatingComponent } from "./FloatingComponent";

export function TechStack() {
  return (
    <div className="flex flex-row items-center text-xl font-semibold">
      <div className="flex">
        <p className="border-r-1 border-black pe-2">Tech Stack</p>
      </div>
      <div className="mx-2">
        <FloatingComponent />
      </div>
    </div>
  )
}