
import Add from "@/components/Add/Add";
import Card from "@/components/Cards/Card";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import Section from "@/components/Section/Section";
import Cummunity from "@/components/cummunity/Cummunity";
import TestiMonials from "@/components/testimonials/TestiMonials";



export default function Home() {
  return (
    <>
      <NavBar />
      <Section />
      <Card />
      <Add />
      <TestiMonials />
      <Cummunity/>
      <Footer />
    </>

  );
}
