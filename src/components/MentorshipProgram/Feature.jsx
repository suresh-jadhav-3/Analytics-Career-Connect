import { CheckCircle } from "lucide-react";

const Feature = () => {
  const features = [
    "Data Analytics Tools (Excel, SQL, Python)",
    "BI Tools (Power BI, Tableau)",
    "Data Visualization",
    "Real-World Case Studies",
    "Generative AI",
    "Job Readiness Skills"
  ];

  const overviewPoints = [
    "Mentorship from industry experts",
    "Real-world projects",
    "Personalized career support",
    "Flexible learning schedule"
  ];

  const howItWorksPoints = [
    "One-on-one mentorship",
    "Project feedback",
    "Career coaching",
    "Industry insights"
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
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Mentorship Program</h1>
      <h2 className="text-2xl text-gray-700 mb-4 text-center">Your Data Career, Supercharged</h2>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-8">
        Gain skills, tackle projects, and receive personalized mentorship to thrive in data-driven roles.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <Section title="What You’ll Learn" points={features} />
        <Section title="Overview" points={overviewPoints} />
        <Section title="How It Works" points={howItWorksPoints} />
      </div>
    </div>
  );
};

export default Feature;
