function LatestArticles() {
  return (
    <section className="relative min-h-[600px] bg-yellowish">
      <h2 className="text-center font-serif text-3xl font-bold text-gray-900">
        Latest Crafts and Articles
      </h2>
      <div className="absolute bottom-0 w-full">
        <img src={"/articles-wave.svg"} alt="wave" />
      </div>
    </section>
  )
}

export default LatestArticles
