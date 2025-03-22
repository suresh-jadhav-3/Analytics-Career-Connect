import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Analytics Career Connect?',
    answer: 'A platform bridging skill gaps through tailored mentorship, internships, and job assistance for students and professionals in data, AI, and technology.',
  },
  {
    question: 'Is the internship program free or paid?',
    answer: 'Our internship program is completely free, providing hands-on experience with 60% focus on learning and 40% on real-world tasks.',
  },
  {
    question: 'Is the mentorship program paid?',
    answer: 'Yes, our mentorship program is a practice-oriented approach to tech education, unlike traditional college or institute training. We provide personalized mentorship and continuous support until you secure a job. The program follows a 50-50 payment model, where you pay 50% at the start and the remaining 50% only after securing a job.'
  },
  {
    question: 'Who can benefit from your programs?',
    answer: 'Students, job seekers, and professionals looking to upskill, as well as businesses seeking qualified talent.'
  },
  {
    question: 'How does your job assistance program work?',
    answer: 'Our job assistance services include resume optimization, job application strategies, interview preparation, and regular job updates, with payment required only after you secure a job.'
  },
  {
    question: 'How can I get involved?',
    answer: 'Join our programs, and internships, or connect with us for tailored solutions through our website.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">F.A.Q.</p>
          <h2 className="text-4xl font-bold text-gray-900">Have any Question?</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 shadow-md"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4 opacity-100' : 'h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;