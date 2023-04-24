import Image from "next/image"
import heroHutHq from "public/no-background-cozy-hut-hq-light.webp"
import wave from "public/wave.svg"

function Hero() {
  return (
    <div className="bg-darkBlue">
      <section className="container flex flex-col justify-between bg-darkBlue py-8 text-white lg:-mb-16 2xl:-mb-32">
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full pb-12 text-center">
              <h1 className="pb-2 font-serif text-xl font-bold md:text-2xl lg:text-3xl">
                Welcome to {"Lucas'"} Hut
              </h1>
              <h2 className="text-lg text-amber-600 lg:text-xl">
                Crafter of Web Experiences that Spark Joy
              </h2>
            </div>

            <div className="w-full text-center lg:text-xl">
              <nav
                role="navigation"
                className="flex items-center justify-center gap-4"
              >
                <a>Articles</a>
                <a>Crafts</a>
                <a
                  href="https://standardresume.co/r/lucasfaria"
                  target="_blank"
                  rel="noreferrer"
                  className="block cursor-pointer"
                >
                  Resume
                </a>
              </nav>
            </div>
          </div>
          <div className="pointer-events-none hidden lg:flex">
            <Image
              src={heroHutHq}
              alt="a small hut in the woods"
              width={745}
              priority
            />
          </div>
        </div>
      </section>
      <div className="pointer-events-none -mb-1 w-full select-none">
        <div className="mx-auto flex w-2/3 lg:hidden">
          <Image src={heroHutHq} alt="light-bg" priority />
        </div>
        <Image src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
