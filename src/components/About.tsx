
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-earth-50 to-sage-50">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-forest-800">
                Our Story & Mission
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed">
                Pure Elements was born from a passion for natural wellness and sustainable living. 
                As a certified herbalist and skincare enthusiast, I discovered the transformative power 
                of handmade products using pure, natural ingredients.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed">
                Every product in our collection is carefully crafted in small batches to ensure the 
                highest quality. We source our ingredients from local organic farms and ethical 
                suppliers, supporting both your skin's health and our planet's wellbeing.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed">
                Our mission is simple: to provide you with effective, natural skincare that nourishes 
                your skin without compromising on sustainability or quality. Each purchase supports 
                artisanal craftsmanship and environmental responsibility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <div className="text-2xl font-bold text-forest-700 mb-1">5+</div>
                <div className="text-sm text-sage-600">Years Crafting</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <div className="text-2xl font-bold text-forest-700 mb-1">100%</div>
                <div className="text-sm text-sage-600">Natural Ingredients</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <div className="text-2xl font-bold text-forest-700 mb-1">500+</div>
                <div className="text-sm text-sage-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <div className="text-2xl font-bold text-forest-700 mb-1">0</div>
                <div className="text-sm text-sage-600">Harmful Chemicals</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop&crop=center"
                alt="Sarah crafting natural skincare products in her workshop"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-200 rounded-full opacity-40"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-earth-300 rounded-full opacity-50"></div>
            
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="font-serif font-semibold text-forest-800">Sarah Mitchell</p>
              <p className="text-sm text-sage-600">Founder & Herbalist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
