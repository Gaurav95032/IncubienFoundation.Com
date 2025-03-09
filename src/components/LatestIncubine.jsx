import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Sample Data
const latestUpdates = [
    {
        "id": 1,
        "date": "01 March, 2025",
        "title": "Launch of Incubine's Startup Accelerator Program",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 2,
        "date": "02 March, 2025",
        "title": "Meet Our New Batch of Entrepreneurs",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 3,
        "date": "03 March, 2025",
        "title": "Incubine Hosts AI & ML Workshop",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 4,
        "date": "04 March, 2025",
        "title": "Funding Opportunities for Early-Stage Startups",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 5,
        "date": "05 March, 2025",
        "title": "Networking Event: Connecting Entrepreneurs & Investors",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 6,
        "date": "06 March, 2025",
        "title": "Tech Talk: The Future of Blockchain in Startups",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 7,
        "date": "07 March, 2025",
        "title": "Incubine's Annual Startup Summit 2025",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid"
    },
    {
        "id": 8,
        "date": "08 March, 2025",
        "title": "Panel Discussion on Women in Entrepreneurship",
        "image": "https://example.com/images/incubine8.jpg"
    },
    {
        "id": 9,
        "date": "09 March, 2025",
        "title": "Cybersecurity for Startups Workshop",
        "image": "https://example.com/images/incubine9.jpg"
    },
    {
        "id": 10,
        "date": "10 March, 2025",
        "title": "AI Startup Pitching Event",
        "image": "https://example.com/images/incubine10.jpg"
    },
    {
        "id": 11,
        "date": "11 March, 2025",
        "title": "How to Build a Scalable Business Model",
        "image": "https://example.com/images/incubine11.jpg"
    },
    {
        "id": 12,
        "date": "12 March, 2025",
        "title": "Startup Fundraising 101",
        "image": "https://example.com/images/incubine12.jpg"
    },
    {
        "id": 13,
        "date": "13 March, 2025",
        "title": "Incubine Demo Day: Startups Showcase",
        "image": "https://example.com/images/incubine13.jpg"
    },
    {
        "id": 14,
        "date": "14 March, 2025",
        "title": "GreenTech Startups: Opportunities & Challenges",
        "image": "https://example.com/images/incubine14.jpg"
    },
    {
        "id": 15,
        "date": "15 March, 2025",
        "title": "Building a Strong Startup Team",
        "image": "https://example.com/images/incubine15.jpg"
    },
    {
        "id": 16,
        "date": "16 March, 2025",
        "title": "Financial Management for Startups",
        "image": "https://example.com/images/incubine16.jpg"
    },
    {
        "id": 17,
        "date": "17 March, 2025",
        "title": "Incubine's Global Expansion Strategies",
        "image": "https://example.com/images/incubine17.jpg"
    },
    {
        "id": 18,
        "date": "18 March, 2025",
        "title": "Social Entrepreneurship Bootcamp",
        "image": "https://example.com/images/incubine18.jpg"
    },
    {
        "id": 19,
        "date": "19 March, 2025",
        "title": "Building an MVP: A Practical Guide",
        "image": "https://example.com/images/incubine19.jpg"
    },
    {
        "id": 20,
        "date": "20 March, 2025",
        "title": "Legal Essentials for Startups",
        "image": "https://example.com/images/incubine20.jpg"
    },
    {
        "id": 21,
        "date": "21 March, 2025",
        "title": "Growth Hacking for Early-Stage Startups",
        "image": "https://example.com/images/incubine21.jpg"
    },
    {
        "id": 22,
        "date": "22 March, 2025",
        "title": "Startup Culture & Leadership Workshop",
        "image": "https://example.com/images/incubine22.jpg"
    },
    {
        "id": 23,
        "date": "23 March, 2025",
        "title": "Tech Startups: Trends & Future",
        "image": "https://example.com/images/incubine23.jpg"
    },
    {
        "id": 24,
        "date": "24 March, 2025",
        "title": "Investor Readiness Program",
        "image": "https://example.com/images/incubine24.jpg"
    },
    {
        "id": 25,
        "date": "25 March, 2025",
        "title": "Women-Led Startups: Success Stories",
        "image": "https://example.com/images/incubine25.jpg"
    },
    {
        "id": 26,
        "date": "26 March, 2025",
        "title": "How to Pitch Your Startup Effectively",
        "image": "https://example.com/images/incubine26.jpg"
    },
    {
        "id": 27,
        "date": "27 March, 2025",
        "title": "Incubine's AI & Deep Learning Hackathon",
        "image": "https://example.com/images/incubine27.jpg"
    },
    {
        "id": 28,
        "date": "28 March, 2025",
        "title": "Startup Showcase: Top 10 Most Promising Ventures",
        "image": "https://example.com/images/incubine28.jpg"
    },
    {
        "id": 29,
        "date": "29 March, 2025",
        "title": "Incubine Connect: Meet the Mentors",
        "image": "https://example.com/images/incubine29.jpg"
    },
    {
        "id": 30,
        "date": "30 March, 2025",
        "title": "Building Sustainable Startups",
        "image": "https://example.com/images/incubine30.jpg"
    }
];

const LatestIncubine = () => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    // Scroll left
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-blue-50 py-16 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                Latest at Incubine Foundation
            </h2>

            {/* Scrollable Container */}
            <div className="relative max-w-6xl mx-auto">
                {/* Left Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-10"
                >
                    <FaChevronLeft />
                </button>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
                >
                    {latestUpdates.map((item) => (
                        <div
                            key={item.id}
                            className="flex-none w-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
                            onClick={() => navigate(`/event/${item.id}`)}
                        >
                            <img src={item.image} alt="Event" className="w-full h-44 object-cover" />
                            <div className="p-4">
                                <p className="text-gray-500 text-sm">{item.date}</p>
                                <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-10"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default LatestIncubine;
