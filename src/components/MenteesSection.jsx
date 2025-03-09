import React from "react";
import { motion } from "framer-motion";

const mentees = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "CEO of Tech Innovations",
        feedback: "The mentorship at LaunchPad was a game-changer for my startup. The guidance I received helped me refine my business model and connect with key industry players.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Founder of Green Solutions",
        feedback: "I can't thank LaunchPad enough for the support I received. The mentors were incredibly knowledgeable and genuinely invested in my success.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        id: 3,
        name: "Sarah Lee",
        role: "Co-founder of HealthTech",
        feedback: "The resources and mentorship provided by LaunchPad were invaluable. I gained insights that helped me navigate the challenges of starting a business.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "James Carter",
        role: "CTO of AI Revolution",
        feedback: "LaunchPad connected me with experienced mentors who helped me refine my technical strategies and expand my business network.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        id: 5,
        name: "Emily Davis",
        role: "Founder of EduGrow",
        feedback: "The mentorship program gave me the confidence to launch my startup and provided invaluable guidance on funding and scaling my business.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        id: 6,
        name: "Robert Wilson",
        role: "Investor & Entrepreneur",
        feedback: "The mentors at LaunchPad have deep industry knowledge. Their advice helped me make data-driven decisions for my startup.",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        id: 7,
        name: "Sophia Brown",
        role: "CEO of FinTech Solutions",
        feedback: "I loved the personalized approach of the mentorship program. The insights I gained were crucial for the success of my startup.",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        id: 8,
        name: "Daniel Martinez",
        role: "Tech Startup Founder",
        feedback: "The structured approach and experienced mentors made a huge difference in refining my startup idea and taking it to market.",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
        id: 9,
        name: "Olivia White",
        role: "Founder of EcoTech",
        feedback: "Thanks to LaunchPad, I received mentorship that helped me align my sustainability startup with industry demands.",
        image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
];

const MenteesSection = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-blue-900">What Our Mentees Say</h2>
                <p className="text-gray-600 text-lg mt-2">
                    Discover how our mentorship has transformed startups and empowered entrepreneurs.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentees.map((mentee) => (
                    <motion.div
                        key={mentee.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: mentee.id * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-6 border border-blue-200"
                    >
                        {/* Star Rating */}
                        <div className="flex gap-1 text-yellow-500 text-xl">
                            {"★★★★★"}
                        </div>

                        {/* Feedback */}
                        <p className="text-gray-700 mt-2 italic">{mentee.feedback}</p>

                        {/* User Details */}
                        <div className="flex items-center mt-4 gap-3">
                            <img
                                src={mentee.image}
                                alt={mentee.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                            />
                            <div>
                                <p className="text-blue-900 font-semibold">{mentee.name}</p>
                                <p className="text-gray-500 text-sm">{mentee.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MenteesSection;
