
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    'Mentorship Program',
    'Internship Program',
    'Job Assistance Program',
    'Fellowship Program',
    'Consultation'
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your <span className="text-blue-600">Career with Our</span>
              <br />
              Tailored <span className="text-blue-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600">
              Analytics Career Connect equips you with practical skills, industry knowledge, and career support in data analytics, science, and technology.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <button  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;