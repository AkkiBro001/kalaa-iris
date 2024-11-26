import SubTitle from "../subTitle/subTitle";
import ProcessWrapper from "./processWrapper";
import { PrintCard } from "./printCard";
import { printData } from "./processData";

export default function ChoosePrint() {
  return (
    <ProcessWrapper>
      <SubTitle text="03. Choose a Print"/>

      <section className="flex flex-wrap gap-6 justify-center">
        {
          printData.map(print => <PrintCard key={print.id} {...print}/>)
        }
        
        
      </section>

      <section className="py-4 px-8 border border-hairlineColor border-l-[6px] border-l-primaryColor">
        <h4 className="text-lg">Sizes:</h4>
        <ul className="list-disc flex flex-wrap gap-8 mt-4 ml-4">
          <li>11.7 X 16.5 in</li>
          <li>8.3 X 11.7 in</li>
          <li>5.8 X 8.3 in</li>
        </ul>
      </section>
      
    </ProcessWrapper>
  )
}
