'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/../public/Assests/Logo/logo.svg';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { X, CaretDown } from 'phosphor-react';
import Container from './container';

const CAPSULE_BG = '#E6F2E9';
const CAPSULE_BORDER = '#CFE4D7';

const CAPSULE_TRANSITION = {
    ease: [0.588, -0.04, 0.33, 1.26] as const,
    duration: 0.55,
};


const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
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
            title: "About us",
            href: "/about-us",
        },
        {
            title: "Blogs",
            href: "/blogs",
        },
        {
            title: "We serve",
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

    const [isScrolled, setIsScrolled] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
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

    // Hysteresis threshold to completely eliminate scroll jitter
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 15 && isScrolled) {
            setIsScrolled(false);
        }
    });

    return (
        <>
            {/* Mobile Header (Fixed to Top) */}
            <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] pointer-events-auto">
                <div className="w-full px-5 h-14 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="shrink-0 flex items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Image
                            src={Logo}
                            alt="DryDash Logo"
                            priority
                            className="h-[18px] w-auto"
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-black focus:outline-none flex items-center justify-center cursor-pointer"
                        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} weight="bold" />
                        ) : (
                            <svg
                                width="24"
                                height="16"
                                viewBox="0 0 24 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="24" height="2.5" rx="1.25" fill="#000000" />
                                <rect y="6.75" width="24" height="2.5" rx="1.25" fill="#000000" />
                                <rect y="13.5" width="24" height="2.5" rx="1.25" fill="#000000" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "calc(100dvh - 56px)" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-x-0 top-14 bottom-0 bg-white z-40 overflow-y-auto flex flex-col justify-between p-6 pb-14 border-t border-gray-100 shadow-xl"
                        >
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item, idx) => {
                                    const isActive = pathname === item.href ||
                                        (item.href !== "/" && pathname?.startsWith(item.href)) ||
                                        (item.children && item.children.some(child => pathname === child.href));
                                    const hasChildren = item.children && item.children.length > 0;
                                    const isMobileSubmenuOpen = activeMobileSubmenu === item.title;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + idx * 0.03 }}
                                            className="flex flex-col border-b border-neutral-100 pb-3"
                                        >
                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={item.href}
                                                    onClick={() => {
                                                        if (!hasChildren) setIsMobileMenuOpen(false);
                                                    }}
                                                    className={`text-base font-mulish font-medium ${isActive ? "text-[#00751E] font-semibold" : "text-[#1B2B25]"}`}
                                                >
                                                    {item.title}
                                                </Link>

                                                {hasChildren && (
                                                    <button
                                                        onClick={() => setActiveMobileSubmenu(isMobileSubmenuOpen ? null : item.title)}
                                                        className="p-2 text-[#1B2B25] hover:text-[#00751E] transition-colors"
                                                        aria-label="Toggle Submenu"
                                                    >
                                                        <CaretDown
                                                            size={18}
                                                            className={`transition-transform duration-300 ${isMobileSubmenuOpen ? "rotate-180 text-[#00751E]" : ""}`}
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
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                        className="overflow-hidden mt-2"
                                                    >
                                                        <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#00751E]/20 py-1">
                                                            {item.children?.map((child) => {
                                                                const isChildActive = pathname === child.href;
                                                                return (
                                                                    <Link
                                                                        key={child.title}
                                                                        href={child.href}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className={`text-sm font-mulish transition-colors ${isChildActive ? "text-[#00751E] font-semibold" : "text-[#1B2B25]/80 hover:text-[#00751E]"}`}
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="mt-8 pt-4 flex flex-col gap-3"
                            >
                                <div onClick={() => setIsMobileMenuOpen(false)}>
                                    <ShoeSpaButton />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Desktop Navigation (Floating capsule) */}
            <header className="hidden lg:block fixed top-0 inset-x-0 z-50 pointer-events-none">
                <Container>
                    {/* Constant-size outer row */}
                    <div className="w-full flex items-center justify-center pt-3 pb-2 px-4 sm:px-6">
                        <div className="pointer-events-auto flex items-center justify-center w-full">

                            {/* Capsule */}
                            <motion.nav
                                initial={false}
                                animate={{
                                    width: isScrolled ? "0%" : "100%",
                                    backgroundColor: isScrolled ? CAPSULE_BG : "rgba(230,242,233,0)",
                                    borderColor: isScrolled ? CAPSULE_BORDER : "rgba(207,228,215,0)",
                                    paddingLeft: isScrolled ? 16 : 0,
                                    paddingRight: isScrolled ? 8 : 0,
                                    paddingTop: isScrolled ? 8 : 0,
                                    paddingBottom: isScrolled ? 8 : 0,
                                    columnGap: isScrolled ? 28 : 48,
                                }}
                                transition={CAPSULE_TRANSITION}
                                style={{ minWidth: "fit-content" }}
                                className="flex items-center justify-between rounded-full border border-transparent"
                            >
                                {/* Logo */}
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <Image
                                            className=""
                                            src={Logo}
                                            alt="DryDash Logo"
                                            priority
                                        />
                                    </Link>
                                </div>

                                {/* Desktop Navigation Links */}
                                <div className="hidden lg:block ">
                                    <ul
                                        className="flex items-center gap-4 xl:gap-6 font-mulish text-foreground"
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {navItems.map((item, idx) => {
                                            const isActive = pathname === item.href ||
                                                (item.href !== "/" && pathname?.startsWith(item.href)) ||
                                                (item.children && item.children.some(child => pathname === child.href));
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
                                                        className={`relative flex items-center justify-center px-0 py-1 text-body transition-colors hover:text-primary ${isActive || openDropdown === item.title ? "text-primary" : "text-foreground"
                                                            }`}
                                                    >
                                                        <span className="relative z-10 flex items-center gap-1">
                                                            {item.title}
                                                            {hasChildren && (
                                                                <CaretDown
                                                                    size={14}
                                                                    className={`transition-transform duration-300 ${openDropdown === item.title ? "rotate-180 text-primary" : ""
                                                                        }`}
                                                                />
                                                            )}
                                                        </span>

                                                        {hovered === idx && !hasChildren && (
                                                            <motion.span
                                                                transition={{
                                                                    ease: "easeInOut",
                                                                    duration: 0.2,
                                                                }}
                                                                layoutId="hovered-span"
                                                                className="absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full bg-[#00751E] rounded-full"
                                                            />
                                                        )}
                                                    </Link>

                                                    {/* Dropdown Menu */}
                                                    <AnimatePresence>
                                                        {hasChildren && openDropdown === item.title && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                                className="absolute left-0 top-full pt-3 w-52 z-50"
                                                            >
                                                                <div className="bg-white/95 backdrop-blur-xl border border-emerald-950/10 rounded-2xl p-1.5 shadow-xl">
                                                                    <ul className="py-1">
                                                                        {item.children?.map((child) => {
                                                                            const isChildActive = pathname === child.href;
                                                                            return (
                                                                                <li key={child.title}>
                                                                                    <Link
                                                                                        href={child.href}
                                                                                        className={`block px-4 py-2.5 text-[14px] font-mulish rounded-xl transition-colors ${isChildActive
                                                                                            ? "bg-[#E6F2E9] text-[#00751E] font-semibold"
                                                                                            : "text-[#1B2B25] hover:bg-[#E6F2E9]/70 hover:text-[#00751E]"
                                                                                            }`}
                                                                                    >
                                                                                        {child.title}
                                                                                    </Link>
                                                                                </li>
                                                                            );
                                                                        })}
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

                                {/* Shoe Spa button (now inside the capsule) */}
                                <div className="hidden lg:flex items-center">
                                    <ShoeSpaButton />
                                </div>
                            </motion.nav>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

const ContactUsButton = ({ buttonClassName }: { buttonClassName?: string }) => (
    <Link href="/contact" className="shrink-0 inline-flex items-center">
        <button className={`px-5 py-5 rounded-full border border-primary text-primary font-franie text-button font-medium transition-all hover:bg-primary hover:text-white active:scale-95 cursor-pointer whitespace-nowrap ${buttonClassName || ''}`}>
            Contact us
        </button>
    </Link>
);

const ShoeSpaButton = () => (
    <Link href="/services#shoe-spa" className="relative group shrink-0 inline-flex items-center">
        <div
            className="relative flex items-center justify-center px-6 py-2 rounded-full text-white font-franie text-[14px] font-medium transition-transform active:scale-95 shadow-sm bg-cover bg-center bg-no-repeat overflow-hidden min-w-[110px] text-center select-none"
            style={{ backgroundImage: "url('/Assests/gradiants/ShoeSpaGradiantBG.svg')" }}
        >
            Shoe spa
        </div>
        <span className="absolute -bottom-2.5 right-5 z-10 bg-[#E5E632] text-foreground text-[10px] tracking-wide px-2 py-[1.5px] rounded-full tracking-tight whitespace-nowrap select-none">
            most ordered
        </span>
    </Link>
);

export default Navbar;
