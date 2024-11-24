import { HeroBanner } from "@/components/herobanner/heroBanner";
import Process from "@/components/process/process";
import Social from "@/components/social/Social";
import Tagline from "@/components/tagline/tagline";

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <Tagline />
      <section className="px-2">
      <Process />
      <Social />
      </section>
    </section>
  );
}
