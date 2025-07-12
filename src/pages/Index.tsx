
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGallery />
      <About />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
