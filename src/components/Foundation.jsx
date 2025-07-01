import React from 'react';
import foundation from '../assets/foundation.jpg'

const Foundation = () => {
    return (

        <div>
            <div className="py-16 md:py-24">
                <img src={foundation} alt="" className='md:mx-auto md:w-[50%] h-[300px] mb-[30px] md:mb-[80px] ' />
                <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-[45px] font-normal text-gray-800">
                        Sandra Bullock Foundation
                    </h2>
                    <p className="mt-6 max-w-xl mx-auto text-base text-gray-700 leading-relaxed">
                        Support the Sandra Bullock Foundation, a charitable initiative led by Sandra to help fight poverty and provide aid to underserved Communities. Your donation helps bring hope, health and resources to remote areas around the world.
                    </p>
                    <button className="mt-10 bg-[#2d4a43] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d4a43]">
                        Donate to the Foundation
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Foundation;