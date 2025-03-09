import React from "react";
import { useParams } from "react-router-dom";

const resourceDetails = {
    "collaborative-tools": {
        title: "Collaborative Tools for Startups",
        description: "These tools help startups streamline teamwork and productivity...",
        accessInfo: "You can access these tools via our platform after applying.",
    },
    "insightful-articles": {
        title: "Insightful Articles for Entrepreneurs",
        description: "Our articles provide guidance on startup challenges...",
        accessInfo: "Articles are freely available on our platform.",
    },
    "comprehensive-guides": {
        title: "Comprehensive Guides for Success",
        description: "Step-by-step guides to help you overcome startup hurdles...",
        accessInfo: "Guides are available for registered users.",
    },
};

const ResourceDetail = () => {
    const { id } = useParams();
    const resource = resourceDetails[id];

    if (!resource) {
        return <h1 className="text-center text-red-600">Resource Not Found</h1>;
    }

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{resource.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{resource.description}</p>
            <p className="text-md text-gray-600 mb-4">{resource.accessInfo}</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-800 transition">
                Apply for Access
            </button>
        </div>
    );
};

export default ResourceDetail;
