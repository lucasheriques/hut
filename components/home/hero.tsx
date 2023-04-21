import Image from "next/image"

import heroHut from "../../public/hero-hut.webp"
import heroHutHq from "../../public/no-background-cozy-hut-hq-light.webp"
import wave from "../../public/wave.svg"

function Hero() {
  return (
    <section className="relative flex flex-col justify-between bg-darkBlue text-white lg:min-h-[600px]">
      <div className="flex justify-around  pl-8 pr-4 pt-2">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full pb-12 text-center">
            <h1 className="pb-2 text-3xl">Welcome to {"Lucas'"} Hut</h1>
            <h2 className="text-xl text-amber-600">
              Crafter of Web Experiences that Spark Joy
            </h2>
          </div>

          <div className="w-full text-center">
            <p className="pb-4">CMD + K for quick navigation</p>
            <p>Articles | Crafts | Resume | Contact</p>
          </div>
        </div>
        <div className="flex">
          <Image src={heroHutHq} alt="light-bg" width={745} />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <img src={"/wave.svg"} alt="wave" />
      </div>
    </section>
  )
}

export default Hero
