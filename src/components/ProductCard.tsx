
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  buyLink: string;
}

const ProductCard = ({ name, description, price, image, buyLink }: ProductCardProps) => {
  const handleBuyNow = () => {
    window.open(buyLink, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-sage-200 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-semibold text-forest-800 group-hover:text-forest-600 transition-colors">
            {name}
          </h3>
          <p className="text-sage-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-forest-700">
            {price}
          </span>
          <Button
            onClick={handleBuyNow}
            className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
