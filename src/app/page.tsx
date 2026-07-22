import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Commitments } from "@/components/sections/commitments";
import { Cta } from "@/components/sections/cta";
import { Expertise } from "@/components/sections/expertise";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Products } from "@/components/sections/products";
import { Stats } from "@/components/sections/stats";
import { WhyVelnex } from "@/components/sections/why-velnex";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Stats />
        <Expertise />
        <Products />
        <WhyVelnex />
        <Method />
        <Commitments />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
