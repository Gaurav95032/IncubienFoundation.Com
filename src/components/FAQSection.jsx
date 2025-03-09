import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    { question: "What is Incubine Foundation?", answer: "Incubine Foundation is an incubation center dedicated to supporting startups by providing mentorship, funding, and networking opportunities." },
    { question: "Who can apply for incubation?", answer: "Entrepreneurs, innovators, and early-stage startups with innovative ideas can apply for incubation at Incubine Foundation." },
    { question: "What kind of support does Incubine provide?", answer: "We offer funding assistance, mentorship, networking opportunities, co-working space, and business development guidance." },
    { question: "Is there a fee for joining the incubation program?", answer: "The fees vary based on the incubation package chosen. Some programs are free, while others require a small fee or equity exchange." },
    { question: "How long does the incubation program last?", answer: "Our programs typically last between 6 to 12 months, depending on the stage and requirements of the startup." },
    { question: "Can I apply if I don’t have a team?", answer: "Yes, solo entrepreneurs can apply. However, having a co-founder or team is often beneficial for business growth." },
    { question: "Do you provide funding to startups?", answer: "Yes, we connect startups with investors and offer seed funding opportunities based on business viability." },
    { question: "What industries do you support?", answer: "We support startups in various industries, including technology, healthcare, fintech, education, and sustainability." },
    { question: "How can I apply for the incubation program?", answer: "You can apply through our website by filling out the application form and submitting your pitch deck." },
    { question: "What happens after the incubation period ends?", answer: "Graduated startups receive continued networking support, potential funding opportunities, and access to alumni resources." }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 bg-white text-gray-800">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center bg-blue-50 hover:bg-blue-100"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <motion.div
                                className="px-6 py-4 bg-white text-gray-600"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
