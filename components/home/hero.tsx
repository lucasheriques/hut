import Image from "next/image"

import heroHutHq from "../../public/no-background-cozy-hut-hq-light.webp"
import wave from "../../public/wave.svg"

function Hero() {
  return (
    <div className="bg-darkBlue">
      <section className="container flex flex-col justify-between bg-darkBlue text-white lg:-mb-16 2xl:-mb-32">
        <div className="flex justify-around  pl-8 pr-4 pt-2">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full pb-12 text-center">
              <h1 className="pb-2 font-serif text-3xl font-bold">
                Welcome to {"Lucas'"} Hut
              </h1>
              <h2 className="text-xl text-amber-600">
                Crafter of Web Experiences that Spark Joy
              </h2>
            </div>

            <div className="w-full text-center text-xl">
              <p className="pb-4">CMD + K for quick navigation</p>
              <p>
                Articles | Crafts |{" "}
                <a
                  href="https://standardresume.co/r/lucasfaria"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
          <div className="pointer-events-none flex">
            <Image src={heroHutHq} alt="light-bg" width={745} />
          </div>
        </div>
      </section>
      <div className="pointer-events-none w-full select-none">
        <Image src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
