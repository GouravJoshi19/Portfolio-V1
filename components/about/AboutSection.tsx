import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-3/4 min-h-[400px] mx-auto my-10">
      <div className="flex flex-row justify-center">
        <div className=" basis-1/2 min-h-[350px] relative border-1 w-1/2 rounded-lg">
          <Image className="rounded-lg" src={'/assets/about/about.webp'} alt="about" fill />
        </div>
        <div className="basis-1/2 ms-5 my-3">
          <h2 className="text-xl font-bold text-[#147efb]">ABOUT ME</h2>
          <h1 className="text-3xl font-semibold">Data Scientist based in bikaner, Rajasthan 🐪</h1>
          <p className="text-lg font-semibold text-[#767676] my-3">Hey, my name is Gorav Joshi, and I'm pursuing the feild of Data Sciene . My passion is to create and develop solution to solve real world problems.
          </p>
          <p className="text-lg font-semibold text-[#767676] my-3">My main stack currently is Python in combination with Scikit-Learn, numpy and pandas.</p>
        </div>
      </div>
    </section>
  )
}