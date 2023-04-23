import Image from "next/image"
import articlesWave from "public/articles-wave.svg"

function LatestArticles() {
  return (
    <div className="bg-yellowish">
      <section className="min-h-[400px]">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900">
          Latest Crafts and Articles
        </h2>
      </section>
      <div className="w-full">
        <Image src={articlesWave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default LatestArticles
