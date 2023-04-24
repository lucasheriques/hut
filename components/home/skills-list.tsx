"use client"

import { ReactNode } from "react"
import { JackInTheBox } from "react-awesome-reveal"
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
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function SkillsList() {
  return (
    <JackInTheBox cascade triggerOnce>
      <ul className="flex flex-wrap gap-4 text-3xl">
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
    </JackInTheBox>
  )
}

export default SkillsList
