import Title from "../title/title"
import ProcessCard from "./processCard"
import { processData } from "./processData"

function Process() {
  return (
    <div className="p-4 mb-8">
      <Title title="The Process of Our Unique Artwork"/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          processData.map(process => <ProcessCard key={process.id} {...process}/>)
        }
        
      </section>
    </div>
  )
}

export default Process
