// // import { CheckCircle } from "lucide-react";

// // const Feature = () => {
// //   return (
// //     <div className="p-10 min-h-screen flex flex-col items-center">
// //       <h1 className="text-4xl font-bold text-blue-700 mb-6">Mentorship Program</h1>

// //       <h2 className="text-2xl mb-4">Personalized Guidance for Your Data-Driven Career</h2>

// //       <p className="max-w-2xl text-center text-lg mb-8">
// //         This program offers structured learning, real-world projects, and career support for those transitioning into data careers.
// //       </p>

// //       <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
// //         <div className="bg-blue-100 text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
// //           <h3 className="text-xl font-semibold mb-4 text-blue-700">What You’ll Learn</h3>
// //           <ul className="space-y-2">
// //             {["Data Analytics Tools (Excel, SQL, Python)", "BI Tools (Power BI, Tableau)", "Data Visualization", "Real-World Business Case Studies", "Generative AI", "Job Readiness Skills"].map((item, index) => (
// //               <li key={index} className="flex items-center gap-2 text-lg">
// //                 <CheckCircle className="text-blue-500" /> {item}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="bg-blue-100 text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
// //           <h3 className="text-xl font-semibold mb-4 text-blue-700">What It Is</h3>
// //           <p className="text-lg">
// //             Our Mentorship Program is for anyone looking to build strong skills in data analytics, data science, and business intelligence. You’ll be matched with experienced mentors who offer personalized guidance, real-world projects, and career coaching to help you succeed in the tech industry.
// //           </p>
// //         </div>

// //         <div className="bg-blue-100 text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
// //         <h3 className="text-xl font-semibold mb-4 text-blue-700">How It Works</h3>
// //         <p className="text-lg">
// //           Work one-on-one with a mentor, get hands-on experience, feedback on projects, and industry insights to build confidence and tackle real-world challenges.
// //         </p>
// //       </div>
// //       </div>

// //       {/* <div className="bg-blue-100 text-gray-900 shadow-lg rounded-2xl p-6">
// //         <h3 className="text-xl font-semibold mb-4 text-blue-700">How It Works</h3>
// //         <p className="text-lg">
// //           Work one-on-one with a mentor, get hands-on experience, feedback on projects, and industry insights to build confidence and tackle real-world challenges.
// //         </p>
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default Feature;




// import { CheckCircle } from "lucide-react";

// const Feature = () => {
//   return (
//     <div className="p-10 min-h-screen flex flex-col items-center  bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-800 mb-6">Intership Assistance Program</h1>

//       <h2 className="text-2xl text-gray-700 mb-4 text-center">Learn by Doing: Build Real-World Skills for Your Career.</h2>

//       <p className="max-w-2xl text-center text-lg text-gray-600 mb-8">
//         Gain hands-on experience through 3-month (Data Analytics) or 6-month (Data Science) internships. Receive mentorship and work on real-world projects.
//       </p>

//        <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition border-t-4 border-blue-600">
//           <h3 className="text-xl font-semibold mb-4 text-blue-700">What You’ll Learn</h3>
//           <ul className="space-y-3">
//             <p>Our Internship Program offers hands-on experience in key industries, where you’ll work with real-world projects in areas such as:</p>
//             {["Healthcare", "E-commerce", "Retail", "Marketing", "Real Estate", "Finance"].map((item, index) => (
//               <li key={index} className="flex items-center gap-2 text-lg text-gray-700">
//                 <CheckCircle className="text-green-500" /> {item}
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition border-t-4 border-blue-600">
//           <h3 className="text-xl font-semibold mb-4 text-blue-700">What It Is</h3>
//           <p className="text-lg text-gray-700">
//           Our Internship Program is designed to make you job-ready by providing hands-on experience in data analytics, data science, and business intelligence. Over 3 to 6 months, you’ll work on live projects from various industries, gaining the practical skills and exposure needed to succeed in the tech space.
//           </p>
//         </div>

//         <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-105 transition border-t-4 border-blue-600">
//           <h3 className="text-xl font-semibold mb-4 text-blue-700">Success Rate</h3>
//           <p className="text-lg text-gray-700">
//           In our Internship Program, you’ll dive into real-world projects across multiple industries, gaining practical experience and job-ready skills. Over the course of 3 to 6 months, you’ll not only develop technical expertise but also build a strong portfolio with mentorship, helping you bridge the gap between learning and actual work. By the end of the program, you’ll be fully prepared to enter the workforce with the skills employers are looking for.
//           </p>
//         </div>
//       </div> 
     
        
     
//     </div>
//   );
// };

// export default Feature;



import { CheckCircle, Info, Star } from "lucide-react";

const Feature = () => {
 
  const features = [
    "Hands-on experience across industries like Healthcare, E-commerce, Retail, Marketing, Real Estate, and Finance.",
        "Develop practical skills in data analytics, data science, and business intelligence.",
        "Work on real-world projects with industry mentors."
  ];
  const ProgramOverview = [
    "3-month (Data Analytics) or 6-month (Data Science) internship options.",
    "Live project experience to build a robust portfolio.",
    "Industry-specific exposure to ensure career readiness."
  ];
  const HowItWork = [
    "Gain job-ready skills with mentorship from industry experts.",
    "Enhance your resume with practical project experience.",
    "Confidently transition from learning to a successful career."
    ];



  const Section = ({ title, points }) => (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition border-t-4 border-blue-600">
      <h3 className="text-xl font-semibold mb-4 text-blue-700">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2 text-lg text-gray-700">
            <CheckCircle className="text-green-500" /> {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="p-10 min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Internship Assistance Program</h1>
      <h2 className="text-2xl text-gray-700 mb-4 text-center">Gain Real-World Skills for Your Career</h2>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-8">
        Get hands-on experience through 3-month (Data Analytics) or 6-month (Data Science) internships with expert mentorship.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
       
        <Section title="What You’ll Learn" points={features} />
        <Section title="Program Overview" points={ProgramOverview} />
        <Section title="How It Works" points={HowItWork} />
      </div>
    </div>
  );
};

export default Feature;
