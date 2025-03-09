import React from "react";

const MentorshipSection = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Heading */}
                <div>
                    <h2 className="text-4xl font-extrabold text-blue-900 leading-tight">
                        Explore Our Mentorship <br /> Programs
                    </h2>
                </div>

                {/* Right Side - Description */}
                <div>
                    <p className="text-gray-700 text-lg">
                        At <span className="text-blue-600 font-semibold">LaunchPad</span>, our mentorship programs are designed to empower entrepreneurs
                        with the guidance and support they need to succeed. Our experienced mentors provide
                        personalized advice, helping startups navigate challenges and seize opportunities in
                        the competitive business landscape.
                    </p>
                </div>
            </div>

            {/* Benefits & Structure */}
            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left - Program Benefits */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-900">Program Benefits</h3>
                    <p className="text-gray-700 mt-2">
                        Gain insights from <span className="text-blue-600 font-semibold">industry experts</span> and
                        enhance your startup’s growth potential.
                    </p>
                </div>

                {/* Right - Program Structure */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-900">Program Structure</h3>
                    <p className="text-gray-700 mt-2">
                        Flexible sessions tailored to meet the unique needs of each startup.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
