"use client"

import Image from "next/image"
import waves from "public/about/about-waves.svg"
import bottomIllustration from "public/about/bottom-illustration.webp"
import programmer from "public/about/programmer.webp"
import { Fade, Slide } from "react-awesome-reveal"

function AboutTheHut() {
  return (
    <div className="bg-lightBrown text-gray-900">
      <section className="container min-h-[600px]">
        <div className="flex pb-60 md:space-x-16 md:px-16">
          <div className="hidden flex-1 items-center md:flex">
            <Slide direction="left" triggerOnce>
              <Image src={programmer} alt="about hut" width={500} />
            </Slide>
          </div>
          <div className="flex-1 space-y-8 text-lg md:text-xl">
            <Slide direction="right" triggerOnce>
              <h2 className="text-center font-serif text-3xl font-bold">
                About The Hut
              </h2>
              <p>
                {`Nestled in nature's embrace, Lucas' Hut is my creative sanctuary where ideas bloom and digital masterpieces come to life.
            Surrounded by tranquility, I craft solutions that resonate with real people and their needs.`}
              </p>
              <p>
                {`Driven by the power of software engineering, I cultivate meaningful impact through thoughtful design and meticulous craftsmanship.
            My work is rooted in values of customer obsession, swift execution, exceptional experiences, and unwavering teamwork.`}
              </p>
              <p>
                {`At Lucas' Hut, I forge user interfaces that harmonize with users, spark joy, and deliver delightful experiences.
            Every pixel is a testament to my dedication, weaving engaging and memorable digital tapestries.`}
              </p>
            </Slide>
          </div>
        </div>
        <div className="flex justify-center">
          <Fade triggerOnce>
            <Image
              src={bottomIllustration}
              className="w-full"
              alt="forest illustration"
            />
          </Fade>
        </div>
      </section>
      <div className="pointer-events-none relative -mb-1 -mt-12 w-full select-none">
        <Image src={waves} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default AboutTheHut
