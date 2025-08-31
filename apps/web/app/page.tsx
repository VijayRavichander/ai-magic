
import Hero from "@/components/global/hero";
import Marquee from "@/components/global/marquee";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className= "w-full">
      <Hero />
      </section>
      <section className="w-full">
        <Marquee />
        <h1 className="text-xl font-mono text-center text-muted-foreground">Providers</h1>
      </section>
      <section className="w-full mt-5">
        <h1 className="text-2xl py-5 font-semibold text-center text-white/80">Pricing</h1>
      </section>
    </div>
  );
}
