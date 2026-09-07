'use client'
import React from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import {
    LightningIcon,
    ShieldCheckIcon,
    TruckIcon,
    LeafIcon,
    HeartIcon,
    CheckCircleIcon,
    TShirtIcon,
    WashingMachineIcon,
    FootprintsIcon,
    WindIcon,

} from '@phosphor-icons/react';
import { Car, Clock, Handbag, House } from 'phosphor-react';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';

const differentiatorFeatures = [
    {
        icon: <LightningIcon size={24} weight="fill" className="text-primary" />,
        title: "Fast & Reliable",
        description: "Quick turnaround times with 24-hour delivery options to match your lifestyle."
    },
    {
        icon: <ShieldCheckIcon size={24} weight="fill" className="text-primary" />,
        title: "Premium Fabric Care",
        description: "Advanced cleaning methods that ensure deep cleaning without damage."
    },
    {
        icon: <TruckIcon size={24} weight="fill" className="text-primary" />,
        title: "Doorstep Convenience",
        description: "Easy pickup and delivery designed to save your time and effort."
    },
    {
        icon: <LeafIcon size={24} weight="fill" className="text-primary" />,
        title: "Eco-Conscious Process",
        description: "Efficient and responsible cleaning practices for better sustainability."
    },
    {
        icon: <HeartIcon size={24} weight="fill" className="text-primary" />,
        title: "Customer-First Approach",
        description: "Every service is designed to deliver maximum satisfaction and trust."
    }
];

const serviceItems = [
    { icon: <WashingMachineIcon size={28} />, text: "Dry Cleaning" },
    { icon: <FootprintsIcon size={28} />, text: "Premium Shoe Spa" },
    { icon: <House size={28} weight="fill" />, text: "On-site" },
    { icon: <Car size={28} weight="fill" />, text: "Car Wash" },
    { icon: <Clock size={28} weight="fill" />, text: "8-Hours Delivery" },
    { icon: <Handbag size={28} weight="fill" />, text: "Premium Bag Care" },
    { icon: <WindIcon size={28} />, text: "Ironing & Pressing" }
];

