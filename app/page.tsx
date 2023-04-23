import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import AboutTheHut from "@/components/home/about-the-hut"
import Hero from "@/components/home/hero"
import LatestArticles from "@/components/home/latest-articles"
import Skills from "@/components/home/skills"

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <LatestArticles />
      <AboutTheHut />
      <Skills />
      {/* <section className="container relative grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section> */}
    </div>
  )
}
