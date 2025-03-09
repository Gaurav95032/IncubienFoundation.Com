import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Sample Data (Updated with descriptions)
const latestUpdates = [
    {
        "id": 1,
        "date": "01 March, 2025",
        "title": "Launch of Incubine's Startup Accelerator Program",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Incubine is excited to launch its flagship Startup Accelerator Program. This initiative aims to provide mentorship, funding, and networking opportunities for budding entrepreneurs. Join us to kickstart your journey to success."
    },
    {
        "id": 2,
        "date": "02 March, 2025",
        "title": "Meet Our New Batch of Entrepreneurs",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "We welcome our latest cohort of passionate entrepreneurs. This diverse group of innovators will embark on a transformative journey, gaining insights and skills to shape the future of their startups."
    },
    {
        "id": 3,
        "date": "03 March, 2025",
        "title": "Incubine Hosts AI & ML Workshop",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Explore the latest trends in Artificial Intelligence and Machine Learning. This workshop features expert-led sessions, hands-on activities, and discussions on how AI can drive innovation in startups."
    },
    {
        "id": 4,
        "date": "04 March, 2025",
        "title": "Funding Opportunities for Early-Stage Startups",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Discover various funding options for startups, including grants, angel investors, and venture capital. Our panel of experts will guide entrepreneurs on securing financial support to scale their businesses."
    },
    {
        "id": 5,
        "date": "05 March, 2025",
        "title": "Networking Event: Connecting Entrepreneurs & Investors",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Discover various funding options for startups, including grants, angel investors, and venture capital. Our panel of experts will guide entrepreneurs on securing financial support to scale their businesses."
    },
    {
        "id": 6,
        "date": "06 March, 2025",
        "title": "Tech Talk: The Future of Blockchain in Startups",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Join us for a tech talk on the future of blockchain in startups. Learn about its potential applications, challenges, and opportunities for innovation."
    },
    {
        "id": 7,
        "date": "07 March, 2025",
        "title": "Incubine's Annual Startup Summit 2025",
        "image": "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid",
        "description": "Join us for Incubine's Annual Startup Summit 2025, where you'll have the opportunity to network with industry experts, learn about emerging technologies, and discover funding opportunities for your startup."
    },
    {
        "id": 8,
        "date": "08 March, 2025",
        "title": "Panel Discussion on Women in Entrepreneurship",
        "image": "https://example.com/images/incubine8.jpg",
        "description": "Join us for a panel discussion on Women in Entrepreneurship. Learn about the challenges and opportunities for women in the entrepreneurial world."
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

const EventDetails = () => {
    const { id } = useParams();
    const event = latestUpdates.find(item => item.id === parseInt(id));

    if (!event) {
        return <div className="text-center text-red-600 text-xl">Event Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={event.image} alt="Event" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <p className="text-gray-500 text-sm">{event.date}</p>
                    <h2 className="text-2xl font-bold text-blue-900">{event.title}</h2>
                    <p className="text-gray-700 mt-4">{event.description}</p>
                </div>
                <div className="p-6 text-center">
                    <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                        Back to Events
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
