import React from "react";
import Hero from "./home/hero";
import Navbar from "@/components/layouts/home-nav";
import HomeFooter from "@/components/layouts/home-footer";
import How from "./home/how";

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

      <section id=""></section>
      <section id="faq"></section>

      <section id="contact"></section>

      <HomeFooter />
    </>
  );
};

export default Home;
