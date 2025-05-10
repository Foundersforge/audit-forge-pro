
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "For small businesses starting to implement security testing",
      features: [
        "10k simulation requests/month",
        "Basic vulnerability reports",
        "Behavioral bot simulator",
        "Email support",
        "Test data generation (limited)"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "For growing businesses with advanced security needs",
      features: [
        "50k simulation requests/month",
        "Advanced vulnerability analysis",
        "Custom bot personas",
        "Priority support",
        "Full test data generation",
        "Compliance documentation"
      ],
      cta: "Try Pro Plan",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "per month",
      description: "For organizations requiring comprehensive security testing",
      features: [
        "Unlimited simulation requests",
        "Custom bot personas",
        "Full API access for SOC teams",
        "Dedicated support manager",
        "Custom compliance reporting",
        "Penetration testing support"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-fraud-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fraud-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-fraud-light/70 text-lg">
            Choose the plan that fits your security testing needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-lg overflow-hidden ${plan.highlighted ? 'transform md:-translate-y-4' : ''}`}>
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-fraud-primary to-fraud-secondary"></div>
              )}
              <div className={`h-full flex flex-col border ${plan.highlighted ? 'border-fraud-primary/40 bg-fraud-primary/5' : 'border-fraud-primary/20 bg-fraud-dark'} rounded-lg p-6 transition-all duration-300 hover:border-fraud-primary/40`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-fraud-light">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-fraud-light">{plan.price}</span>
                    <span className="text-fraud-light/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-fraud-light/70">{plan.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-fraud-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-fraud-light/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-fraud-primary hover:bg-fraud-primary/90' : 'bg-fraud-dark hover:bg-fraud-primary/10'} ${!plan.highlighted && 'border border-fraud-primary/40'}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-fraud-light/60 text-sm">
            All plans include our ethical compliance dashboard and auto-expiry for simulated data after 72 hours.
            Contact us for custom enterprise solutions or specialized security testing requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
