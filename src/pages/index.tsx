import Shop from "@/components/sections/shop/Shop";
import Production from "@/components/sections/production/Production";
import Services from "@/components/sections/services/Services";
import About from "@/components/sections/about/About";
import News from "@/components/sections/news/News";

export default function Home() {
  return (
    <>
      <Shop />
      <Production />
      <Services />
      <About />
      <News />
    </>
  );
}
