

import { 
    GraduationCap, 
    BriefcaseIcon, 
    Users, 
    BarChart3,
} from 'lucide-react';

export default function Stats() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { icon: GraduationCap, stat: "110+", label: "Students Trained" },
                    { icon: BriefcaseIcon, stat: "90%", label: "Job Success Rate" },
                    { icon: Users, stat: "27+", label: "Partner Companies" },
                    { icon: BarChart3, stat: "10000+", label: "Training Hours" }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}