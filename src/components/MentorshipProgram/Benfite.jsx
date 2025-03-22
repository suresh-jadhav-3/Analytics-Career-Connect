import React from 'react';

const Benefit = () => {
  const sections = [
    {
      title: 'Benefits',
      items: [
        'Access expert mentors with industry experience.',
        'Learn with free resources and personalized guidance.',
        'Build a strong project portfolio.',
        'Get job search and interview support.',
      ],
    },
    {
      title: 'Why Choose This Program?',
      items: [
        'Ideal for beginners in data analytics or science.',
        'Learn at your own pace with dedicated mentors.',
        'Receive career guidance to stand out in the job market.',
      ],
    },
    {
      title: 'Key Highlights',
      items: [
        'Skill Assessment to identify strengths.',
        'Structured Curriculum with essential tools.',
        'Real-World Projects for hands-on experience.',
        'Mock Interviews with feedback.',
        'Resume Building & Career Advice.',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 w-full p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:scale-105 relative"
          >
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-2xl animate-pulse"></div>
            <h5 className="text-xl font-semibold text-blue-700 mb-4 relative z-10">{section.title}</h5>
            <ul className="list-disc list-inside text-gray-700 relative z-10">
              {section.items.map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
