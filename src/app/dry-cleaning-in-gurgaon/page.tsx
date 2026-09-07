'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {
    CheckCircle,
    Truck,
    Clock,
    Leaf,
    User,
} from 'phosphor-react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';
import { testimonialsRow2, TestimonialCard } from '@/components/landing/testimonials';

// Data
const servicesList = [
    {
        title: "Dry Cleaning",
        desc: "Delicate treatment for high-fashion pieces, ensuring longevity and pristine texture.",
        icon: CheckCircle
    },
    {
        title: "Onsite Service",
        desc: "Professional home care and management services delivered by our vetted specialists.",
        icon: User
    },
    {
        title: "Car Wash",
        desc: "Professional home care and management services delivered by our vetted specialists.",
        icon: Truck
    },
    {
        title: "Express",
        desc: "Ultra-priority 8-hour turnaround for your most urgent care requirements.",
        icon: Clock
    }
];

const curatorPoints = [
    { title: "Reliable turnaround", desc: "Automated tracking ensures your items return precisely when promised, every single time." },
    { title: "Professional handling", desc: "Certified fabric specialists inspect each item before processing to ensure optimal care." },
    { title: "Transparent pricing", desc: "No hidden surcharges or pickup fees. See your quote upfront with our digital pricing engine." },
    { title: "Convenient booking", desc: "Schedule a pickup in 3 taps via our streamlined digital interface." }
];

const stats = [
    { label: "Free Pickup & Delivery", icon: Truck },
    { label: "Same-Day & 8-Hour", icon: Clock },
    { label: "Eco-Friendly Processes", icon: Leaf }
];

