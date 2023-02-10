import React from "react";
import { Logo } from "../../assets/img/img";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import LogoBrend from "../../components/Logos/BrendLogo";
import NewProduct from "../../components/NewProduct/NewProduct";
import Products from "../../components/Products/Product";
import TopProduct from "../../components/TopProduct/TopProduct";
import Users from "../../components/Users/User";

export default function LayoutHome() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Products />
        <TopProduct />
        <NewProduct />
        <About />
        <Users />
        <LogoBrend />
        <Contact></Contact>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
