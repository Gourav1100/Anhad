/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import background from "../../../public/images/background/banner1.png";
import music from "../../../public/images/background/music.png";
import mainArtist from "./main_artist";
import artists from "./artists";
import events from "./events_subset";
import "./style.css";

export default function Home() {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <=
            (3 *
                (window.innerHeight || document.documentElement.clientHeight)) /
                4
        );
    }
    function handleScroll() {
        const elements = document.getElementsByClassName("fadeInElement");
        [...elements].forEach((element) => {
            if (
                isInViewport(element) &&
                !element.classList.contains("visible")
            ) {
                element.classList.add("visible");
            }
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }, []);

    return (
        <div id="font-bold">
            <div
                className="relative"
                style={{
                    height: "55vh",
                }}
            >
                <div
                    className="w-full absolute h-full -z-30"
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-20 h-full w-full backdrop-blur-xl -z-20"></div>
                <div className="w-full absolute h-full flex justify-center overflow-hidden">
                    <img
                        className="rounded-xl transition-all duration-500 hover:scale-105 opacity-80 hover:opacity-90"
                        style={{
                            height: "100%",
                            objectFit: "contain",
                        }}
                        src={background.src}
                        alt="anhad"
                    />
                </div>
            </div>
            <div
                className="relative overflow-hidden"
                style={{
                    height: "40vh",
                }}
            >
                <div
                    className="w-full absolute h-full -z-30"
                    style={{
                        backgroundImage: `url(${music.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="w-full absolute h-full -z-20 bg-black bg-opacity-20"></div>
                <div className="w-full h-full flex items-center absolute">
                    <div
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer -rotate-6 text-oregano z-10 shadow-md shadow-black"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            scrollamount="12"
                            behavior="alternate"
                            direction="right"
                            className="p-8 text-3xl lg:text-5xl"
                        >
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-cyan-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-amber-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-600">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-600">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-600">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16">
                                TECHNO-CULTURAL
                            </span>
                        </marquee>
                    </div>
                </div>
                <div className="h-full flex items-center absolute z-0">
                    <div
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer rotate-12 text-oregano shadow-md shadow-black"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            scrollamount="12"
                            behavior="alternate"
                            direction="left"
                            className="p-8 text-3xl lg:text-5xl"
                        >
                            <span className="p-8 pr-16 pl-16">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-600">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-600">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-600">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-amber-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-cyan-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                        </marquee>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-8 lg:p-64 lg:pt-32 lg:pb-8 z-10 fade-in fadeInElement">
                <div
                    className="w-full border rounded-lg p-12 pr-8 pl-8 lg:p-16 flex cursor-pointer flex-wrap"
                    style={{ borderColor: "#414141" }}
                >
                    <span className="w-full lg:w-2/5 h-full flex justify-center pr-8 pl-3 pb-8 lg:p-8">
                        <img
                            onClick={() => {
                                window.open(mainArtist.instagram, "_blank");
                            }}
                            src={mainArtist.image}
                            className="h-auto object-contain rounded-xl w-80 hover:scale-105 transition-all duration-300 z-10"
                            alt={mainArtist.name}
                        />
                    </span>
                    <span className="w-full lg:w-3/5 p-8 flex flex-col">
                        <div className="text-5xl w-full flex justify-end">
                            <i className="fi fi-sr-quote-right"></i>
                        </div>
                        <div className="text-3xl w-full flex justify-start artist-title text-oregano">
                            Main Artist
                        </div>
                        <div className="text-6xl w-full flex justify-start text-oregano">
                            {mainArtist.name}
                        </div>
                        <div className="text-2xl w-full flex justify-start pt-8 p-4 text-oregano text-wrap">
                            {mainArtist.bio}
                        </div>
                        <div className="w-full flex justify-end lg:p-4 lg:mt-32 mt-8">
                            <i
                                htmlFor="artist-instagram"
                                className="z-10 text-5xl hover:scale-110 transition-all duration-500 cursor-pointer fi fi-brands-instagram artist-title"
                                onClick={() => {
                                    window.open(mainArtist.instagram, "_blank");
                                }}
                            ></i>
                        </div>
                    </span>
                </div>
            </div>
            <div className="w-full p-8 pb-2 text-oregano lg:p-64 lg:pt-8 lg:pb-2 artist-title text-4xl lg:text-6xl fade-in fadeInElement">
                Popular Categories
            </div>
            <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl fade-in fadeInElement">
                Singers and Bands at Anhad 2024
            </div>
            <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                {artists.map((artist) => {
                    return (
                        <React.Fragment key={artist.name}>
                            <span className="w-full lg:w-1/3 flex justify-center flex-wrap">
                                <div className="w-full flex justify-center p-5">
                                    <img
                                        onClick={() => {
                                            window.open(
                                                artist.instagram,
                                                "_blank",
                                            );
                                        }}
                                        className="w-64 object-contain rounded-full border-2 shadow-md shadow-white border-stone-600 hover:scale-105 transition-all duration-300 z-10 cursor-pointer"
                                        src={artist.image}
                                        alt={artist.name}
                                    />
                                </div>
                                <div className="w-full flex justify-center">
                                    <span
                                        onClick={() => {
                                            window.open(
                                                artist.instagram,
                                                "_blank",
                                            );
                                        }}
                                        className="z-10 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full bg-cyan-400 bg-opacity-50 p-2 pl-8 pr-24 flex flex-wrap"
                                    >
                                        <span className="w-full text-3xl">
                                            {artist.name}
                                        </span>
                                        <span className="text-sm">
                                            {artist.genre}
                                        </span>
                                    </span>
                                </div>
                            </span>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="relative overflow-hidden">
                <div
                    className="absolute h-full -z-20 opacity-50"
                    style={{
                        background:
                            "linear-gradient(180deg, #FFC107 0%, #FF589B 100%, #FF589B 100%)",
                        filter: "blur(250px)",
                        width: "682px",
                        bottom: "0px",
                        insetInlineStart: "-358px",
                    }}
                ></div>
                <div
                    className="absolute h-full -z-20 opacity-70"
                    style={{
                        background:
                            "linear-gradient(180deg, #5EE4C6 0%, #FF589B 100%, #2690FF 100%)",
                        filter: "blur(250px)",
                        width: "682px",
                        bottom: "270px",
                        right: "-200px",
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-20 h-full w-full backdrop-blur-xl -z-10"></div>
                <div className="w-full p-8 pb-2 lg:p-64 lg:pt-8 lg:pb-2 text-4xl lg:text-6xl fade-in fadeInElement flex justify-between">
                    <span className="artist-title text-oregano">Events</span>
                    <span
                        onClick={() => window.open("/events", "_self")}
                        className="z-10 cursor-pointer text-sm rounded-full p-2 lg:p-4 font-sans text-stone-300 border border-stone-300 hover:border-stone-100 hover:text-stone-100 transition-all duration-300 items-center"
                    >
                        View All Events
                    </span>
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl fade-in fadeInElement">
                    Events at Anhad
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                    {events.map((event) => {
                        return (
                            <React.Fragment key={event.name}>
                                <span
                                    className="w-full lg:w-1/3 flex justify-center flex-wrap group relative p-2 cursor-pointer"
                                    onClick={() =>
                                        window.open(event.link, "_blank")
                                    }
                                >
                                    <div className="w-96 overflow-hidden flex justify-center p-5">
                                        <img
                                            className="w-96 object-contain rounded-lg group-hover:scale-105 transition-all duration-300 z-10 cursor-pointer"
                                            src={event.image}
                                            alt={event.name}
                                        />
                                    </div>
                                    <div className="absolute bottom-0 w-full h-0 rounded-xl z-10 opacity-0 group-hover:opacity-50 group-hover:h-full transition-all duration-300 bg-black">
                                        <div className="w-full h-full flex items-center flex-col justify-end pb-5 pt-5">
                                            <span className="text-white text-2xl">
                                                {event.name}
                                            </span>
                                            <span className="text-white text-lg text-ellipsis overflow-hidden w-full pr-16 pl-16 pt-2 line-clamp-2">
                                                {event.desc}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute top-10 left-14 h-10 w-10 rounded-full z-20 bg-white opacity-15 group-hover:opacity-100 group-hover:bg-gradient-to-tr from-pink-500 to-yellow-500 transition-all duration-300 text-center items-center">
                                        <i className="text-pink-500 group-hover:text-white text-sm fi fi-rs-arrow-up-right"></i>
                                    </div>
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
