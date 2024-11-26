import SubTitle from "../subTitle/subTitle";
import EffectCard from "./EffectCard";
import { chooseEffectsData } from "./processData";
import ProcessWrapper from "./processWrapper";

export default function ChooseEffects() {
    
  return (
    <ProcessWrapper className="w-full">
      <SubTitle text="02. Choose a design"/>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1440px] mx-auto">
        {
            chooseEffectsData.map(effect => <EffectCard key={effect.id} {...effect}/>)
        }
      </section>
    </ProcessWrapper>
  )
}
