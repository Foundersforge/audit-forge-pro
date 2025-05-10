
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Platform Assessment",
      description: "Our experts analyze your security architecture to identify potential vulnerabilities.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Simulation Design",
      description: "We develop custom threat models based on your specific business needs and risk profile.",
      icon: "📝"
    },
    {
      number: "03",
      title: "Controlled Testing",
      description: "Execute ethical simulations in sandbox environments with full transparency and monitoring.",
      icon: "🧪"
    },
    {
      number: "04",
      title: "Security Hardening",
      description: "Receive actionable recommendations to strengthen your fraud detection systems.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative code-pattern">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fraud-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How FraudAudit Pro Works</h2>
          <p className="text-fraud-light/70 text-lg">
            A systematic approach to strengthen your security posture through ethical testing
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-fraud-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-fraud-primary/10 text-fraud-secondary mb-4">
                    <span className="text-sm font-medium">Step {step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-fraud-light">{step.title}</h3>
                  <p className="text-fraud-light/70">{step.description}</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-fraud-primary to-fraud-secondary p-0.5">
                    <div className="absolute inset-0.5 bg-fraud-dark rounded-full flex items-center justify-center">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fraud-primary to-fraud-secondary opacity-20 blur-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
