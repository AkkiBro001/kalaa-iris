import { HeroBanner } from "@/components/herobanner/heroBanner";
import Process from "@/components/process/process";
import Tagline from "@/components/tagline/tagline";

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <Tagline />
      <Process />
    </section>
  );
}
