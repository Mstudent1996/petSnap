import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
	 return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
