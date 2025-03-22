import React from 'react';

const milestones = [
  {
    title: 'Our Commitment to Innovation',
    description: 'We aim to continue adapting to the latest technological advancements and market demands.',
  },
  {
    title: 'Vision',
    description: 'We envision a future where career opportunities in data-driven fields are accessible to all.',
  },
  {
    title: 'Milestones & Achievements',
    description: 'Trained over 1,000 students, facilitated 150+ placements, and worked with over 50 businesses.',
  },
  {
    title: 'Future Plans',
    description: 'Expanding our reach and enhancing our programs to create more opportunities in tech.',
  },
];

const Journey = () => {
  return (
    <section className="py-20 px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">Our Journey</p>
          <h2 className="text-4xl font-bold text-gray-900">From Vision to Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;