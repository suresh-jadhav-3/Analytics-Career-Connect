
import React, { useEffect, useRef } from 'react';

const programs = [
  {
    title: 'Mentorship Program',
    description: 'Learn data analytics, SQL, Python, and more with expert guidance tailored to your career goals.',
    link: '/mentorship-program',
  },
  {
    title: 'Job Assistance Program',
    description: 'Prepare for your dream job with resume tips, interview coaching, and career support.',
    link: '/job-assistance-program',
  },
  {
    title: 'Internship Program',
    description: 'Gain real-world experience in data science with hands-on projects and a standout portfolio.',
    link: '/internship-program',
  },
  {
    title: 'Fellowship Program',
    description: 'Collaborate on impactful projects with expert guidance in our flexible Fellowship Program.',
    link: '/contact',
  },
];

export default function Programs() {
  const programsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (programsRef.current) {
      observer.observe(programsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-blue-50 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" >
        <div ref={programsRef} className="text-center mb-16 transition-all duration-1000 ease-out opacity-100 translate-y-0">
          <h2 className="text-4xl font-bold text-blue-900">Build Your Career with Our Tailored Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{program.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{program.description}</p>
              <a
                href={program.link}
                className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold transition-transform duration-300 hover:translate-x-2"
              >
                Learn More
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
