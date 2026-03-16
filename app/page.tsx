import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeStats from "@/components/HomeStats";
import AboutPreview from "@/components/AboutPreview";
import HomeProjects from "@/components/HomeProjects";
import HomeInvestor from "@/components/HomeInvestor";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <HomeStats />
      <AboutPreview />
      <HomeProjects />
      <HomeInvestor />
      <ContactCTA />
      <Footer />
    </main>
  );
}