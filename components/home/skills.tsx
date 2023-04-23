import Image from "next/image"
import articlesWave from "public/articles-wave.svg"
import firstImage from "public/skills/skills-1-light.webp"
import secondImage from "public/skills/skills-2-light.webp"

function Skills() {
  return (
    <div className="bg-brown px-8 pb-64 text-aboutTextColor">
      <section className="container flex border-2 border-aboutBorderColor px-0">
        <div className="w-full">
          <Image src={firstImage} width={452} alt="bunch of leaves" />
        </div>
        <div className="mx-16 flex min-h-[400px] flex-col items-center justify-center space-y-8 text-lg">
          <h2 className="text-center font-serif text-3xl font-bold">
            Skills & Expertise
          </h2>
          <p>
            {`In the verdant landscape of my expertise, I have nurtured a proficiency in React and TypeScript, sculpting seamless web applications with a keen eye for detail.
          My enthusiasm for serverless technology blossoms within the limitless potential of modern cloud solutions, fostering scalable and efficient creations.`}
          </p>
          <p>
            {`My passion transcends the boundaries of technology, and I'm always eager to explore uncharted territories.
            Recently, I've embarked on an AI adventure, immersing myself in a realm of learning and sharing the gems of wisdom I uncover along the way.`}
          </p>
        </div>
        <div className="w-full">
          <Image src={secondImage} width={452} alt="bunch of leaves" />
        </div>
      </section>
    </div>
  )
}

export default Skills
