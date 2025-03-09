import { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        state: "",
        district: "",
        college: "",
        inquiryType: "Internship", // Default selected option
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col lg:flex-row items-center justify-center p-10 gap-10">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg p-6 rounded-xl w-full max-w-lg border border-blue-500"
            >
                <h1 className="text-4xl font-bold text-blue-800 text-center">Contact Us</h1>
                <p className="text-gray-700 mt-2 text-center">We’d love to hear from you!</p>

                <form
                    className="mt-4 flex flex-col"
                    action="https://formsubmit.co/gauravwaghmare95032@gmail.com"
                    method="POST"
                >
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                    <input type="hidden" name="_captcha" value="false" />

                    <input type="text" name="name" placeholder="Your Name" required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        onChange={handleChange}
                    />

                    <input type="email" name="email" placeholder="Your Email" required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        onChange={handleChange}
                    />

                    <select name="state" required className="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={handleChange}>
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                    </select>

                    <input type="text" name="district" placeholder="Your District" required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        onChange={handleChange}
                    />

                    <input type="text" name="college" placeholder="Your College Name" required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        onChange={handleChange}
                    />

                    <select name="inquiryType" required className="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={handleChange}>
                        <option value="Internship">Internship</option>
                        <option value="Startup">Startup</option>
                        <option value="Funding">Funding</option>
                        <option value="Providing Funding">Providing Funding</option>
                    </select>

                    <textarea name="message" placeholder="Your Message" required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
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
