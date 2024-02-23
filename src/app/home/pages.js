/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import background from "../../../public/images/background/banner1.png";
import music from "../../../public/images/background/music.png";
import "./style.css";

export default function Home() {
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
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer -rotate-6 font-mono z-10"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            behavior="scroll"
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
                <div className="h-full flex items-center absolute z-0">
                    <div
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer rotate-12 font-mono"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            behavior="scroll"
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
        </div>
    );
}
