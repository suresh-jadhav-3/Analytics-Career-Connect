
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-24 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-blue-400 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl transform transition hover:scale-105 duration-500">
          <div>
            <QuoteIcon className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-lg" />
          </div>
          <blockquote className="text-3xl font-semibold text-white leading-relaxed">
            "Data is the new oil, but like oil, it must be refined to be valuable."
          </blockquote>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <img 
              src="https://analyticscareerconnect.com/wp-content/uploads/2025/01/C2.jpg"
              alt="Clive Humby"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <div className="text-left">
              <div className="font-semibold text-xl text-white">Clive Humby</div>
              <div className="text-blue-200">Data Science Pioneer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
