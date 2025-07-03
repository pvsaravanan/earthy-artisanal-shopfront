
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const products = [
    {
      name: "Lavender Honey Soap",
      description: "Gentle cleansing bar infused with organic lavender essential oil and raw honey. Perfect for sensitive skin with natural moisturizing properties.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example1"
    },
    {
      name: "Vanilla Mint Lip Balm",
      description: "Nourishing lip treatment with organic shea butter, coconut oil, and natural vanilla mint essence. Keeps lips soft and protected all day.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example2"
    },
    {
      name: "Coffee Sugar Scrub",
      description: "Invigorating body exfoliant made with organic coffee grounds, brown sugar, and coconut oil. Removes dead skin while deeply moisturizing.",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example3"
    },
    {
      name: "Rose Clay Face Mask",
      description: "Purifying clay mask enriched with rose petals and hibiscus. Draws out impurities while leaving skin soft, smooth, and radiant.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example4"
    },
    {
      name: "Chamomile Body Butter",
      description: "Rich, creamy moisturizer infused with chamomile extract and natural oils. Deeply hydrates and soothes dry or irritated skin.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop&crop=center",
      buyLink: "https://buy.stripe.com/example5"
    },
    {
      name: "Tea Tree Acne Serum",
      description: "Targeted treatment with tea tree oil and witch hazel. Helps clear blemishes naturally while balancing skin's natural oils.",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center",
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
