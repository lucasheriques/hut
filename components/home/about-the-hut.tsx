import Image from "next/image"
import waves from "public/about/about-waves.svg"
import bottomIllustration from "public/about/bottom-illustration.webp"
import programmer from "public/about/programmer.webp"

function AboutTheHut() {
  return (
    <div className="bg-lightBrown text-gray-900">
      <section className="container min-h-[600px]">
        <div className="flex space-x-16 px-16 pb-60">
          <div className="flex-1">
            <Image src={programmer} alt="about hut" width={500} />
          </div>
          <div className="flex-1 space-y-8 text-xl">
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
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={bottomIllustration}
            width={1000}
            alt="forest illustration"
          />
        </div>
      </section>
      <div className="-mt-8 w-full xl:-mt-16">
        <Image src={waves} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default AboutTheHut
