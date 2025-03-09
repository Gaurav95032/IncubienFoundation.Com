import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion"; // ✅ Import Framer Motion for animations

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Get current route

    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <NavLink
                        to={"/"}
                        className="text-blue-600 text-2xl font-extrabold tracking-wide transition-transform transform hover:scale-105"
                    >
                        Incubien Foundation
                    </NavLink>
                </motion.div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8">
                    {["About", "Services", "Mentorship", "Resources"].map((item) => (
                        <NavLink
                            key={item}
                            to={`/${item}`}
                            className={`relative text-lg font-semibold transition-all duration-300 ${location.pathname === `/${item}` ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
                        >
                            {item}
                            {/* Active Underline */}
                            {location.pathname === `/${item}` && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-blue-600 rounded-full"
                                />
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/Register")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/contactus")}
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        Contact Us
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 text-2xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 75 }}
                    className="md:hidden fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center z-50"
                >
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
                        <FiX />
                    </button>
                    {["About", "Services", "Mentorship", "Resources"].map((item) => (
                        <NavLink
                            key={item}
                            to={`/${item}`}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-2xl font-medium mb-6 hover:text-blue-300 transition-all duration-300"
                        >
                            {item}
                        </NavLink>
                    ))}
                    <button onClick={() => navigate("/Register")} className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition">
                        Get Started
                    </button>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
