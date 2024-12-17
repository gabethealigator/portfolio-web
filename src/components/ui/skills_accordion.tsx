import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BackEndSkills, EmbeddedSkills, FrontEndSkills } from "../skills_progress";

export function SkillsAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="front-end" className="w-full">
      <AccordionItem value="front-end">
        <AccordionTrigger className="font-semibold text-md">Front-End</AccordionTrigger>
        <FrontEndSkills/>
      </AccordionItem>
      <AccordionItem value="back-end">
        <AccordionTrigger className="font-semibold text-md" >Back-End</AccordionTrigger>
        <BackEndSkills/>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-semibold text-md" >Embedded</AccordionTrigger>
        <AccordionContent>
          <EmbeddedSkills/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}