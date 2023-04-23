import { ReactNode } from "react"
import Image from "next/image"
import firstImagehq from "public/skills/skills-1-light-hq.webp"
import secondImagehq from "public/skills/skills-2-light-hq.webp"
import {
  SiAmazondynamodb,
  SiAwsamplify,
  SiAwslambda,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type SkillsWithTooltipsProps = {
  icon: ReactNode
  name: string
}

function SkillsWithTooltips({ icon, name }: SkillsWithTooltipsProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function Skills() {
  return (
    <div className="bg-brown px-8 pb-32 text-aboutTextColor">
      <section className="container flex border-aboutBorderColor px-0  lg:border-2">
        <div className="mt-9 hidden w-full lg:block">
          <Image src={firstImagehq} height={550} alt="bunch of leaves" />
        </div>
        <div className="mx-8 flex flex-1 flex-col justify-center space-y-8 lg:flex xl:min-w-[500px] xl:text-xl">
          <h2 className="font-serif text-3xl font-bold">Skills & Expertise</h2>
          <p>
            {`
          In the ever-evolving forest of web development, I thrive as an adaptable engineer, crafting seamless digital experiences with nature's finesse.
          My expertise blossoms across a wide spectrum of technologies, and my curiosity propels me towards the uncharted realms of knowledge.
          With each new endeavor, I cultivate my skills and embrace the beauty of continuous growth.`}
          </p>
          <p>
            {`Below you will find a list of my favorite tools and technologies, but I'm always eager to learn new things and expand my skillset.`}
          </p>

          <ul className="flex gap-x-4 text-2xl">
            <li>
              <SkillsWithTooltips icon={<SiHtml5 />} name="HTML5" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiCss3 />} name="CSS" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiJavascript />} name="JavaScript" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiTypescript />} name="TypeScript" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiReact />} name="React" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiNodedotjs />} name="Node.js" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiGraphql />} name="GraphQL" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiPrisma />} name="Prisma" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiMysql />} name="MySQL" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiAmazondynamodb />} name="DynamoDB" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiAwsamplify />} name="Amplify" />
            </li>
            <li>
              <SkillsWithTooltips icon={<SiAwslambda />} name="Lambda" />
            </li>
          </ul>
        </div>
        <div className="-mt-9 hidden w-full lg:block">
          <Image src={secondImagehq} className="w-full" alt="bunch of leaves" />
        </div>
      </section>
    </div>
  )
}

export default Skills
