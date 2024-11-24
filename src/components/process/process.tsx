import Title from "../title/title"
import ChoosePrint from "./choosePrint"
import ProcessCard from "./processCard"
import { processData } from "./processData"
import VisitUs from "./visitUs"
import ChooseEffects from "./chooseEffects"
import { RiLoopLeftFill } from "react-icons/ri";

function Process() {
  return (
    <div className="px-4">
      <Title title="The Process of Our Unique Artwork" icon={RiLoopLeftFill}/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          processData.map(process => <ProcessCard key={process.id} {...process}/>)
        }
        
      </section>
      <VisitUs />
      <ChooseEffects />
      <ChoosePrint />
    </div>
  )
}

export default Process
