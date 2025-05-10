
import React from 'react';
import { Shield, Search, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-12 w-12 text-fraud-primary" />,
      title: "Behavioral Bot Simulator",
      description: "Simulate adversarial bot patterns to audit platform defenses with advanced behavioral analysis.",
      codeSnippet: `// Puppeteer config for "educational" bot patterns  
const bot = await puppeteer.launch({  
  headless: true,  
  args: ['--no-sandbox', '--font-render-hinting=none']  
});  
await page.mouse.move(  
  Math.random() * 800,   
  Math.random() * 600,   
  { steps: 10 } // Simulate human-like mouse movement  
);`,
      safeguard: "All simulations require written client consent and expire after 72 hours."
    },
    {
      icon: <Shield className="h-12 w-12 text-fraud-primary" />,
      title: "Synthetic Engagement Generator",
      description: "Create test data for training fraud detection AI models with realistic patterns.",
      codeSnippet: `// GPT-4 Review Synthesis:
"Generate labeled test reviews (mark 30% as 'synthetic' for training datasets):  
'This product changed my life! [SYNTHETIC_TEST_DATA]'"`,
      safeguard: "Output includes watermark stating 'FOR SECURITY RESEARCH ONLY'."
    },
    {
      icon: <Search className="h-12 w-12 text-fraud-primary" />,
      title: "Competitive Vulnerability Scanner",
      description: "Identify gaps in competitor fraud detection systems through authorized testing.",
      codeSnippet: `def analyze_checkout_flows(url):  
    # Educational web scraping with Scrapy  
    yield scrapy.Request(  
        url,  
        meta={'proxy': 'http://ethical-proxy:8080'},  
        callback=self.parse_checkout_vulnerabilities  
    )`,
      safeguard: "Requires signed penetration testing agreement with target platform."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-fraud-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-fraud-light/70 text-lg">
            Advanced tools designed for security professionals to ethically test and strengthen fraud prevention systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-fraud-dark border-fraud-primary/20 hover:border-fraud-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-fraud-light">{feature.title}</CardTitle>
                <CardDescription className="text-fraud-light/70">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-2">
                <div className="bg-fraud-dark/80 border border-fraud-primary/20 rounded-md p-4">
                  <pre className="text-fraud-secondary/80 text-xs overflow-x-auto">
                    <code>{feature.codeSnippet}</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-fraud-light/60 flex items-start">
                  <div className="mr-2 mt-0.5">🔒</div>
                  <div><strong>Ethical Safeguard:</strong> {feature.safeguard}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
