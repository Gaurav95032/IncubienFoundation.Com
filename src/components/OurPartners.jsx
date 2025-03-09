import React from "react";

const partners = [
    {
        category: "ACADEMIC COLLABORATOR",
        logos: ["https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?ga=GA1.1.312492000.1741444776&semt=ais_hybrid", "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?ga=GA1.1.312492000.1741444776&semt=ais_hybrid"]
    },
    {
        category: "INDUSTRY PARTNERS",
        logos: ["https://img.freepik.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1287271-18506.jpg?ga=GA1.1.312492000.1741444776&semt=ais_hybrid"]
    },
    {
        category: "COLLABORATIVE PROJECTS",
        logos: ["https://img.freepik.com/free-vector/flat-design-vs-logo-design_23-2149482034.jpg?ga=GA1.1.312492000.1741444776&semt=ais_hybrid"]
    },
    {
        category: "GOVERNMENT INITIATIVES",
        logos: ["https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8078.jpg?ga=GA1.1.312492000.1741444776&semt=ais_hybrid"]
    }
];

export default function OurPartners() {
    return (
        <div className="py-12 bg-gray-50 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {partners.map((section, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-lg font-semibold text-gray-600 border-b-2 border-blue-500 pb-2 mb-4">{section.category}</h3>
                        <div className="flex justify-center gap-6 flex-wrap">
                            {section.logos.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={logo}
                                    alt="Partner Logo"
                                    className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
