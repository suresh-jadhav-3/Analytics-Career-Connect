import { User2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 p-6">
      <div className="max-w-lg w-full transform hover:scale-105 transition-all duration-500">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden p-6 text-center">
          <div className="flex justify-center items-center bg-blue-500 text-white p-4 rounded-full w-20 h-20 mx-auto shadow-lg">
            <User2 size={40} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">Talk to a Mentor Today</h3>
          <p className="text-gray-600 mt-2">
            Connect with expert mentors who can guide you through your career journey,
            provide personalized advice, and help you gain the skills needed to succeed in
            data analytics, data science, and business intelligence.
          </p>
          <div className="mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQIkRTSGVpCzXVBPlJegXg3chrbWtel-JKPV6RL2GotMwijA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
