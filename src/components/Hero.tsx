
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-sage-50 to-earth-50 py-20 lg:py-32">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest-800 leading-tigh">
                Pure, Natural Skincare
              </h1>
              <p className="text-xl text-sage-700 leading-relaxed">
                Handcrafted with love using only the finest natural ingredients. 
                Our artisanal skincare products nourish your skin while respecting the environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts}
                size="lg"
                className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="border-forest-600 text-forest-600 hover:bg-forest-50 px-8 py-3 rounded-lg transition-all duration-300"
              >
                Our Story
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-sage-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-500 rounded-full"></div>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-500 rounded-full"></div>
                <span>Handcrafted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-500 rounded-full"></div>
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop&crop=center"
                alt="Natural skincare products with herbs and botanicals"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-200 rounded-full opacity-60"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-earth-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
