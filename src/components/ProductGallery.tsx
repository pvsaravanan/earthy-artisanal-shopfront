import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const products = [
    {
      name: "Lavender Honey Soap",
      description: "Gentle cleansing bar infused with organic lavender essential oil and raw honey. Perfect for sensitive skin with natural moisturizing properties.",
      price: "₹899",
      image: "/lovable-uploads/e5b5a890-febf-48d5-8269-4036a6586c5b.png",
      buyLink: "https://buy.stripe.com/example1"
    },
    {
      name: "Vanilla Mint Lip Balm",
      description: "Nourishing lip treatment with organic shea butter, coconut oil, and natural vanilla mint essence. Keeps lips soft and protected all day.",
      price: "₹649",
      image: "/lovable-uploads/0eab4a05-6d0d-49b5-ab7d-105eba4e711e.png",
      buyLink: "https://buy.stripe.com/example2"
    },
    {
      name: "Coffee Sugar Scrub",
      description: "Invigorating body exfoliant made with organic coffee grounds, brown sugar, and coconut oil. Removes dead skin while deeply moisturizing.",
      price: "₹1,299",
      image: "/lovable-uploads/7c44a706-4f43-4b7b-a41d-a95a15880c59.png",
      buyLink: "https://buy.stripe.com/example3"
    },
    {
      name: "Rose Clay Face Mask",
      description: "Purifying clay mask enriched with rose petals and hibiscus. Draws out impurities while leaving skin soft, smooth, and radiant.",
      price: "₹1,699",
      image: "/lovable-uploads/e3eac100-dbbe-496e-8eb2-4ca5bac94298.png",
      buyLink: "https://buy.stripe.com/example4"
    },
    {
      name: "Chamomile Body Butter",
      description: "Rich, creamy moisturizer infused with chamomile extract and natural oils. Deeply hydrates and soothes dry or irritated skin.",
      price: "₹1,549",
      image: "/lovable-uploads/79ef286e-f02f-4280-8b6b-2c76ac621053.png",
      buyLink: "https://buy.stripe.com/example5"
    },
    {
      name: "Tea Tree Acne Serum",
      description: "Targeted treatment with tea tree oil and witch hazel. Helps clear blemishes naturally while balancing skin's natural oils.",
      price: "₹1,149",
      image: "/lovable-uploads/c2ff6dd2-4dbe-47fc-81a4-45ed59a7cc09.png",
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