const DryCleaningPage = () => {
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
    const heroButtonsRef = useRef<HTMLDivElement>(null);
    const heroStatsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(SplitText);

            const ctx = gsap.context(() => {
                const titleSplit = new SplitText(heroTitleRef.current, { type: "words,chars" });

                const titleTargets = titleSplit.chars;
                const subtitleTarget = heroSubtitleRef.current;
                const btnTargets = heroButtonsRef.current ? Array.from(heroButtonsRef.current.children) : [];
                const statsTargets = heroStatsRef.current ? Array.from(heroStatsRef.current.children) : [];

                // Initial baseline setting
                gsap.set(titleTargets, { y: 40, opacity: 0, rotateX: -40 });
                gsap.set(subtitleTarget, { y: 20, opacity: 0 });
                gsap.set(btnTargets, { y: 20, opacity: 0 });
                gsap.set(statsTargets, { y: 10, opacity: 0 });

                const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

                tl.to(titleTargets, {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.02,
                    duration: 1.2
                })
                    .to(subtitleTarget, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    }, "-=0.8")
                    .to(btnTargets, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.6
                    }, "-=0.6")
                    .to(statsTargets, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.5
                    }, "-=0.4");
            });

            return () => ctx.revert();
        }
    }, []);

    return (
        <main className="text-foreground overflow-hidden">
            {/* ── HERO SECTION ── */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-primary/10 border border-primary/20 px-4 py-1.5 squircle mb-6 sm:mb-8"
                        >
                            <span className="text-primary text-[13px] font-bold tracking-widest uppercase">Servicing All Gurgaon Areas</span>
                        </motion.div>

                        {/* Title */}
                        <h1
                            ref={heroTitleRef}
                            className="text-h1 text-foreground mb-4 sm:mb-6"
                        >
                            Premium Cleaning Services<br />
                            <span className="text-primary">Across Gurgaon</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            ref={heroSubtitleRef}
                            className="text-body text-foreground/70 max-w-xl mx-auto mb-8 sm:mb-10"
                        >
                            overnight garment and shoe care
                        </p>

                        {/* Buttons */}
                        <div ref={heroButtonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16 w-full sm:w-auto px-6">
                            <DownloadBtn />
                        </div>

                        {/* Quick Stats */}
                        <div ref={heroStatsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-6 w-full max-w-3xl text-left">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-3.5 p-3.5 sm:p-4 squircle-sm border border-black/10 bg-background hover:border-primary/40 transition-colors">
                                    <div className="w-10 h-10 squircle rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                                        <stat.icon size={22} weight="regular" />
                                    </div>
                                    <span className="text-body text-foreground font-medium tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── SERVICES SECTION ── */}
            <section className="py-16 sm:py-24 md:py-28">
                <Container>
                    <div className="mb-12 sm:mb-16">
                        <InView
                            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <h2 className="text-h3 text-foreground mb-2 sm:mb-3">
                                Expert Care for Every Fabric
                            </h2>
                            <p className="text-body text-foreground/60 max-w-xl">
                                Meticulous cleaning techniques powered by modern logistics.
                            </p>
                        </InView>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {servicesList.map((svc, i) => (
                            <InView
                                key={i}
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 25 },
                                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }
                                }}
                                className="h-full"
                            >
                                <div className="group bg-background border border-black/10 squircle-lg p-6 sm:p-8 h-full flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default">
                                    <div className="w-12 h-12 bg-primary/15 text-primary squircle rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <svc.icon size={26} weight="regular" />
                                    </div>
                                    <h3 className="text-h4 text-foreground mb-2 sm:mb-3">{svc.title}</h3>
                                    <p className="text-body text-foreground/75 leading-relaxed">
                                        {svc.desc}
                                    </p>
                                </div>
                            </InView>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── DIGITAL CURATOR SECTION ── */}
            <section className="py-16 sm:py-24 md:py-28 bg-[#F6F7F9] border-y border-black/5">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">
                        {/* Left: Text */}
                        <div className="w-full lg:w-1/2">
                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <h2 className="text-h3 text-foreground mb-4 sm:mb-6 leading-tight">
                                    The Digital Curator Approach to Cleanliness.
                                </h2>
                                <p className="text-body text-foreground/75 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                                    We treat every garment as a curated piece of art, ensuring the highest standards of hygiene and fabric integrity.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    {curatorPoints.map((point, i) => (
                                        <div key={i} className="p-4 sm:p-5 squircle-sm bg-background border border-black/5 flex flex-col gap-2.5 hover:border-primary/40 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-7 h-7 squircle rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                                                    <CheckCircle size={16} weight="bold" className="text-primary" />
                                                </div>
                                                <h4 className="text-h4 text-foreground font-semibold">{point.title}</h4>
                                            </div>
                                            <p className="text-body text-foreground/70 leading-relaxed">
                                                {point.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </InView>
                        </div>

                        {/* Right: Image */}
                        <div className="w-full lg:w-1/2">
                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                            >
                                <div className="relative squircle-lg overflow-hidden group shadow-xl border border-black/10">
                                    <Image
                                        src="/Assests/Images/curator_section.png"
                                        alt="Modern apparel"
                                        width={1200}
                                        height={1400}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </InView>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── TESTIMONIALS SECTION ── */}
            <section className="py-16 sm:py-24 md:py-32 bg-background overflow-hidden relative">
                <Container>
                    <div className="text-center mb-12 sm:mb-16 px-4">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <h2 className="text-h3 text-foreground mb-3 sm:mb-4 tracking-tight">
                                Loved by Gurgaon’s Discerning
                            </h2>
                            <p className="text-body text-foreground/60 max-w-2xl mx-auto">
                                Hear from our clients across Gurgaon and beyond.
                            </p>
                        </InView>
                    </div>
                </Container>

                <div className="w-full flex flex-col gap-8 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    <InfiniteSlider speed={50} gap={24}>
                        {testimonialsRow2.map((testimonial) => (
                            <TestimonialCard key={'row2-' + testimonial.id} data={testimonial} />
                        ))}
                    </InfiniteSlider>
                </div>
            </section>

            {/* ── FINAL CTA SECTION ── */}
            <section className="py-16 sm:py-24 md:py-32">
                <Container>
                    <div className="bg-primary squircle-lg p-8 sm:p-14 md:p-20 flex flex-col items-center text-center overflow-hidden relative shadow-xl text-background">
                        {/* Decorative background circle */}
                        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] bg-black/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Side Illustrations */}
                        <div className="hidden md:block absolute bottom-0 left-0 md:w-[280px] lg:w-[380px] xl:w-[450px] 2xl:w-[600px] pointer-events-none transform -scale-x-100 z-10 origin-bottom">
                            <img src="/Assests/SVG/peep_area_we_serve.svg" alt="Illustration" className="w-full h-auto object-contain object-bottom" />
                        </div>
                        <div className="hidden md:block absolute bottom-0 right-0 md:w-[280px] lg:w-[380px] xl:w-[450px] 2xl:w-[600px] pointer-events-none z-10 origin-bottom">
                            <img src="/Assests/SVG/peep_area_we_serve.svg" alt="Illustration" className="w-full h-auto object-contain object-bottom" />
                        </div>

                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                            }}
                        >
                            <h2 className="text-h2 text-background mb-4 sm:mb-6 tracking-tight max-w-3xl leading-tight relative z-20">
                                Experience Effortless Cleaning Today
                            </h2>
                            <p className="text-body text-background/90 mb-8 sm:mb-10 max-w-xl text-center mx-auto relative z-20 leading-relaxed">
                                Schedule your pickup in minutes. Let us handle the cleaning while you focus on what matters.
                            </p>
                            <div className="relative z-20">
                                <DownloadBtn variant="minimal_black" />
                            </div>
                        </InView>
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default DryCleaningPage;
