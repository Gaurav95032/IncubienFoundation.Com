import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const resources = [
    {
        id: "collaborative-tools",
        title: "Collaborative Tools for Startups",
        description:
            "Enhance teamwork and productivity with our curated tools. Streamline processes and foster innovation.",
        image: "/images/collaboration.jpg",
    },
    {
        id: "insightful-articles",
        title: "Insightful Articles for Entrepreneurs",
        description:
            "Explore a range of articles that provide valuable insights and guidance for entrepreneurs.",
        image: "/images/articles.jpg",
    },
    {
        id: "comprehensive-guides",
        title: "Comprehensive Guides for Success",
        description:
            "Our guides offer expert advice to help startups overcome challenges and ensure structured growth.",
        image: "/images/guides.jpg",
    },
];

const ResourcesPage = () => {
    return (
        <div className="bg-blue-50 min-h-screen p-10">
            <motion.h1
                className="text-4xl font-bold text-center text-blue-900 mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Explore Our Startup Resource Collection
            </motion.h1>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <motion.div
                        key={resource.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.8 }}
                    >
                        <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-blue-800">{resource.title}</h2>
                            <p className="text-gray-600 my-4">{resource.description}</p>
                            <Link to={`/resources/${resource.id}`}>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Section: Expert Insights */}
            <motion.div
                className="mt-20 bg-blue-700 text-white rounded-lg p-10 flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="md:w-3/4">
                    <h2 className="text-3xl font-bold">Expert Insights</h2>
                    <p className="text-lg mt-2">
                        Discover articles that empower your startup journey. Learn from industry experts and gain actionable insights.
                    </p>
                </div>
                <Link to="/insights">
                    <button className="mt-4 md:mt-0 border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-700 transition">
                        Explore Resources
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default ResourcesPage;
