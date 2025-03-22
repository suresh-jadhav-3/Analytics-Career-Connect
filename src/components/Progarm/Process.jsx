// import { Lightbulb, GraduationCap, Briefcase } from 'lucide-react';

// const steps = [
//   {
//     title: '#1 Enroll in Our Programs',
//     description: 'Our programs are designed to help you achieve your career goals, whether thats advancing in your current field or transitioning to a new one. Our expert instructors and industry-relevant curriculum ensure you gain the skills and knowledge needed to succeed.',
//     icon: Lightbulb
//   },
//   {
//     title: '#2 Learn & Gain Experience',
//     description: 'Engage with expert mentors and work on real-world projects across industries, gaining practical skills that employers value.',
//     icon: GraduationCap
//   },
//   {
//     title: '#3 Land Your Dream Job',
//     description: 'With our job assistance services, including resume optimization and interview prep, we ensure youre ready to impress employers and secure a job.',
//     icon: Briefcase
//   }
// ];

// export function HowItWorks() {
//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-orange-500 font-medium mb-2">How It Works</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Proven 3 Step Process</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((step) => (
//             <div key={step.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <step.icon className="w-12 h-12 text-orange-500 mb-6" />
//               <h3 className="text-xl font-bold mb-4">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from 'react';
import { BookOpen, Users, Briefcase } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: '#1 Enroll in Our Programs',
      description: 'Our programs are designed to help you achieve your career goals, whether that s advancing in your current field or transitioning to a new one.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: '#2 Learn & Gain Experience',
      description: 'Engage with expert mentors and work on real-world projects across industries, gaining practical skills that employers value.'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: '#3 Land Your Dream Job',
      description: 'With our job assistance services, including resume optimization and interview prep, we ensure you re ready to impress employers.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Proven 3 Step Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-50 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;