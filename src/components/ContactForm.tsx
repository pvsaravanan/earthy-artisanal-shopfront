
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-sage-50 to-earth-50">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-sage-200 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-800 mb-4">
                  Thank You!
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  Your message has been sent successfully. We'll get back to you within 24 hours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sage-50 to-earth-50">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-forest-800">
                Get in Touch
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed">
                Have questions about our products or want to learn more about natural skincare? 
                We'd love to hear from you! Send us a message and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Email Us</p>
                  <p className="text-sage-600">hello@pureelements.com</p>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-lg p-6">
                <h3 className="font-serif font-semibold text-forest-800 mb-3">
                  Why Choose Natural Skincare?
                </h3>
                <ul className="space-y-2 text-sage-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-forest-500 rounded-full mr-3"></div>
                    Gentle on sensitive skin
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-forest-500 rounded-full mr-3"></div>
                    No harmful chemicals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-forest-500 rounded-full mr-3"></div>
                    Sustainable and eco-friendly
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-forest-500 rounded-full mr-3"></div>
                    Rich in natural nutrients
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Card className="bg-white border-sage-200 shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-forest-800 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-forest-800 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-forest-800 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-sage-300 focus:border-forest-500 focus:ring-forest-500 resize-none"
                    placeholder="Tell us about your skincare needs or ask any questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
