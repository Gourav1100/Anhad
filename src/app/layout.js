/* eslint-disable @next/next/no-img-element */
'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';
import anime from 'animejs';
import { Mutex } from 'async-mutex';
import logo from '../../public/favicon.png';
import icon from '../../public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const helmetContext = {};
    useEffect(() => {
        const mutex = new Mutex();
        window.onmousemove = (e) =>
            mutex.runExclusive(() => {
                const { clientX, clientY } = e;
                anime({
                    targets: '#mouse-follower-dot',
                    marginLeft: clientX - 14,
                    marginTop: clientY - 14,
                    duration: 50,
                    easing: 'easeOutBack',
                });
                anime({
                    targets: '#mouse-follower-wrapper',
                    marginLeft: clientX - 16,
                    marginTop: clientY - 16,
                    duration: 150,
                    easing: 'easeOutBack',
                });
            });
    }, []);
    return (
        <html lang="en">
            <head>
                <title>Anhad</title>
                <meta
                    name="description"
                    content="Anhad - Indian Institute of Technology, Jammu"
                />
                <link rel="icon" sizes="64x64" href={icon.src} />
            </head>
            <body className={inter.className + ' overflow-hidden'}>
                <div
                    className="p-3 rounded-full border border-teal-400 absolute shadow-inner shadow-teal-200 z-20"
                    id="mouse-follower-wrapper"
                ></div>
                <div
                    className="p-2 rounded-full absolute z-20"
                    id="mouse-follower-dot"
                >
                    <div className="p-1 rounded-full overflow-hidden bg-teal-400"></div>
                </div>
                <div
                    id="header"
                    className="p-4 absolute w-full z-10 flex"
                    style={{ background: 'rgba(13, 13, 13, 0.8)' }}
                >
                    <span>
                        <img
                            height={'auto'}
                            width={'75px'}
                            src={logo.src}
                            alt="Anhad"
                        />
                    </span>
                    <span className="ml-2 h-100 text-xl flex flex-col justify-center">
                        Anhad
                    </span>
                </div>
                {children}
            </body>
        </html>
    );
}
