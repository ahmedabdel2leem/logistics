import Header from './_components/Sections/Header/Header';
import About from "./_components/Sections/About/About";
import Services from "./_components/Sections/Services/Services";
import Regoins from "./_components/Sections/Regoins/Regoins";
import News from "./_components/Sections/News/News";
import Compliance from "./_components/Sections/Compliance/Compliance";
import Contact from './_components/Sections/Contact/Contact';
import Footer from "./_components/Sections/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="wrapper relative ">
        <Navbar />
        < Header />
        <About />
        <Services />
        <Regoins />
        <News />
        <Compliance />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
