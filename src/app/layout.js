/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import { Mutex } from 'async-mutex';
import logo from '../../public/favicon.png';
import icon from '../../public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });
const sponsors = [
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },

    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },

    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
    {
        name: 'Sponsor 1',
        url: 'https://example.com',
        logo: import('../../public/favicon.png'),
    },
];
export default function RootLayout({ children }) {
    const [bias, setBias] = useState(0);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        anime({
            targets: '#mouse-follower-dot',
            marginLeft: clientX - 14,
            marginTop: clientY - 14 + bias,
            duration: 50,
            easing: 'easeOutBack',
        });
        anime({
            targets: '#mouse-follower-wrapper',
            marginLeft: clientX - 16,
            marginTop: clientY - 16 + bias,
            duration: 150,
            easing: 'easeOutBack',
        });
    }, [bias, clientX, clientY]);
    useEffect(() => {
        setLoading(true);
        const mutex = new Mutex();
        window.onmousemove = (e) => {
            mutex.runExclusive(() => {
                setClientX(e.clientX);
                setClientY(e.clientY);
            });
        };
        window.onscroll = () => {
            mutex.runExclusive(() => {
                setBias(parseInt(window.scrollY));
            });
        };
        anime({
            targets: '#scrollbar-sponsor',
            duration: 10000,
            scrollX: ['0%', '100%', '0%'],
            loop: true,
            easing: 'easeOutBack',
        });
        setBias(parseInt(window.scrollY));
        Promise.all(
            sponsors.map(async (sponsor) => {
                sponsor.logo = (await sponsor.logo).default.src;
                return sponsor;
            }),
        ).then(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
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
            <body
                style={{
                    background: '#181818',
                }}
                className={
                    inter.className +
                    ' overflow-x-hidden cursor-default bodyContainer'
                }
            >
                {isLoading && (
                    <div className="fixed z-50 w-full h-full flex justify-center items-center bg-stone-900">
                        Loading
                    </div>
                )}
                <div
                    className="p-3 rounded-full border border-teal-400 absolute shadow-inner shadow-teal-200"
                    id="mouse-follower-wrapper"
                ></div>
                <div
                    className="p-2 rounded-full absolute"
                    id="mouse-follower-dot"
                >
                    <div className="p-1 rounded-full overflow-hidden bg-teal-400"></div>
                </div>
                <div
                    id="header"
                    className="p-4 w-full flex z-10 sticky top-0"
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
                <div
                    className="mt-16 p-10 pb-32 md:p-32 pt-0 md:pt-0 w-full"
                    style={{ background: '#0D0D0D' }}
                >
                    <div
                        className="w-full"
                        style={{ borderTop: '2px solid #414141' }}
                    >
                        <div
                            className="p-4 pt-10 whitespace-nowrap overflow-hidden w-full"
                            id="scrollbar-sponsor"
                        >
                            {sponsors.map((sponsor, index) => (
                                <a
                                    key={`sponsor-${index}`}
                                    href={`${sponsor.url}`}
                                    target="_blank"
                                >
                                    <img
                                        className="inline-block max-h-32"
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={'256px'}
                                        style={{
                                            maxHeight: '128px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
