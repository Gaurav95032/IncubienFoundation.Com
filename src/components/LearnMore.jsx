import { useParams, Link } from "react-router-dom";

const serviceDetails = {
    mentorship: {
        title: "Personalized Mentorship",
        description: "Get one-on-one guidance from industry experts to accelerate your startup journey.",
        image: "/assets/mentorship.jpg"
    },
    resources: {
        title: "Resource Library",
        description: "Gain access to exclusive articles, tools, and guides to enhance your business.",
        image: "/assets/resources.jpg"
    },
    networking: {
        title: "Networking Events",
        description: "Attend events to connect with potential investors, mentors, and like-minded entrepreneurs.",
        image: "/assets/networking.jpg"
    },
};

const LearnMore = () => {
    const { id } = useParams();
    const service = serviceDetails[id];

    if (!service) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl text-red-500">Service Not Found</h1>
                <Link to="/" className="mt-4 text-blue-600">Go Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-10 flex flex-col items-center">
            <img src={service.image} alt={service.title} className="w-1/2 rounded-lg shadow-md mb-6" />
            <h1 className="text-4xl font-bold text-blue-800">{service.title}</h1>
            <p className="text-gray-700 text-lg mt-4 text-center">{service.description}</p>
            <Link to="/contact" className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Apply Now
            </Link>
            <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Back to Services
            </Link>
        </div>
    );
};

export default LearnMore;
