import Image from "next/image"
import bottomIllustration from "public/about/bottom-illustration.webp"
import programmer from "public/about/programmer.webp"

function AboutTheHut() {
  return (
    <section className="relative min-h-[600px] bg-lightBrown text-gray-900">
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
            My work is rooted in values like customer obsession, swift execution, exceptional user experience, and unwavering teamwork.`}
          </p>
          <p>
            {`At Lucas' Hut, I forge user interfaces that harmonize with users, spark joy, and deliver delightful experiences.
            Every pixel is a testament to my dedication, weaving engaging and memorable digital tapestries.`}
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-28">
        <Image
          src={bottomIllustration}
          width={1000}
          alt="forest illustration"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <img src={"/about/about-waves.svg"} alt="wave" />
      </div>
    </section>
  )
}

export default AboutTheHut
