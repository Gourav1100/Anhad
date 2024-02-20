/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import background from '../../../public/images/background/banner1.png';
import './style.css';

export default function page() {
    return (
        <div id="font-bold">
            <div
                className="relative"
                style={{
                    height: '70vh',
                }}
            >
                <div
                    className="w-full absolute h-full -z-20"
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-40 h-full w-full backdrop-blur-sm -z-10"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="w-full flex justify-center flex-wrap mt-12">
                        <div className="border border-pink-400 rounded-full p-4 md:p-5 text-pink-400 hover:bg-pink-500 transition-all hover:bg-opacity-50 flex items-center justify-center h-full">
                            <i className="fi fi-sr-sparkles text-2xl md:text-4xl flex h-full items-center justify-center"></i>
                        </div>
                        <div className="w-full h-fit mt-6 flex justify-center text-4xl md:text-5xl">
                            Most Popular Genres
                        </div>
                        <div className="w-full font-extralight h-fit mt-6 flex justify-center text-md md:text-lg text-center">
                            Our Collection Of Award-Winning Popular Bands For
                            Hire Perform Floor-Filling Songs In All Genres,
                        </div>
                        <div className="w-full font-extralight h-fit mt-2 flex justify-center text-md md:text-lg text-center">
                            That Everyone Loves. But Don't Leave It Too Late –
                            The Best Bands Book Up Early!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
