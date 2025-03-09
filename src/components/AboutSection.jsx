import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
            {/* Left - Image with Animation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <img
                    src="https://media.istockphoto.com/id/1207552906/photo/group-of-people-solving-a-puzzle.jpg?s=612x612&w=0&k=20&c=3dZm-99MT8erUFRpnPUBt2hKRCKJw8qTeM36OLXS-j0="
                    alt="About Us"
                    className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-full hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Right - Info with Animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-1/2 text-center md:text-left"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                    About <span className="text-blue-500">Us</span>
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                    We are committed to empowering entrepreneurs with the tools, mentorship, and
                    resources they need to turn their ideas into successful businesses. Our community
                    thrives on innovation, collaboration, and growth.
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                    Whether you're just starting out or looking to scale your business, we're here to
                    support you every step of the way.
                </p>
                <div className="flex justify-center md:justify-start">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
