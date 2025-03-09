import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Tanuj Gigras",
        title: "Founder, Nayam Innovations",
        feedback: "Venture Center provided us with the infrastructure and capital to execute our vision. Their support in networking and funding was invaluable.",
    },
    {
        name: "Ashwin Shankar",
        title: "Founder, Divish Mobility",
        feedback: "The VC ecosystem was instrumental in shaping my idea into a business. Access to shared labs and quick prototyping helped bring my product to market faster.",
    },
    {
        name: "Neha Gupta",
        title: "CEO, GreenTech Solutions",
        feedback: "Venture Center provided an amazing support system, helping us scale sustainably. The mentorship was invaluable!",
    },
    {
        name: "Rohit Verma",
        title: "Co-Founder, AI Innovate",
        feedback: "From idea to execution, Venture Center played a key role in our journey. Their resources and ecosystem gave us the push we needed.",
    },
    {
        name: "Priya Mehta",
        title: "Founder, EduSmart",
        feedback: "Their strategic insights and network connections were game changers for our startup! We wouldn’t be here without them.",
    },
    {
        name: "Kunal Desai",
        title: "CEO, MedTech Revolution",
        feedback: "Getting access to their research labs and funding guidance was instrumental in taking our innovation to the next level.",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Customer Testimonials</h2>
            <div className="relative w-full max-w-6xl overflow-hidden">
                <motion.div
                    className="flex space-x-6"
                    initial={{ x: 0 }}
                    animate={{ x: -activeIndex * 100 + "%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-blue-800 text-white rounded-xl shadow-lg w-80 flex-shrink-0 text-center">
                            <p className="text-lg leading-relaxed">{testimonial.feedback}</p>
                            <h3 className="mt-4 font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-sm text-gray-300">{testimonial.title}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <button onClick={prevSlide} className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                    <ChevronLeft size={24} />
                </button>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-400"}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
                <button onClick={nextSlide} className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}