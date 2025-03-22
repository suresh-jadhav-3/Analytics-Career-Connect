import React from 'react';

const Benefit = () => {
  return (
    <div className="bg-gray-100 w-full p-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
          <h5 className="text-xl font-semibold text-blue-700 mb-4">How It Works</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Skill check to start.</li>
            <li>Guided learning.</li>
            <li>Real-world projects.</li>
            <li>Interview prep.</li>
            <li>Connect with partners.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
          <h5 className="text-xl font-semibold text-blue-700 mb-4">Why Choose Us?</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Struggling to get hired? We can help.</li>
            <li>Boost confidence and visibility.</li>
            <li>Fill skill gaps with expert support.</li>
          </ul>
        </div>

        {/* Key Highlights */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:scale-[1.02] transition col-span-2">
          <h5 className="text-xl font-semibold text-blue-700 mb-4">Key Highlights</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">Job Strategy:</span> Apply smarter.</li>
            <li><span className="font-semibold">Profile Boost:</span> Upgrade resume & LinkedIn.</li>
            <li><span className="font-semibold">Hands-On Work:</span> Real projects.</li>
            <li><span className="font-semibold">Mock Interviews:</span> Expert feedback.</li>
            <li><span className="font-semibold">Networking:</span> Build connections.</li>
            <li><span className="font-semibold">Exclusive Jobs:</span> Access hidden opportunities.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Benefit;
