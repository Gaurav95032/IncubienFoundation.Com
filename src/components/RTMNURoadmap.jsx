import { motion } from "framer-motion";
import { FaUniversity, FaBook, FaTools, FaFlask, FaBriefcase, FaUsers } from "react-icons/fa";

const roadmapStages = [
    { title: "Enrollment", description: "Start your journey by enrolling in your desired course at RTMNU.", color: "red-500", icon: <FaUniversity /> },
    { title: "Foundation Courses", description: "Gain fundamental knowledge through core subjects in your first year.", color: "yellow-500", icon: <FaBook /> },
    { title: "Skill Development", description: "Enhance your skills with workshops, certifications, and projects.", color: "blue-500", icon: <FaTools /> },
    { title: "Internships & Research", description: "Engage in internships and research to gain practical experience.", color: "cyan-500", icon: <FaFlask /> },
    { title: "Placements & Higher Studies", description: "Prepare for career opportunities or further education.", color: "purple-500", icon: <FaBriefcase /> },
    { title: "Alumni & Career Growth", description: "Stay connected and grow through networking and upskilling.", color: "green-500", icon: <FaUsers /> }
];

export default function RTMNURoadmap() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Roadmap</h2>
            <div className="flex flex-col items-center gap-8">
                {roadmapStages.map((stage, index) => (
                    <div key={index} className="flex items-center w-full md:w-2/3">
                        <motion.div
                            className={`flex items-center w-full p-6 border-l-8 border-${stage.color} bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <div className={`text-${stage.color} text-3xl mr-4`}>{stage.icon}</div>
                            <div>
                                <h3 className={`text-xl font-semibold text-${stage.color} mb-2`}>{stage.title}</h3>
                                <p className="text-gray-600">{stage.description}</p>
                            </div>
                        </motion.div>
                        {index < roadmapStages.length - 1 && (
                            <div className="text-gray-400 text-3xl mx-4">➜</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
