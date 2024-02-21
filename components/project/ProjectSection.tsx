import ProjectComponent from "./ProjectComponent";

export default function ProjectSection() {
  return (
    <section>
      <div className="w-3/4 min-h-[550px] mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-[#147efb]">
            My Project
          </h1>
          <div>
            <ProjectComponent />
          </div>
        </div>
      </div>
    </section>
  )
}