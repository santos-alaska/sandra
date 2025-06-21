import React from 'react';

// Data for the meet & greet options
const meetOptions = [
    "Online Fan Meet Pass: $7 (Monthly Zoom group)",
    "One-on-One Virtual Meet: $250 (Limited spots)",
    "In-person Events: Coming soon!",
];

const FortisFilmSection = () => {
    return (
        <section className="bg-white w-full py-16 lg:py-24">
            <div className="container mx-auto px-6 flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-normal text-gray-800">
                        Invest in Fortis Films
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-gray-600 leading-relaxed">
                        Believe in Storytelling? Become part of Fortis Fims
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-md">
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-800">
                            The experience of a life time.
                        </h3>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="p-8">
                        <ul className="space-y-5">
                            {meetOptions.map((option, index) => (
                                <li key={index} className="flex text-sm">
                                    <span className="text-gray-400 mr-3 mt-1">•</span>
                                    <span className="text-gray-700 leading-snug">{option}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <button className="mt-12 bg-[#2d4a43] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d4a43]">
                    Join Meet & Greet
                </button>

            </div>
        </section>
    );
};

export default FortisFilmSection;