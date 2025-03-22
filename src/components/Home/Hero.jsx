// import { ArrowRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="flex-1 space-y-6">
//             <h1 className="text-4xl md:text-5xl font-bold">
//               <span className="text-orange-500">Empowering </span>
//               with Excellence in Data
//               <span className="text-orange-500 block mt-2">
//                 Analytics & Innovation
//               </span>
//             </h1>
//             <p className="text-lg italic text-gray-600">
//               Learn, Grow, and Transform with Real-World Skills and Expert Guidance.
//             </p>
//             <a 
//               href="#contact"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
//             >
//               Contact Us
//               <ArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//           <div className="flex-1">
//             <img 
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940"
//               alt="Data Analytics"
//               className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { ArrowRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="flex-1 space-y-6">
//             <h1 className="text-4xl md:text-5xl font-bold">
//               <span className="text-orange-500">Empowering </span>
//               with Excellence in Data
//               <span className="text-orange-500 block mt-2">
//                 Analytics & Innovation
//               </span>
//             </h1>
//             <p className="text-lg italic text-gray-600">
//               Learn, Grow, and Transform with Real-World Skills and Expert Guidance.
//             </p>
//             <a 
//               href="#contact"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
//             >
//               Contact Us
//               <ArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//           <div className="flex-1">
//             <img 
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940"
//               alt="Data Analytics"
//               className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from 'react';
// import img from '../../assets/DataAnalytics.jpg'

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     if (heroRef.current) {
//       heroRef.current.style.opacity = '1';
//       heroRef.current.style.transform = 'translateY(0)';
//     }
//   }, []);

//   return (
//     <div className="relative mt-10 overflow-hidden bg-white">
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-50" />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div
//             ref={heroRef}
//             className="opacity-0 transform translate-y-4 transition-all duration-1000 ease-out"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform">
//                 Empowering
//               </span>{' '}
//               with Excellence in{' '}
//               <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform">
//                 Data Analytics & Innovation
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 italic">
//               Learn, Grow, and Transform with Real-World Skills and Expert Guidance.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 hover:shadow-lg group"
//             >
//               Get Started Today
//               <svg
//                 className="ml-2 h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </a>
//           </div>
//           <div className="relative transform translate-x-4 opacity-0 animate-slide-in">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
//               <img
//                 src={img}
//                 alt="Data Analytics"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


























import React, { useEffect, useRef } from 'react';
import img from '../../assets/HeroImg.jpg';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '1';
      heroRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div className="relative mt-10 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={heroRef}
            className="opacity-0 transform translate-y-4 transition-all duration-1000 "
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-500 inline-block transform hover:scale-105 transition-transform">
                Empowering
              </span>{' '}
              with Excellence in{' '}
              <span className="text-blue-500 inline-block transform hover:scale-105 transition-transform">
                Data Analytics & Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 italic">
              Learn, Grow, and Transform with Real-World Skills and Expert Guidance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-lg group"
            >
              Get Started Today
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </a>
          </div>
          <div className="relative transform translate-x-4 opacity-0 animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={img}
                alt="Data Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}