import React from "react";
import Hero from "./home/hero";
import Navbar from "@/components/layouts/home-nav";
import HomeFooter from "@/components/layouts/home-footer";
import How from "./home/how";
import Testimonial from "./home/testimonial";
import Faq from "./home/faq";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="how">
        <How />
      </section>

      <section id="">
        <Testimonial />
      </section>
      <section id="faq">
        <Faq />
      </section>

      <section id="contact"></section>

      <HomeFooter />
    </>
  );
};

export default Home;
