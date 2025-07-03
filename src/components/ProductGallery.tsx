
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const products = [
    {
      name: "Lavender Honey Soap",
      description: "Gentle cleansing bar infused with organic lavender essential oil and raw honey. Perfect for sensitive skin with natural moisturizing properties.",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1584305574647-0cc949423759?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example1"
    },
    {
      name: "Vanilla Mint Lip Balm",
      description: "Nourishing lip treatment with organic shea butter, coconut oil, and natural vanilla mint essence. Keeps lips soft and protected all day.",
      price: "₹649",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example2"
    },
    {
      name: "Coffee Sugar Scrub",
      description: "Invigorating body exfoliant made with organic coffee grounds, brown sugar, and coconut oil. Removes dead skin while deeply moisturizing.",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example3"
    },
    {
      name: "Rose Clay Face Mask",
      description: "Purifying clay mask enriched with rose petals and hibiscus. Draws out impurities while leaving skin soft, smooth, and radiant.",
      price: "₹1,699",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example4"
    },
    {
      name: "Chamomile Body Butter",
      description: "Rich, creamy moisturizer infused with chamomile extract and natural oils. Deeply hydrates and soothes dry or irritated skin.",
      price: "₹1,549",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example5"
    },
    {
      name: "Tea Tree Acne Serum",
      description: "Targeted treatment with tea tree oil and witch hazel. Helps clear blemishes naturally while balancing skin's natural oils.",
      price: "₹1,149",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4d736d4?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example6"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-forest-800 mb-4">
            Our Handcrafted Collection
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto leading-relaxed">
            Each product is lovingly made in small batches using only the finest natural ingredients. 
            Discover the perfect addition to your skincare routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
