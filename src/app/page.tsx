import Image from "next/image";
import Hero from "@/components/hero";
import Product from "@/components/product";
import Pgripe from "@/components/pgripe";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Hero/>
      <Product/>
      <Pgripe/>
      <Footer/>
    </>
  );
}
