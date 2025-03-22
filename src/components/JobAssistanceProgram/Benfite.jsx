import React from 'react';

const Benfite = () => {
    return (
        <div className="bg-gray-100   w-full">
            <div className="  p-8   overflow-hidden transform transition-all duration-500 ">
               




                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='space-y-8'>
                        {/* Benefits Section */}
                        <div className="bg-white rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:scale-[1.02] relative">
                            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-2xl animate-pulse"></div>
                            <h5 className="text-xl font-semibold text-blue-700 mb-4 relative z-10">How It Works</h5>
                            <p className='text-gray-700 relative z-10'>
                            We start with a skill evaluation and guide you through tailored learning resources. After completing our program, you’ll be ready for interviews and equipped with the skills that employers demand. We connect you with industry partners and recruitment agencies for job opportunities.
                            </p>
                            
                        </div>

                        {/* Why Choose Section */}
                        <div className="bg-white rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:scale-[1.02] relative">
                            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-2xl animate-pulse"></div>
                            <h5 className="text-xl font-semibold text-blue-700 mb-4 relative z-10">Why Choose This Program?</h5>
                            <ul className="list-disc list-inside text-gray-700 relative z-10">
                                <li className="mb-2">Tailored for individuals who have the skills but struggle to break into the market.</li>
                                <li className="mb-2">A complete roadmap to boost visibility, confidence, and job offers.</li>
                                <li className="mb-2">Expert advice to address skill gaps and position yourself as a top candidate.</li>
                            </ul>
                        </div>
                    </div>



                    <div className=" bg-white rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:scale-[1.02] relative">
                        <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-2xl animate-pulse"></div>
                        <h5 className="text-xl font-semibold text-blue-700 mb-4 relative z-10">Key Highlights</h5>
                        <ul className="list-disc list-inside text-gray-700 relative z-10">
                            <li className="mb-2">
                                <span className="font-semibold">Job Search Strategy:</span> Learn effective techniques for applying to jobs and getting noticed.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Resume Reviews & LinkedIn Optimization: </span>  Tailor your profile to stand out.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Real-World Projects:</span> Gain hands-on experience solving industry-relevant problems.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Mock Interviews:</span> Sharpen your interview skills with expert-led sessions.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Networking Guidance: </span> Build meaningful connections to expand your opportunities.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Job Leads & Referrals: </span> Gain access to exclusive job opportunities and referrals.
                            </li>
                        </ul>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Benfite;