import React from "react";
import { FaLightbulb, FaChalkboardTeacher, FaNetworkWired, FaLaptopCode } from "react-icons/fa";

const visionItems = [
    {
        title: "Innovation Grant",
        description:
            "We offer an innovation grant that enables you to develop your idea and make it a reality.",
        icon: <FaLightbulb className="text-blue-600 text-5xl mx-auto" />,
    },
    {
        title: "Dedicated Mentoring",
        description:
            "1:1 hands-on mentoring to help you achieve strategic clarity and receive focused guidance.",
        icon: <FaChalkboardTeacher className="text-blue-600 text-5xl mx-auto" />,
    },
    {
        title: "Sector Connect",
        description:
            "Connect with a peer group and a network that supports and helps you grow your startup.",
        icon: <FaNetworkWired className="text-blue-600 text-5xl mx-auto" />,
    },
    {
        title: "Bootcamps",
        description:
            "Face-to-face & virtual immersion events for learning, collaboration, and networking.",
        icon: <FaLaptopCode className="text-blue-600 text-5xl mx-auto" />,
    },
];

const VisionSection = () => {
    return (
        <section className="bg-blue-100 py-16 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
                <em>Turn your vision into reality through</em>
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {visionItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition"
                    >
                        {item.icon}
                        <h3 className="text-xl font-semibold text-blue-900 mt-4">{item.title}</h3>
                        <p className="text-gray-600 mt-3">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisionSection;
