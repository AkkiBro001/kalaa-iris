import { HeroBanner } from "@/components/herobanner/heroBanner";
import ChoosePrint from "@/components/process/choosePrint";
import Process from "@/components/process/process";
import VisitUs from "@/components/process/visitUs";
import ChooseEffects from "@/components/process/chooseEffects";
// import Social from "@/components/social/Social";



export default function Home() {
  return (
    <section>
      <HeroBanner />
     
      <section className="">
      <Process />
      <VisitUs />
      <ChooseEffects />
      <ChoosePrint />
      {/* <Social /> */}
      </section>
    </section>
  );
}
