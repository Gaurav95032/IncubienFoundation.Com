import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center px-6 sm:px-12"
            style={{
                backgroundImage:
                    "url('https://media.istockphoto.com/id/509473150/photo/startup-programming-team.jpg?s=612x612&w=0&k=20&c=yTbP4rLw3b62MoTV_dqlCauQ1MGT0VpKblrd-sDgyqw=')",
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-blue-900/60"></div>

            {/* Hero Content with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative max-w-4xl text-center text-white"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Empower Your <span className="text-blue-300">Startup Journey</span>
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg text-blue-200 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    At LaunchPad, we transform innovative ideas into thriving businesses. Our tailored mentorship, extensive resources,
                    and vibrant networking opportunities are designed to accelerate your success. Join us and take the first step towards
                    realizing your entrepreneurial dreams.
                </motion.p>

                {/* Buttons with Hover Effects */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition w-full sm:w-auto"
                    >
                        Learn More
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition w-full sm:w-auto"
                    >
                        Contact Us
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
