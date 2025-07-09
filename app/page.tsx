import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
            rightHalf={
                <div className="flex flex-col justify-end">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                      Game Information & Details (wiki)
                  </h2>
                  <p className="text-xl font-light">
                      Goalbound offers a thrilling soccer experience with exciting gameplay, diverse characters, and constant updates, keeping players engaged and always looking forward to more.
                  </p>
                </div>
              }
            leftHalf={<Accordion />}
        />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
