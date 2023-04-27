"use client"

import Image from "next/image"
import Link from "next/link"
import { GithubIcon, Linkedin, TwitterIcon } from "lucide-react"
import heroHutHq from "public/no-background-cozy-hut-hq-light.webp"
import wave from "public/wave.svg"
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

import { Icons } from "../icons"

function Hero() {
  return (
    <div className="bg-darkBlue">
      <section className="container flex flex-col justify-between bg-darkBlue py-8 text-white lg:-mb-16 2xl:-mb-32">
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col text-center">
              <h1 className="font-serif text-xl font-bold md:text-2xl lg:text-3xl">
                Welcome to {"Lucas'"} Hut
              </h1>
              <h2 className="pb-4 text-lg text-amber-600 lg:text-xl">
                Crafter of Web Experiences that Spark Joy
              </h2>
              <nav
                role="navigation"
                className="flex flex-col justify-center gap-4"
              >
                <div className="flex justify-center gap-4">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        }),
                        "text-lg"
                      )}
                    >
                      <SiGithub />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        }),
                        "text-lg"
                      )}
                    >
                      <SiTwitter />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        }),
                        "text-lg"
                      )}
                    >
                      <SiLinkedin />
                      <span className="sr-only">LinkedIn</span>
                    </div>
                  </Link>
                </div>
              </nav>
            </div>

            <div className="w-full text-center lg:text-xl">
              <div>
                <Link
                  href="https://standardresume.co/r/lucasfaria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "text-lg"
                    )}
                  >
                    Resume
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden select-none lg:flex">
            <Image
              src={heroHutHq}
              alt="a small hut in the woods"
              width={745}
              priority
            />
          </div>
        </div>
      </section>
      <div className="-mb-1 w-full select-none">
        <div className="mx-auto flex w-2/3 lg:hidden">
          <Image src={heroHutHq} alt="light-bg" priority />
        </div>
        <Image src={wave} alt="wave" className="w-full" priority />
      </div>
    </div>
  )
}

export default Hero
