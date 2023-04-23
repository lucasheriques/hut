import Image from "next/image"
import articlesWave from "public/articles-wave.svg"

function LatestArticles() {
  return (
    <div className="bg-yellowish">
      <section className="min-h-[400px] px-4 sm:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900">
          Latest Crafts and Articles
        </h2>
      </section>
      <div className="pointer-events-none w-full select-none">
        <Image src={articlesWave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default LatestArticles
