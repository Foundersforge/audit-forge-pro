
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden grid-pattern">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-fraud-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fraud-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-fraud-primary/10 text-fraud-secondary mb-6">
            <ShieldCheck className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Ethical Security Testing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Stress-Test Your Fraud Detection with 
            <span className="text-fraud-secondary"> AI-Powered Simulations</span>
          </h1>
          
          <p className="text-xl text-fraud-light/80 mb-8 md:mb-12">
            FraudAudit Pro empowers businesses to strengthen their security posture 
            through ethical threat simulations and penetration testing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-fraud-primary hover:bg-fraud-primary/90 text-white font-medium px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-fraud-primary/20 text-fraud-light hover:bg-fraud-primary/10">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fraud-dark"></div>
              <div className="relative bg-fraud-dark/70 backdrop-blur-sm border border-fraud-primary/20 rounded-lg p-1 overflow-hidden">
                <pre className="text-fraud-light/70 text-xs md:text-sm rounded-md overflow-x-auto scrollbar-thin scrollbar-thumb-fraud-primary/20 scrollbar-track-transparent p-4">
                  <code>{`// Behavioral Bot Simulator - Ethical Testing Mode
const bot = await puppeteer.launch({  
  headless: true,  
  args: ['--no-sandbox', '--ethical-mode=true']  
});  

// Simulate human-like mouse movement patterns
await page.mouse.move(  
  Math.random() * 800,   
  Math.random() * 600,   
  { steps: 10 } 
);

// All simulations tagged and expire after 72 hours
await testFramework.setMetadata({
  purpose: "SECURITY_TESTING",
  expires_at: new Date(Date.now() + 1000 * 60 * 60 * 72)
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
