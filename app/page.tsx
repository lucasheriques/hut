import AboutTheHut from "@/components/home/about-the-hut"
import Footer from "@/components/home/footer"
import Hero from "@/components/home/hero"
import LatestArticles from "@/components/home/latest-articles"
import Skills from "@/components/home/skills"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <LatestArticles />
      <AboutTheHut />
      <Skills />
      <Footer />
    </>
  )
}
