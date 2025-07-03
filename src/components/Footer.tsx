
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-800 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Pure Elements</h3>
            <p className="text-forest-200 leading-relaxed">
              Handcrafted natural skincare products that nourish your skin 
              while respecting the environment.
            </p>
            <div className="flex space-x-4 text-sm text-forest-300">
              <span>100% Natural</span>
              <span>•</span>
              <span>Handcrafted</span>
              <span>•</span>
              <span>Eco-Friendly</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-forest-100">Quick Links</h4>
            <div className="space-y-2 text-forest-200">
              <div><a href="#products" className="hover:text-white transition-colors">Products</a></div>
              <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
              <div><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></div>
              <div><a href="#contact" className="hover:text-white transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-forest-100">Contact Info</h4>
            <div className="space-y-2 text-forest-200">
              <div>hello@pureelements.com</div>
              <div>Follow us for skincare tips and updates</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-forest-300">
          <p>&copy; {currentYear} Pure Elements. All rights reserved. Made with ❤️ for your skin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
