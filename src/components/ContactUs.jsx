import { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        state: "",
        district: "",
        college: "",
        inquiryType: "Internship",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col lg:flex-row items-center justify-center p-10 gap-10">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-xl p-8 rounded-xl w-full max-w-lg border border-blue-500"
            >
                <h1 className="text-4xl font-extrabold text-blue-800 text-center">Contact Us</h1>
                <p className="text-gray-600 mt-2 text-center">We’d love to hear from you!</p>

                <form
                    className="mt-4 flex flex-col space-y-4"
                    action="https://formsubmit.co/gauravwaghmare95032@gmail.com"
                    method="POST"
                >
                    {/* Hidden Fields */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Input Fields */}
                    <input type="text" name="name" placeholder="Your Name" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <input type="email" name="email" placeholder="Your Email" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <select name="state" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    >
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                    </select>

                    <input type="text" name="district" placeholder="Your District" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <input type="text" name="college" placeholder="Your College Name" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    />

                    <select name="inquiryType" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    >
                        <option value="Internship">Internship</option>
                        <option value="Startup">Startup</option>
                        <option value="Funding">Funding</option>
                        <option value="Providing Funding">Providing Funding</option>
                    </select>

                    <textarea name="message" placeholder="Your Message" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                    ></textarea>

                    <motion.button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-bold text-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-lg"
            >
                <iframe
                    className="w-full h-96 rounded-lg shadow-md border border-blue-500"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.9537353155049!3d-37.81627974202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f8b6fd%3A0x5030bfbca7b24c0!2sGoogle!5e0!3m2!1sen!2sin!4v1627355942334!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </motion.div>
        </div>
    );
};

export default ContactUs;
