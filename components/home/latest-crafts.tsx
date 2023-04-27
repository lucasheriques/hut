import Image from "next/image"
import articlesWave from "public/articles-wave.svg"

function LatestCrafts() {
  return (
    <div className="bg-yellowish text-gray-900">
      <section className="min-h-[400px] px-4 text-center sm:px-8">
        <h2 className="text-center font-serif text-xl font-bold md:text-2xl lg:text-3xl">
          Latest Crafts
        </h2>
        <p>
          <i>comming soon</i>
        </p>
      </section>
      <div className="w-full select-none">
        <Image src={articlesWave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default LatestCrafts
