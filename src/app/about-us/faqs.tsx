import { FAQsData } from "@/components/aboutus/aboutUsData"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQs() {
    return (
      <Accordion type="single" collapsible className="w-full mb-12">
        {
          FAQsData.map(faq => (
            <AccordionItem value={faq.id} key={faq.id}>
            <AccordionTrigger className="text-lg">{faq.title}</AccordionTrigger>
            <AccordionContent className="text-base">
            {faq.desc.split('\n').map((desc, index) => <p key={index}>{desc}</p>)}
            </AccordionContent>
          </AccordionItem>
          ))
        }
        
        
      </Accordion>
    )
  }
  
