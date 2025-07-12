
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-forest-700">
              Pure Elements
            </h1>
            <span className="ml-2 text-sm text-sage-600 hidden sm:block">
              Handcrafted Natural Skincare
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-forest-700 hover:text-forest-500 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-forest-700 hover:text-forest-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-forest-700 hover:text-forest-500 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-forest-700 hover:text-forest-500 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-forest-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-forest-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-forest-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-forest-700 hover:text-forest-500 transition-colors w-full text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-forest-700 hover:text-forest-500 transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block px-3 py-2 text-forest-700 hover:text-forest-500 transition-colors w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-forest-700 hover:text-forest-500 transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
