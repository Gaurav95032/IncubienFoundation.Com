import { useParams, useNavigate } from "react-router-dom";

const schemeDetails = {
    "women-entrepreneur": {
        title: "Women Entrepreneurship Scheme",
        description: "A special initiative to support women entrepreneurs with grants, mentorship, and networking opportunities.",
        benefits: [
            "Financial grants up to $50,000",
            "Personalized mentorship program",
            "Exclusive networking events",
            "Access to business development resources"
        ],
        image: "/assets/women-scheme.jpg"
    },
    "tech-startup": {
        title: "Tech Startup Assistance",
        description: "A program designed to help tech-based startups with funding, mentorship, and market exposure.",
        benefits: [
            "Seed funding up to $100,000",
            "Tech-focused mentorship",
            "Opportunities to pitch to investors",
            "Access to co-working spaces"
        ],
        image: "/assets/tech-scheme.jpg"
    }
};

const KnowMorePage = () => {
    const { schemeId } = useParams();
    const navigate = useNavigate();

    const scheme = schemeDetails[schemeId];

    if (!scheme) {
        return <h2 className="text-center text-red-500 text-2xl font-bold mt-10">Scheme not found</h2>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-800">{scheme.title}</h1>

            <img
                src={scheme.image}
                alt={scheme.title}
                className="w-full sm:w-2/3 md:w-1/2 h-64 object-cover rounded-lg my-6 shadow-lg"
            />

            <p className="text-lg text-gray-700 text-center max-w-3xl">{scheme.description}</p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-6">Benefits:</h3>
            <ul className="list-disc text-gray-600 mt-3 text-lg">
                {scheme.benefits.map((benefit, index) => (
                    <li key={index} className="mt-2">{benefit}</li>
                ))}
            </ul>

            <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-gray-600 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-all"
            >
                ← Back
            </button>
        </div>
    );
};

export default KnowMorePage;
