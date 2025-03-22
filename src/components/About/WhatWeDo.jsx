import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <p className="text-lg text-gray-600">
              At Analytics Career Connect, we empower students, job seekers, and professionals through:
            </p>
            <ul className="space-y-4">
              {[
                'Internship Programs with real-world experience',
                'Job Assistance Programs with tailored support',
                'Mentorship Programs with personalized guidance',
                'Skill Development in data analytics and tech',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105  duration-500"
                >
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group perspective-1000">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:rotate-y-12">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;