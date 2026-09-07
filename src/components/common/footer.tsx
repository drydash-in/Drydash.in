'use client';
import React from 'react';
import Container from './container';
import Image from 'next/image';
import Logo from '@/../public/Assests/Logo/logo.svg';
import Link from 'next/link';
import { useLenis } from '@/lib/lenis';
import { ArrowUp } from 'phosphor-react';

const Footer = () => {
    const lenis = useLenis();

    const handleScrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <footer className="bg-black/5 overflow-hidden pt-20 lg:pt-32 w-full flex flex-col relative">
            <Container>
                {/* Top Section / Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 lg:mb-32 md:px-4 px-0">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Image src={Logo} alt="DryDash Logo" className="w-[140px] 2xl:w-[160px] h-auto" priority />
                        <p className="text-body max-w-[280px]">
                            The premium destination for sneaker care, restoration, and dry cleaning. We bring life back to your favorite pairs.
                        </p>
                    </div>

                    {/* Areas we serve */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[14px] font-franie tracking-wide font-medium">Areas we serve</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Dry Cleaning in Delhi', href: '/dry-cleaning-in-delhi' },
                                { name: 'Dry Cleaning in Gurgaon', href: '/dry-cleaning-in-gurgaon' },
                                { name: 'Dry Cleaning in Noida', href: '/dry-cleaning-in-noida' },
                                { name: 'Dry Cleaning in Ghaziabad', href: '/dry-cleaning-in-ghaziabad' },
                                { name: 'Dry Cleaning in Greater Noida', href: '/dry-cleaning-in-greater-noida' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="xl:text-[12px] text-[10px] font-mulish hover:text-primary transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[14px] font-franie tracking-wide font-medium">Quick Links</h4>
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
                                    <Link href={link.href} className="xl:text-[12px] text-[10px] font-mulish hover:text-primary transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6 lg:mx-auto">
                        <h4 className="text-[14px] font-franie tracking-wide font-medium">Contact</h4>
                        <ul className="flex flex-col gap-4 text-[#8a928e] text-[13px] 2xl:text-[14px]">
                            <li>
                                <a href="mailto:support@drydash.in" className="xl:text-[12px] text-[10px] font-mulish hover:text-primary transition-colors">support@drydash.in</a>
                            </li>
                            <li>
                                <a href="tel:+918287636979" className="xl:text-[12px] text-[10px] font-mulish hover:text-primary transition-colors">+91 8287636979</a>
                            </li>
                            {/* <li className="leading-relaxed max-w-[200px]">
                                Tower 15 211 ATS Le-grandiose noida 150, 201310
                            </li> */}
                        </ul>
                        <div className="pt-1">
                            <Link href="/contact" className="inline-flex items-center">
                                <button className="h-9 px-5 rounded-full border border-primary text-primary font-franie text-[13px] font-medium transition-all hover:bg-primary hover:text-white active:scale-95 cursor-pointer whitespace-nowrap flex items-center justify-center shadow-xs">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Scroll to top */}
                <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-10 pb-4 relative z-10 border-t border-black/10 dark:border-white/10">
                    <p className="text-body text-[12px] sm:text-[13px] text-center sm:text-left">
                        © {new Date().getFullYear()} drydash. All rights reserved.
                    </p>

                    <button
                        onClick={handleScrollToTop}
                        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-primary hover:border-primary text-black/80 dark:text-white/80 hover:text-white font-franie text-[12px] sm:text-[13px] font-medium backdrop-blur-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <span>Back to top</span>
                        <span className="w-5 h-5 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                            <ArrowUp size={12} weight="bold" className="text-primary group-hover:text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </span>
                    </button>
                </div>
            </Container>

            {/* Giant Background Text */}
            <div className="w-full md:h-100 h-30 flex justify-center pb-0 pointer-events-none select-none mt-2 lg:mt-6 overflow-hidden">
                <h1 className="text-[15vw] leading-relaxed font-halfre font-bold tracking-wider opacity-50 bg-[linear-gradient(180deg,#8F8F8F_0%,rgba(143,143,143,0.1)_75%,rgba(66,66,66,0)_100%)] bg-clip-text text-transparent">
                    drydash
                </h1>
            </div>
        </footer>
    );
};

export default Footer;