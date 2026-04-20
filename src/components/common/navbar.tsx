'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import Logo from '@/../public/Assests/Logo/logo.svg';
import Logo from '@/../public/Assests/Logo/logo.svg';
import Container from './container';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { List, X, CaretDown } from 'phosphor-react';

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About Us",
            href: "/about-us",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Process",
            href: "/process",
        },
        {
            title: "Blogs",
            href: "/blogs",
        },
        {
            title: "We Serve",
            href: "#",
            children: [
                { title: "In Delhi", href: "/dry-cleaning-in-delhi" },
                { title: "In Gurugram", href: "/dry-cleaning-in-gurgaon" },
                { title: "In Noida", href: "/dry-cleaning-in-noida" },
                { title: "In Ghaziabad", href: "/dry-cleaning-in-ghaziabad" },
                { title: "In Greater Noida", href: "/dry-cleaning-in-greater-noida" },
            ]
        },

    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    // Close mobile menu on path change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
    }, [pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        // Hide navbar if scrolling down and passed 150px
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            // Show navbar if scrolling up or at top
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sticky top-0 z-50 bg-[#161511] border-b border-white/5"
        >
            <Container>
                <div className="flex items-center justify-between py-4">
                    <div className="shrink-0">
                        {/* <Image className='2xl:w-30 w-25 2xl:h-10 h-8' src={Logo} alt="Logo" priority /> */}
                        <Link href="/">
                            <Image
                                className="2xl:w-30 w-24 h-auto cursor-pointer"
                                src={Logo}
                                alt="Logo"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <ul
                            className="flex items-center gap-2 lg:gap-4 text-[#E2DEC6]"
                            onMouseLeave={() => setHovered(null)}
                        >
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                const hasChildren = item.children && item.children.length > 0;

                                return (
                                    <li
                                        key={item.title}
                                        className="relative"
                                        onMouseEnter={() => {
                                            setHovered(idx);
                                            if (hasChildren) setOpenDropdown(item.title);
                                        }}
                                        onMouseLeave={() => {
                                            setHovered(null);
                                            if (hasChildren) setOpenDropdown(null);
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`relative flex items-center justify-center px-4 py-2 2xl:text-[16px] text-[15px] font-normal transition-colors hover:text-[#03D391] ${isActive || openDropdown === item.title ? "text-[#03D391]" : ""}`}
                                        >
                                            {hovered === idx && !hasChildren && (
                                                <motion.span
                                                    transition={{
                                                        ease: "anticipate",
                                                        duration: 0.3,
                                                    }}
                                                    layoutId="hovered-span"
                                                    className="absolute inset-x-0 bottom-0 mx-auto h-[2px] w-full bg-[#03D391]"
                                                />
                                            )}
                                            <span className="relative z-10 flex items-center gap-1">
                                                {item.title}
                                                {hasChildren && (
                                                    <CaretDown
                                                        size={14}
                                                        className={`transition-transform duration-300 ${openDropdown === item.title ? "rotate-180" : ""}`}
                                                    />
                                                )}
                                            </span>
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {hasChildren && openDropdown === item.title && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute left-0 top-full pt-2 w-48 z-50"
                                                >
                                                    <div className="bg-[#161511]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                                        <ul className="py-2">
                                                            {item.children?.map((child, childIdx) => (
                                                                <li key={child.title}>
                                                                    <Link
                                                                        href={child.href}
                                                                        className="block px-6 py-3 text-[14px] text-[#E2DEC6] hover:bg-[#03D391]/10 hover:text-[#03D391] transition-colors"
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className='group relative overflow-hidden flex items-center justify-center bg-[#FACC15] 2xl:w-42 w-32 2xl:h-12 h-8 2xl:rounded-xl rounded-md cursor-pointer transition-transform active:scale-95 before:absolute before:content-[""] before:w-[250%] before:h-[400%] before:bg-[#03D391] before:-left-[250%] before:top-1/2 before:-translate-y-1/2 before:rounded-r-[100%] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-full'>
                            <span className="relative z-10 text-[#161511] transition-colors duration-300 font-medium 2xl:text-[16px] text-[15px]">
                                Contact Us
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#E2DEC6] p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-0 top-[64px] bg-[#161511] z-40 overflow-hidden flex flex-col p-8"
                    >
                        <nav className="flex flex-col gap-6">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                const hasChildren = item.children && item.children.length > 0;
                                const isMobileSubmenuOpen = activeMobileSubmenu === item.title;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={item.href}
                                                className={`text-md font-medium ${isActive ? "text-[#03D391]" : "text-[#E2DEC6]"}`}
                                            >
                                                {item.title}
                                            </Link>

                                            {hasChildren && (
                                                <button
                                                    onClick={() => setActiveMobileSubmenu(isMobileSubmenuOpen ? null : item.title)}
                                                    className="p-2 text-[#E2DEC6]"
                                                >
                                                    <CaretDown
                                                        size={20}
                                                        className={`transition-transform duration-300 ${isMobileSubmenuOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {hasChildren && isMobileSubmenuOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col gap-4 pl-4 border-l border-white/5 pb-2">
                                                        {item.children?.map((child) => (
                                                            <Link
                                                                key={child.title}
                                                                href={child.href}
                                                                className="text-sm font-normal text-[#8a928e] hover:text-[#03D391] transition-colors"
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className='group relative overflow-hidden flex items-center justify-center bg-[#FACC15] w-full h-14 rounded-xl cursor-pointer transition-transform active:scale-95'>
                                <span className="relative z-10 text-[#161511] font-bold text-md">
                                    Contact Us
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
