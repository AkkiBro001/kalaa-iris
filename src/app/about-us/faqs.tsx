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
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>
            {faq.desc}
            </AccordionContent>
          </AccordionItem>
          ))
        }
        
        
      </Accordion>
    )
  }
  
