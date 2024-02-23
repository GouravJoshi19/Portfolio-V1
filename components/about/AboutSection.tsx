import { Image } from "@nextui-org/react";

export function AboutSection() {
  return (
    <section className="w-3/4 min-h-[450px] mx-auto max-lg:py-5">
      <div className="flex flex-row justify-between items-center max-lg:flex-col">
        <div className="basis-2/5 rounded-lg ">
          <Image src="./assets/about/about.webp" alt="about" className="min-h-[350px] w-full max-lg:min-h-[150px] min-w-full" isZoomed />
        </div>
        <div className="basis-1/2 mt-5 text-start  max-lg:flex flex-col items-center w-full p-2 text-center">
          <h2 className="text-xl font-bold text-[#147efb]">ABOUT ME</h2>
          <h1 className="text-3xl font-semibold mt-2 max-lg:text-center">Data Scientist based in bikaner, Rajasthan 🐪</h1>
          <p className="text-lg font-semibold text-[#767676] my-3 max-lg:text-center">Hey, my name is Gourav Joshi, and I'm pursuing the feild of Data Science.My passion is to create and develop solution to solve real world problems with
            data science.
          </p>
          <p className="text-lg font-semibold text-[#767676] max-lg:text-center">My main stack currently is Python in combination with Scikit-Learn, numpy and pandas.</p>
        </div>
      </div>
    </section >
  )
}