const AboutUsPage = () => {
    return (
        <main className="min-h-screen pb-20 mt-10">
            <Container>
                {/* ── HERO SECTION ── */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mt-12 sm:mt-16 md:mt-24 mb-10 sm:mb-14 md:mb-16 gap-2 sm:gap-3">
                        <h1 className="text-h2 text-foreground">
                            About drydash
                        </h1>
                        <p className="text-body text-foreground/60 max-w-xl">
                            Owned and operated by Gyld Solutions Private Limited
                        </p>
                    </div>
                </InView>

                {/* ── CONTENT CONTAINER ── */}
                <div className="w-full max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 mb-16 sm:mb-24">

                    {/* Intro paragraph */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                    >
                        <div className="p-5 sm:p-7 md:p-8 squircle-sm bg-[#F6F7F9] border border-black/5">
                            <p className="text-body text-foreground/80 leading-relaxed">
                                drydash is a premium dryclean and garment care platform developed and operated by Gyld Solutions Pvt. Ltd., a forward-thinking company focused on building innovative, technology-driven service solutions.
                            </p>
                        </div>
                    </InView>

                    {/* Redefining apparel */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                        }}
                    >
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="text-h3 text-foreground">
                                Redefining Drycleaning with Speed, Care & Convenience
                            </h2>
                            <div className="flex flex-col gap-2.5 sm:gap-3 text-foreground/80">
                                <p className="text-body leading-relaxed">
                                    drydash is built for modern lifestyles where time matters. We provide seamless, on-demand shoe spa and dry cleaning services with fast doorstep pickup and delivery.
                                </p>
                                <p className="text-body leading-relaxed">
                                    Our goal is simple — eliminate the hassle of drycleaning while delivering premium quality care.
                                </p>
                            </div>
                        </div>
                    </InView>

                    {/* Who We Are */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } }
                        }}
                    >
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h3 className="text-h3 text-foreground">Who We Are</h3>
                            <div className="flex flex-col gap-2.5 sm:gap-3 text-foreground/80">
                                <p className="text-body leading-relaxed">
                                    We are a tech-enabled service platform delivering reliable, high-quality garment care solutions. From daily wear to delicate fabrics and footwear, drydash ensures every item is handled with precision and expertise.
                                </p>
                                <p className="text-body leading-relaxed">
                                    We combine smart logistics, professional cleaning processes, and customer-centric design to deliver a smooth and dependable experience.
                                </p>
                            </div>
                        </div>
                    </InView>

                    {/* ── VISION & MISSION COMBO CARD ── */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <div className="bg-[#D8EBE1] border border-black/5 p-6 sm:p-8 md:p-12 squircle md:squircle-lg w-full shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-h3 text-foreground">Our Vision</h3>
                                    <p className="text-body text-foreground/80 leading-relaxed">
                                        To become the most trusted on-demand dry cleaning and garment care brand, known for speed, quality, and consistency.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:gap-4">
                                    <h3 className="text-h3 text-foreground">Our Mission</h3>
                                    <ul className="flex flex-col gap-3 sm:gap-4">
                                        {[
                                            "Deliver hassle-free dry cleaning and garment care services using smart technology",
                                            "Maintain premium quality standards in dry cleaning and garment care",
                                            "Ensure fast and reliable doorstep pickup & delivery",
                                            "Create a seamless and satisfying customer experience"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon size={20} weight="regular" className="text-primary shrink-0 mt-0.5" />
                                                <span className="text-body text-foreground/85 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </InView>

                    {/* ── DIFFERENTIATORS GRID ── */}
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <h2 className="text-h3 text-foreground">What Makes drydash Different</h2>
                        </InView>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {differentiatorFeatures.map((feature, idx) => (
                                <InView
                                    key={idx}
                                    viewOptions={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.08 } }
                                    }}
                                    className="h-full"
                                >
                                    <div className="h-full flex flex-col items-start p-5 sm:p-6 squircle-sm border border-black/10 bg-background hover:border-primary/40 hover:shadow-md transition-all duration-300">
                                        <div className="mb-4 p-2.5 bg-primary/15 text-primary squircle rounded-xl flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-h4 text-foreground mb-2">{feature.title}</h4>
                                        <p className="text-body text-foreground/75 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </InView>
                            ))}
                        </div>
                    </div>

                    {/* ── OUR SERVICES GRID ── */}
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <h2 className="text-h3 text-foreground">Our Services</h2>
                        </InView>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                            {serviceItems.map((service, idx) => (
                                <InView
                                    key={idx}
                                    viewOptions={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.05 } }
                                    }}
                                >
                                    <div className="border border-black/10 p-4 sm:p-5 squircle-sm flex items-center gap-4 bg-background hover:bg-primary/[0.03] hover:border-primary/40 transition-all duration-300 cursor-default">
                                        <div className="text-primary shrink-0">
                                            {service.icon}
                                        </div>
                                        <span className="text-body font-medium text-foreground">
                                            {service.text}
                                        </span>
                                    </div>
                                </InView>
                            ))}
                        </div>
                    </div>

                    {/* ── CTA SECTION ── */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <div className="mt-8 sm:mt-12 md:mt-16 pt-12 sm:pt-16 border-t border-black/10 text-center flex flex-col items-center gap-3 sm:gap-4">
                            <h3 className="text-h2 text-foreground max-w-2xl leading-tight">
                                Freshness, Care & Confidence — Delivered
                            </h3>
                            <p className="text-body text-foreground/75 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                                At drydash, we don't just clean clothes — we deliver freshness, care, and confidence with every order.
                            </p>
                            <DownloadBtn />
                        </div>
                    </InView>
                </div>
            </Container>
        </main>
    );
};

export default AboutUsPage;