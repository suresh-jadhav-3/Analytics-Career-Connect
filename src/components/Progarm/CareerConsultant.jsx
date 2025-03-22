// import { MessageSquare } from 'lucide-react';

// export function CareerConsultant() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
//       <div className="max-w-3xl mx-auto text-center">
//         <div className="mb-8">
//           <MessageSquare className="w-16 h-16 mx-auto mb-6" />
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Talk to a Career consultant today
//           </h2>
//           <p className="text-lg opacity-90 mb-8">
//             Connect with expert career consultants to explore opportunities, gain clarity, and achieve your professional goals. Take the first step towards building a successful future today!
//           </p>
//           <a 
//             href="/career"
//             className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Talk to a Career Consultant Today
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Connect with expert career consultants to explore opportunities, gain clarity, and achieve your professional goals.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;