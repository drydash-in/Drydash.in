'use client';
import React from 'react';
import Container from './container';
import Image from 'next/image';
import Logo from '@/../public/Assests/Logo/logo.svg';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#111111] overflow-hidden pt-20 lg:pt-32 w-full flex flex-col relative">
            <Container>
                {/* Top Section / Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 lg:mb-32 md:px-4 px-0">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Image src={Logo} alt="DryDash Logo" className="w-[140px] 2xl:w-[160px] h-auto" priority />
                        <p className="text-[13px] 2xl:text-[15px] leading-relaxed text-[#8a928e] max-w-[280px]">
                            The premium destination for sneaker care, restoration, and dry cleaning. We bring life back to your favorite pairs.
                        </p>
                    </div>

                    {/* Areas we serve */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[#E2DEC6] text-[15px] 2xl:text-[16px] font-semibold tracking-wide">Areas we serve</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Dry Cleaning in Delhi', href: '/dry-cleaning-in-delhi' },
                                { name: 'Dry Cleaning in Gurgaon', href: '/dry-cleaning-in-gurgaon' },
                                { name: 'Dry Cleaning in Noida', href: '/dry-cleaning-in-noida' },
                                { name: 'Dry Cleaning in Ghaziabad', href: '/dry-cleaning-in-ghaziabad' },
                                { name: 'Dry Cleaning in Greater Noida', href: '/dry-cleaning-in-greater-noida' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-[#8a928e] text-[13px] 2xl:text-[14px] hover:text-[#E2DEC6] transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[#E2DEC6] text-[15px] 2xl:text-[16px] font-semibold tracking-wide">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Services', href: '/services' },
                                { name: 'Blogs', href: '/blogs' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms & Conditions', href: '/terms-and-conditions' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-[#8a928e] text-[13px] 2xl:text-[14px] hover:text-[#E2DEC6] transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[#E2DEC6] text-[15px] 2xl:text-[16px] font-semibold tracking-wide">Contact</h4>
                        <ul className="flex flex-col gap-4 text-[#8a928e] text-[13px] 2xl:text-[14px]">
                            <li>
                                <a href="mailto:support@drydash.in" className="hover:text-[#E2DEC6] transition-colors">support@drydash.in</a>
                            </li>
                            <li>
                                <a href="tel:+918287636979" className="hover:text-[#E2DEC6] transition-colors">+91 8287636979</a>
                            </li>
                            {/* <li className="leading-relaxed max-w-[200px]">
                                Tower 15 211 ATS Le-grandiose noida 150, 201310
                            </li> */}
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="w-full flex justify-center items-center pt-10 pb-4 relative z-10 border-t border-white/5 lg:border-none lg:pt-0">
                    <p className="text-[#8a928e] text-[12px] 2xl:text-[13px]">
                        © {new Date().getFullYear()} Drydash. All rights reserved.
                    </p>
                </div>
            </Container>

            {/* Giant Background Text */}
            <div className="w-full md:h-100 h-30 flex justify-center pb-0 pointer-events-none select-none mt-2 lg:mt-6 overflow-hidden">
                <h1 className="text-[15vw] leading-relaxed font-sans font-bold tracking-wider opacity-50 bg-[linear-gradient(180deg,#8F8F8F_0%,rgba(143,143,143,0.1)_75%,rgba(66,66,66,0)_100%)] bg-clip-text text-transparent">
                    Drydash
                </h1>
            </div>
        </footer>
    );
};

export default Footer;