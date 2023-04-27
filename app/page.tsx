import AboutTheHut from "@/components/home/about-the-hut"
import Footer from "@/components/home/footer"
import Hero from "@/components/home/hero"
import LatestCrafts from "@/components/home/latest-crafts"
import Skills from "@/components/home/skills"

export default function IndexPage() {
  return (
    <div className="selection:bg-amber-400 selection:text-gray-900">
      <Hero />
      <LatestCrafts />
      <AboutTheHut />
      <Skills />
      <Footer />
    </div>
  )
}
