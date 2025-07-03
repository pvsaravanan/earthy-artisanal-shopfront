
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Emma Rodriguez",
      review: "The lavender honey soap is absolutely divine! My sensitive skin has never felt better. The natural ingredients really make a difference.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      review: "I was skeptical about natural skincare, but the coffee scrub converted me. My skin feels so smooth and the scent is incredible!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Jessica Thompson",
      review: "Pure Elements has become my go-to for all skincare needs. The quality is outstanding and I love supporting a sustainable brand.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "David Park",
      review: "The tea tree serum cleared up my acne better than any commercial product I've tried. Highly recommend to anyone with problem skin!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Amanda Foster",
      review: "Beautiful packaging, amazing results, and knowing it's all natural makes me feel good about what I'm putting on my skin.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-forest-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto leading-relaxed">
            Real reviews from real customers who have experienced the Pure Elements difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={review.name} className="bg-white border-sage-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sage-700 mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-forest-800">{review.name}</p>
                    <p className="text-sm text-sage-600">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional reviews for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
          {reviews.slice(3).map((review, index) => (
            <Card key={review.name} className="bg-white border-sage-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sage-700 mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-forest-800">{review.name}</p>
                    <p className="text-sm text-sage-600">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
