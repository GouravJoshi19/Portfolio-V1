import { FloatingComponent } from "./FloatingComponent";

export function TechStack() {
  return (
    <div className="flex flex-row items-center text-xl font-semibold max-lg:flex-col">
      <div className="flex my-5">
        <p className="lg:border-b-0 border-r-1 border-black pe-2 max-lg:border-r-0 border-b-1 pb-2 px-1">Tech Stack</p>
      </div>
      <div className="mx-2">
        <FloatingComponent />
      </div>
    </div>
  )
}