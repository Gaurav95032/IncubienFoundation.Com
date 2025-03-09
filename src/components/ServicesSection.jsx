import { Link } from "react-router-dom";

const services = [
    {
        id: "mentorship",
        title: "Personalized Mentorship",
        shortDesc: "Expert guidance to grow your startup.",
        image: "/assets/mentorship.jpg"
    },
    {
        id: "resources",
        title: "Resource Library",
        shortDesc: "Access tools, articles, and guides.",
        image: "/assets/resources.jpg"
    },
    {
        id: "networking",
        title: "Networking Events",
        shortDesc: "Connect with entrepreneurs and investors.",
        image: "/assets/networking.jpg"
    },
];

const programs = [
    {
        id: "startup-bootcamp",
        title: "Startup Bootcamp 2025",
        desc: "An intensive program to accelerate your startup journey.",
        image: "/assets/bootcamp.jpg"
    },
    {
        id: "funding-opportunities",
        title: "Funding Opportunities",
        desc: "Get connected with potential investors and funding sources.",
        image: "/assets/funding.jpg"
    }
];

const schemes = [
    {
        id: "women-entrepreneur",
        title: "Women Entrepreneurship Scheme",
        desc: "A special initiative to support women entrepreneurs with grants and mentorship.",
        image: "/assets/women-scheme.jpg"
    },
    {
        id: "tech-startup",
        title: "Tech Startup Assistance",
        desc: "Funding and mentorship for tech-based startups to grow and scale.",
        image: "/assets/tech-scheme.jpg"
    }
];

const ServicesSection = () => {
    return (
        <div className="min-h-screen bg-blue-50 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center">Our Services</h1>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white shadow-lg p-6 rounded-xl border border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold text-blue-700">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.shortDesc}</p>
                        <Link
                            to={`/learnmore/${service.id}`}
                            className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>

            {/* Active & Latest Programs Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-blue-800 text-center">Active & Latest Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white shadow-lg p-6 rounded-xl border border-blue-500 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-blue-700">{program.title}</h3>
                            <p className="text-gray-600 mt-2">{program.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Schemes Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-blue-800 text-center">Our Schemes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {schemes.map((scheme) => (
                        <div
                            key={scheme.id}
                            className="bg-white shadow-lg p-6 rounded-xl border border-blue-500 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={scheme.image}
                                alt={scheme.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-blue-700">{scheme.title}</h3>
                            <p className="text-gray-600 mt-2">{scheme.desc}</p>
                            <Link
                                to={`/knowmorepage/${scheme.id}`}
                                className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition-all"
                            >
                                Know More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Apply Now Section */}
            <div className="text-center mt-10">
                <a
                    href="https://forms.google.com/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-all shadow-lg transform hover:scale-105"
                >
                    Apply Now
                </a>
            </div>
        </div>
    );
};

export default ServicesSection;
