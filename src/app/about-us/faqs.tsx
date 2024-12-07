import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQs() {
    return (
      <Accordion type="single" collapsible className="w-full mb-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, inventore eligendi dicta atque, eos debitis fugit iure magnam neque cum sit iste nam laborum eaque.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum suscipit accusamus quas animi tempore laborum sit doloribus aliquid, consectetur itaque pariatur eaque neque quibusdam quasi et perspiciatis nisi hic? Nobis adipisci vel numquam praesentium saepe ducimus cum, impedit aliquam officia esse! In modi quod est!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, reprehenderit? Esse nulla ad expedita eligendi consequatur, ab provident in et!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
