import { useState } from "react";

const startups = [
    { name: "Padcare", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://padcarelabs.com" },
    { name: "Serigen", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://serigenmed.com" },
    { name: "Indius Medical", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://indiusmedical.com" },
    { name: "BioMedX", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://biomedx.com" },
    { name: "NanoHeal", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://nanoheal.com" },
    { name: "TechNova", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://technova.com" },
    { name: "AgriGen", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://agrigen.com" },
    { name: "MediCore", image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?semt=ais_hybrid", url: "https://medicore.com" },
];

export default function OurStartups() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="flex flex-col items-center p-10 bg-gray-100 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Startups</h2>
            <div className="flex overflow-x-auto w-full max-w-6xl h-auto space-x-4 p-4 scrollbar-hide">
                {startups.map((startup, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden transition-all duration-500 cursor-pointer rounded-xl shadow-lg flex-shrink-0 ${hovered === index ? "w-64 md:w-80 lg:w-96" : "w-24 md:w-32 lg:w-40"}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => window.open(startup.url, "_blank")}
                    >
                        <img
                            src={startup.image}
                            alt={startup.name}
                            className="object-cover w-full h-40 md:h-48 lg:h-[500px] rounded-xl"
                        />
                        {hovered === index && (
                            <div className="absolute bottom-0 bg-black bg-opacity-70 text-white p-2 md:p-4 w-full text-center">
                                <h3 className="text-sm md:text-lg font-semibold">{startup.name}</h3>
                                <p className="text-xs md:text-sm">Click to visit</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
