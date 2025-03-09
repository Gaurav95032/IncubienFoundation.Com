import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const experts = [
    {
        name: "Alice Johnson",
        role: "Co-Founder & CEO",
        description: "Alice has over 10 years of experience in the startup ecosystem, having successfully launched multiple tech companies.",
        img: "https://source.unsplash.com/300x300/?woman,ceo",
        linkedin: "#",
        twitter: "#",
        github: "#",
    },
    {
        name: "Mark Smith",
        role: "Mentorship Coordinator",
        description: "Mark is passionate about helping entrepreneurs succeed and has mentored numerous startups through their early stages.",
        img: "https://source.unsplash.com/300x300/?man,business",
        linkedin: "#",
        twitter: "#",
        github: "#",
    },
    {
        name: "Sarah Lee",
        role: "Resource Manager",
        description: "With a background in business development, Sarah curates valuable resources to support startups in their growth.",
        img: "https://source.unsplash.com/300x300/?woman,professional",
        linkedin: "#",
        twitter: "#",
        github: "#",
    },
    {
        name: "David Kim",
        role: "Marketing Specialist",
        description: "David brings expertise in digital marketing strategies to help startups reach their target audience effectively.",
        img: "https://source.unsplash.com/300x300/?man,marketing",
        linkedin: "#",
        twitter: "#",
        github: "#",
    }
];

export default function OurExperts() {
    return (
        <div className="bg-blue-50 py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Our Experts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {experts.map((expert, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={expert.img} alt={expert.name} className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500" />
                        <h3 className="text-xl font-bold text-blue-800">{expert.name}</h3>
                        <p className="text-sm text-gray-600 font-medium">{expert.role}</p>
                        <p className="mt-2 text-gray-700">{expert.description}</p>
                        <div className="mt-4 flex space-x-3">
                            <a href={expert.linkedin} target="_blank" className="text-blue-600 hover:text-blue-800 text-xl"><FaLinkedin /></a>
                            <a href={expert.twitter} target="_blank" className="text-blue-400 hover:text-blue-600 text-xl"><FaTwitter /></a>
                            <a href={expert.github} target="_blank" className="text-gray-800 hover:text-black text-xl"><FaGithub /></a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
