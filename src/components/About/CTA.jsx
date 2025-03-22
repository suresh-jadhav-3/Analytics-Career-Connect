import React from 'react';
import { ArrowRight } from 'lucide-react';



const CTA = () => {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Start Your Career Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Whether you're a student ready to build your career, a professional looking to upskill, or a business seeking talent, we're here to help.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:translate-x-2"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;