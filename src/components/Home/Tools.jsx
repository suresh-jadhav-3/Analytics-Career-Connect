
import React, { useEffect, useState } from 'react';


const tools = [
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/1.png',
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/2.png',
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/3.png',
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/4.png',
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/5.png',
  'https://analyticscareerconnect.com/wp-content/uploads/2025/01/6.png',
];

export default function Tools() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className=" py-24 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-blue-400 font-semibold text-lg mb-4 uppercase tracking-widest">What we do</p>
          <h2 className="text-5xl font-extrabold text-blue-600 drop-shadow-lg">
            Get Started! Create and Analyze Insightful Dashboards
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out delay-${index * 200} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
                <img
                  src={tool}
                  alt={`Analytics Tool ${index + 1}`}
                  className="w-full h-auto rounded-lg drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
