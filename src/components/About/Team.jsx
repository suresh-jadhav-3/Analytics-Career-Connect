import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Wasim Patwari',
    role: 'Founder & CEO',
    // image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400',
    image: 'https://analyticscareerconnect.com/wp-content/uploads/2025/01/1.webp',
    linkedin: 'https://www.linkedin.com/in/wasim-patwari-analysts/',
    bio: 'Leading innovation in tech education and career development.'
  },
  {
    name: 'Suma M B',
    role: 'Internship Department Head',
    // image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400',
    image: 'https://analyticscareerconnect.com/wp-content/uploads/2025/01/2.webp',
    linkedin: 'https://www.linkedin.com/in/suma-m-b-b68842175/',
    bio: 'Expert in creating impactful internship experiences.'
  },
  {
    name: 'Anchal Kapse',
    role: 'Team Lead of Internship Department',
    // image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400',
    image: 'https://analyticscareerconnect.com/wp-content/uploads/2025/01/4.webp',
    linkedin: 'https://www.linkedin.com/in/anchal-kapse/',
    bio: 'Dedicated to nurturing emerging tech talent.'
  },
  {
    name: 'Varsha Kanade',
    role: 'Head of Graphics and Marketing',
    // image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400',
    image: 'https://analyticscareerconnect.com/wp-content/uploads/2025/01/3.webp',
    linkedin: 'https://www.linkedin.com/in/varsha-kanade-2192a5101/',
    bio: 'Creative visionary driving brand success.'
  },
  {
    name: 'Vanshika Sanghai',
    role: 'Team Lead of Graphics and Marketing',
    // image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400',
    image: 'https://analyticscareerconnect.com/wp-content/uploads/2025/01/5.webp',
    linkedin: 'https://www.linkedin.com/in/vanshika-sanghai-910b33253/',
    bio: 'Innovative marketing strategist and design expert.'
  }
];

const Team = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">Our Team</p>
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;