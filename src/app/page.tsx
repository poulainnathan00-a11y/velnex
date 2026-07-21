import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Stats } from "@/components/sections/stats";
import { Vision } from "@/components/sections/vision";
import { WhyVelnex } from "@/components/sections/why-velnex";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <WhyVelnex />
        <Products />
        <Vision />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
