import React from "react";

const MentorshipLast = () => {
    return (
        <section className="bg-blue-50 text-center py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Join Our Mentorship Program
                </h2>
                <p className="text-gray-700 mt-4 text-lg">
                    Discover how our mentorship program can transform your startup journey.
                    Connect with industry experts and gain valuable insights tailored to your needs.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Get Started Now
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Why Join?</h3>
                <ul className="mt-4 text-gray-700 text-lg space-y-2">
                    <li>✔ Get personalized guidance from experienced mentors.</li>
                    <li>✔ Access exclusive startup resources and networking events.</li>
                    <li>✔ Build connections with investors and industry leaders.</li>
                    <li>✔ Gain practical skills to accelerate your startup growth.</li>
                </ul>
            </div>
        </section>
    );
};

export default MentorshipLast;
