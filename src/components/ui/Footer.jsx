import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-100 py-10 px-6 text-blue-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Get in Touch Section */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-700">Get in Touch</h2>
                    <p className="mt-2 text-blue-600">Have questions? Reach out to us anytime!</p>
                    <div className="mt-4 space-y-2">
                        <p>Email: contact@yourwebsite.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-700">Contact Us</h2>
                    <form className="mt-4 space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Social Media Section */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-700">Follow Us</h2>
                    <p className="mt-2 text-blue-600">Stay connected through our social platforms.</p>
                    <div className="flex gap-4 mt-4 text-blue-600">
                        <a href="#" className="text-2xl hover:text-blue-800 transition-all duration-300">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-2xl hover:text-blue-800 transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-2xl hover:text-blue-800 transition-all duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-2xl hover:text-blue-800 transition-all duration-300">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-blue-600 mt-8 border-t border-blue-300 pt-4">
                © 2025 YourWebsite. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;