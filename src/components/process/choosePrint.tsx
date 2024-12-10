import SubTitle from "../subTitle/subTitle";
import ProcessWrapper from "./processWrapper";
import { PrintCard } from "./printCard";
import { printData } from "./processData";


export default function ChoosePrint() {
  return (
    <ProcessWrapper className="mb-10">
      <SubTitle text="03. Choose a Print"/>

      <section className="flex flex-wrap gap-6 justify-center">
        {
          printData.map(print => <PrintCard key={print.id} {...print}/>)
        }
        
        
      </section>

     
      
    </ProcessWrapper>
  )
}
