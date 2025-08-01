import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Star, CheckCircle, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store form data in localStorage to pass to next page
      localStorage.setItem('leadData', JSON.stringify(formData));
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to booking page with form data
      navigate('/book-session', { 
        state: { leadData: formData } 
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <HeroGeometric
        badge="🏆 5-Star Credit Repair Service"
        title1="Fix Your Credit Score"
        title2="Fast & Guaranteed"
        description="Expert credit repair services that get results. Improve your credit score in 30-60 days with our proven 4-step process and 98% success rate."
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white"
            onClick={openForm}
          >
            Get Free Credit Analysis
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-white/50 text-white bg-transparent hover:bg-white hover:text-black"
          >
            <Phone className="w-5 h-5 mr-2" />
            (405) 406-7323
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>100% Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Results in 30-60 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>98% Success Rate</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">150+</div>
            <div className="text-white/60 text-sm">Avg Points Increased</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-white/60 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5000+</div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>
        </div>
      </HeroGeometric>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeForm}
          />
          
          {/* Modal Content */}
          <div className="relative z-50 min-h-screen flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 z-50 p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Form Container */}
            <Card className="w-full max-w-md bg-white border-gray-200 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Credit Analysis
                </CardTitle>
                <p className="text-gray-600">
                  Enter your information to access our exclusive credit improvement video and book your consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Watch Video & Book Session
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to receive marketing communications. You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
