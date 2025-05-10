
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-fraud-dark border-b border-fraud-primary/20 py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-fraud-secondary mr-2" />
          <span className="text-xl font-bold text-white">FraudAudit Pro</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-fraud-light hover:text-fraud-secondary transition-colors">Features</a>
          <a href="#how-it-works" className="text-fraud-light hover:text-fraud-secondary transition-colors">How It Works</a>
          <a href="#pricing" className="text-fraud-light hover:text-fraud-secondary transition-colors">Pricing</a>
          <Button variant="outline" className="border-fraud-secondary text-fraud-secondary hover:bg-fraud-secondary/10">
            Log In
          </Button>
          <Button className="bg-fraud-primary text-white hover:bg-fraud-primary/90">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-fraud-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-fraud-dark border-t border-fraud-primary/20 mt-4 p-4">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-fraud-light hover:text-fraud-secondary transition-colors">Features</a>
            <a href="#how-it-works" className="text-fraud-light hover:text-fraud-secondary transition-colors">How It Works</a>
            <a href="#pricing" className="text-fraud-light hover:text-fraud-secondary transition-colors">Pricing</a>
            <Button variant="outline" className="border-fraud-secondary text-fraud-secondary w-full">
              Log In
            </Button>
            <Button className="bg-fraud-primary text-white hover:bg-fraud-primary/90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
