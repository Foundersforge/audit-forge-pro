
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-xl bg-gradient-to-br from-fraud-primary to-fraud-secondary p-0.5">
          <div className="bg-fraud-dark rounded-xl p-8 md:p-12 relative z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%20100%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M21.184%2020c.357-.13.72-.264.888-.14%201.56-.39%203.107-.878%204.637-.196%201.53-.316%203.045-.645%204.546-.997V0L0%208v18l21.184-6z%22%20fill%3D%22%230A81AB%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-30 z-0"></div>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-fraud-primary/20 mb-6">
                <Shield className="h-8 w-8 text-fraud-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to strengthen your security posture?</h2>
              <p className="text-lg text-fraud-light/80 mb-8 max-w-2xl mx-auto">
                Start testing your fraud detection systems today with our ethical security simulation platform. Our team of experts is ready to help you identify and address vulnerabilities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-fraud-primary hover:bg-fraud-light font-medium px-8">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
