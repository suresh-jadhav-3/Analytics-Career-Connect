
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Elevate Your Career: Yes!<br />
              80% faster with an analytics career
            </h2>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Join Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          
          {/* Image Section */}
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940"
              alt="Analytics Career"
              className="rounded-2xl shadow-2xl w-full transition-transform duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
