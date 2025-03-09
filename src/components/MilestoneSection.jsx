import React from "react";
import { motion } from "framer-motion";

const milestones = [
    {
        number: "50+",
        title: "Startups",
        description:
            "Successful startups have emerged from our incubator, showcasing the effectiveness of our support.",
    },
    {
        number: "20+",
        title: "Mentors",
        description:
            "Our dedicated mentors are committed to guiding entrepreneurs through their journey, ensuring they have the tools they need to succeed.",
    },
    {
        number: "500+",
        title: "Resources",
        description:
            "We offer a wealth of resources, including articles and tools, to assist startups in their development.",
    },
    {
        number: "10+",
        title: "Networking Events",
        description:
            "Our networking events connect entrepreneurs with industry experts, fostering collaboration and innovation.",
    },
    {
        number: "100+",
        title: "Workshops Conducted",
        description:
            "We organize hands-on workshops to help entrepreneurs gain practical skills in various business domains.",
    },
    {
        number: "95%",
        title: "Success Rate",
        description:
            "Our incubator has a proven track record, with a majority of our startups achieving long-term success.",
    },
];

const MilestoneSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center text-blue-900 mb-12"
            >
                Our <span className="text-blue-500">Milestones</span>
            </motion.h2>

            {/* Grid Layout with Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform border border-gray-200 relative overflow-hidden"
                    >
                        {/* Background Gradient Animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                        <h3 className="text-5xl font-extrabold text-blue-600">{milestone.number}</h3>
                        <h4 className="text-xl font-semibold text-blue-900 mt-2">{milestone.title}</h4>
                        <p className="text-gray-600 mt-3">{milestone.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MilestoneSection;
