import AboutTheHut from "@/components/home/about-the-hut"
import Footer from "@/components/home/footer"
import Hero from "@/components/home/hero"
import LatestCrafts from "@/components/home/latest-crafts"
import Skills from "@/components/home/skills"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <LatestCrafts />
      <AboutTheHut />
      <Skills />
      <Footer />
    </>
  )
}
