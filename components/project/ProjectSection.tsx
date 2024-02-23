import ProjectComponent from "./ProjectComponent";

export default function ProjectSection() {
  return (
    <section>
      <div className="w-3/4 min-h-[550px] mx-auto py-auto">
        <div>
          <h1 className="text-2xl font-bold text-[#147efb]">
            My Projects
          </h1>
          <div className="max-lg:grid grid-rows-1">
            <ProjectComponent />
          </div>
        </div>
      </div>
    </section>
  )
}