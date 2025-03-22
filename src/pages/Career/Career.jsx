import { useState } from 'react';
import { BriefcaseIcon, Users2Icon, GraduationCapIcon, HeartHandshakeIcon, AlertTriangleIcon, UsersIcon, PaletteIcon, BookIcon } from 'lucide-react';

const jobs = [
  {
    title: 'WordPress Developer Intern',
    responsibilities: [
      'Design, develop, and maintain WordPress websites',
      'Optimize website performance and ensure mobile responsiveness',
      'Collaborate with the team to integrate plugins and custom features'
    ],
    requirements: [
      'Basic knowledge of WordPress development',
      'Familiarity with HTML, CSS, and JavaScript',
      'A creative mindset with attention to detail'
    ],
    icon: <BriefcaseIcon className="w-6 h-6" />
  },
  {
    title: 'Data Analyst Intern',
    responsibilities: [
      'Analyze and interpret complex datasets to uncover actionable insights',
      'Create dashboards and visualizations using tools like Excel, Power BI, or Tableau',
      'Assist in preparing reports and presentations'
    ],
    requirements: [
      'Strong analytical skills and attention to detail',
      'Proficiency in Excel and at least one data visualization tool',
      'Basic understanding of SQL is a plus'
    ],
    icon: <Users2Icon className="w-6 h-6" />
  },
  {
    title: 'Product Analyst Intern',
    responsibilities: [
      'Research and analyze user needs to improve product offerings',
      'Support the product lifecycle from ideation to deployment',
      'Track and report on product performance metrics'
    ],
    requirements: [
      'Interest in product development and market research',
      'Strong problem-solving and analytical skills',
      'Basic knowledge of Agile methodologies is a bonus'
    ],
    icon: <GraduationCapIcon className="w-6 h-6" />
  },
  {
    title: 'Graphic Designer Inter',
    responsibilities: [
     'Design marketing materials, social media posts, and presentations',
     'Collaborate with the team to create visually appealing graphics',
     'Ensure brand consistency in all visual outputs'   
    ],
    requirements: [
        'Proficiency in design tools like Adobe Illustrator, Photoshop, or Canva',
        'Creative thinking and strong visual design skills',
        'A portfolio showcasing design work'
    ],
    icon: <PaletteIcon className="w-6 h-6" />
  },
  {
    title:'Human Resource Intern',
    responsibilities: [
        'Assist in recruitment, onboarding, and employee engagement activities',
        'Maintain and update employee records',
        'Support HR team with day-to-day operations'
    ],
    requirements: [
        'Interest in HR and people management',
        'Strong organizational and communication skills',
        'Knowledge of MS Office tools is a plus'
    ],
    icon: <UsersIcon className="w-6 h-6" />
  },
  {
    title:'Founding Team Roles',
    responsibilities: [
        'Work closely with the CEO and founding team on core business strategies',
        'Contribute to decision-making and operational planning',
        'Support key projects across various domains'
    ],
    requirements: [
        'Entrepreneurial mindset and willingness to take ownership',
        'Exceptional problem-solving and multitasking skills',
        'Strong communication and leadership potential'
    ],
    icon: <BriefcaseIcon className="w-6 h-6" />
  },
  {
    title: 'General Internship Opportunities (1st to 4th Year Students)',
    responsibilities: [
        'Work on diverse projects tailored to your interests and skills',
        'Gain exposure to real-world challenges and solutions',
        'Collaborate with experienced professionals to learn and grow'
    ],
    requirements: [
        'Passion for learning and self-improvement',
        'Basic knowledge of your chosen domain',
        'Enthusiasm to contribute to team success'
    ],
    icon: <BookIcon className="w-6 h-6" />
  }
];

function JobCard({ job }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'none',
        transition: 'transform 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          {job.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-600 mb-2">Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-200 hover:scale-105 mt-6 cursor-pointer">
       
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3ObnIjdloTGp3OMRE8EGMDjYQP65zMV1Rnl2IP2OuO9RZbA/viewform"> Apply Now</a>
      </button> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3ObnIjdloTGp3OMRE8EGMDjYQP65zMV1Rnl2IP2OuO9RZbA/viewform" target='blank' className='w-full py-2 px-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transform transition-transform duration-200 hover:scale-105 mt-6'> Apply Now</a>
    </div>
  );
}

function Career() {
  return (
    <div className="mt-18 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Exciting</span> Opportunities Await{' '}
            <span className="text-blue-600">We're</span> Hiring!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're looking for driven, enthusiastic individuals to join us. Explore our exciting
            opportunities and start your journey toward a rewarding career.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Why Join Us */}
        <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-4 mb-6">
            <HeartHandshakeIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Why Join Analytics Career Connect?</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p className="text-lg font-semibold">
              Take the first step towards a successful career.
              Apply now and let's grow together!
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-world learning through live projects</li>
              <li>Mentorship from experienced industry professionals</li>
              <li>Opportunity to showcase your potential and secure a PPO</li>
              <li>Be part of a thriving startup culture where your ideas are valued</li>
            </ul>
          </div>
        </div>

        {/* Warning Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
          <AlertTriangleIcon className="w-6 h-6 text-yellow-600" />
          <p className="text-yellow-800">
            <strong>Important Note:</strong> Beware of fake job scams. Analytics Career Connect does
            not send job offer emails or messages asking for money from applicants.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;