import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section with Enhanced Background */}
      <div className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=2000&q=80" 
            alt="Business communication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shape <span className="text-blue-300">Your Future</span> with opportunities that <span className="text-blue-300">inspire.</span>
            </h1>
            <p className="text-xl text-blue-100">
              We would love to speak with you. Feel free to reach out using the below details.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Phone',
              details: ['+91 96071-57409', '+91 94038-12709 (WhatsApp)'],
              image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80'
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Address',
              details: ['Pune, MH, India'],
              image: 'https://images.unsplash.com/photo-1626250389421-c0ef1782d2ef?auto=format&fit=crop&w=800&q=80'
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: 'Opening Hours',
              details: ['Mon-Fri 9:00AM - 5:00PM', 'Sat-Sun 10:00AM - 6:00PM'],
              image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up overflow-hidden relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 text-blue-500">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
                </div>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-blue-100 mb-8">
              Ready to take the next step in your career journey? We're here to help you achieve your goals and unlock new opportunities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-300" />
                <p>contact@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-300" />
                <p>+91 96071-57409</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-300" />
                <p>Pune, MH, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-slide-up relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all flex items-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2000&q=80" 
              alt="Newsletter background" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest insights, trends, and opportunities delivered straight to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center pb-16">
          <p className="text-gray-600 mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-6">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-all p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;