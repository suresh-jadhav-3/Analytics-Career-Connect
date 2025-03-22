import { CheckCircle } from "lucide-react";

const Feature = () => {
  const features = [
    "Improve your resume and ace interviews",
    "Step-by-step learning plan",
    "Hands-on projects",
    "Career support for 3-4 months",
  ];

  const overviewPoints = [
    "Improve your resume and ace interview",
    "Practice with mock interviews",
    "Smart job search techniques",
    "Access exclusive job opening",
    "Support until you get hired"
  ];

  const howItWorksPoints = [
    "Get a data job in 45-60 days",
    "Personalized resume tips",
    "Expert job search support",
    "Mock interviews to build confidence"
  ];

  const SuccessRate = [
    "95% of participants get jobs in 45-60 days",
    "Proven strategies that work",
    "Career support every step of the way"
  ]

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
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Job Assistance Program</h1>
      <h2 className="text-2xl text-gray-700 mb-4 text-center">From Skilled to Hired: Land Your Dream Job in 45-90 Day</h2>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-8">
      Personalized guidance for career transitions in data. Receive structured learning, real-world projects, and career support over 3-4 months
      </p>

      <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <Section title="What You’ll Learn" points={features} />
        <Section title="Overview" points={overviewPoints} />
        <Section title="How It Works" points={howItWorksPoints} />
        <Section title="Success Rate" points={SuccessRate} />
      </div>
    </div>
  );
};

export default Feature;
