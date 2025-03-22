// import { Users, Trophy, Network, Search } from 'lucide-react';



// function Feature({ icon, title, description }) {
//   return (
//     <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
//       <div className="text-orange-500 mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-3">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Expert Training",
//       description: "We've helped over 110 aspiring professionals kick-start their careers in data analytics, data science, and tech roles."
//     },
//     {
//       icon: <Trophy className="w-8 h-8" />,
//       title: "Proven Success Rate",
//       description: "Our mentorship and job assistance programs help you gain the necessary skills to land a job in a competitive market."
//     },
//     {
//       icon: <Network className="w-8 h-8" />,
//       title: "Industry Connections",
//       description: "From Healthcare to Retail, Marketing to E-commerce, our students are gaining hands-on experience in various industries."
//     },
//     {
//       icon: <Search className="w-8 h-8" />,
//       title: "Personalized Guidance",
//       description: "Get tailored mentorship and career support to accelerate your growth in data analytics."
//     }
//   ];

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Why Choose Analytics Career Connect?</h2>
//           <p className="text-gray-600">Empower your career with tailored programs and proven success.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature) => (
//             <Feature key={feature.title} {...feature} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






import { Users, Trophy, Network, Search } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Expert Training",
    description: "We've helped over 110 aspiring professionals kick-start their careers in data analytics, data science, and tech roles."
  },
  {
    icon: <Trophy className="w-10 h-10 text-blue-500" />,
    title: "Proven Success Rate",
    description: "Our mentorship and job assistance programs help you gain the necessary skills to land a job in a competitive market."
  },
  {
    icon: <Network className="w-10 h-10 text-blue-500" />,
    title: "Industry Connections",
    description: "From Healthcare to Retail, Marketing to E-commerce, our students are gaining hands-on experience in various industries."
  },
  {
    icon: <Search className="w-10 h-10 text-blue-500" />,
    title: "Personalized Guidance",
    description: "Get tailored mentorship and career support to accelerate your growth in data analytics."
  }
];


export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose Analytics Career Connect?
          </h2>
          <p className="text-gray-600">
            Empower your career with tailored programs and proven success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transition-all transform hover:shadow-2xl hover:translate-y-[-12px] border border-blue-100">
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
