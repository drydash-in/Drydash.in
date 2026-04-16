'use client';
import React from 'react';
import Container from '@/components/common/container';
import Image from 'next/image';
import HowToUseMockup from '@/../public/Assests/SVG/how_to_use_mockup.svg';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';

const steps = [
    {
        num: "01.",
        title: "Schedule a Pickup",
        desc: "Book a pickup in seconds through the app—choose a time that works best for you."
    },
    {
        num: "02.",
        title: "Doorstep Pickup",
        desc: "Our team will pick up your items from your doorstep at the scheduled time."
    },
    {
        num: "03.",
        title: "Professional Cleaning",
        desc: "Your items are professionally cleaned using premium products and advanced techniques."
    },
    {
        num: "04.",
        title: "Delivered Fresh at Your Doorstep",
        desc: "Your freshly cleaned items are delivered back to your doorstep, fresh and ready to use."
    }
];

const Howtouse = () => {
    return (
        <section className="bg-[linear-gradient(180deg,rgba(21,43,40,1)_0%,rgba(21,43,40,0)_100%)] relative w-full pt-20 pb-20 mb-20 md:block hidden">
            <Container>
                {/* Header */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col items-center justify-center text-center mb-20 z-10 relative">
                        <h2 className="2xl:text-4xl text-3xl font-black text-[#E2DEC6] mb-5 tracking-tight">
                            How it works ?
                        </h2>
                        <p className="2xl:text-[16px] text-[15px] leading-[24.2px] text-[#8a928e] max-w-lg mx-auto tracking-[2.64%]">
                            Getting your clothes cleaned has never been easier. Just a few<br className="hidden md:block" />
                            taps and we take care of the rest.
                        </p>
                    </div>
                </InView>

                {/* Content Grid */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 2xl:gap-20 w-full max-w-7xl mx-auto relative px-4 lg:px-0">

                        {/* Left Steps (01 and 03) */}
                        <div className="flex flex-col space-y-16 lg:items-end z-10 w-full lg:w-[320px]">
                            {/* Step 1 */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                                }}
                                className="flex flex-col items-start text-left w-full max-w-[280px]"
                            >
                                <div className="bg-[#FFCC00] text-[#152B28] w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold tracking-tight mb-5">
                                    01.
                                </div>
                                <h3 className="text-[18px] 2xl:text-[20px] font-semibold text-[#E2DEC6] mb-3">{steps[0].title}</h3>
                                <p className="text-[#8a928e] text-[14px] 2xl:text-[15px] tracking-wide leading-relaxed">{steps[0].desc}</p>
                            </motion.div>
                            {/* Step 3 */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                                }}
                                className="flex flex-col items-start text-left w-full max-w-[280px]"
                            >
                                <div className="bg-[#FFCC00] text-[#152B28] w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold tracking-tight mb-5">
                                    03.
                                </div>
                                <h3 className="text-[18px] 2xl:text-[20px] font-semibold text-[#E2DEC6] mb-3">{steps[2].title}</h3>
                                <p className="text-[#8a928e] text-[14px] 2xl:text-[15px] tracking-wide leading-relaxed">{steps[2].desc}</p>
                            </motion.div>
                        </div>

                        {/* Center SVG Image */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, type: 'spring' } }
                            }}
                            className="relative w-full lg:w-auto flex justify-center items-center z-0 my-10 lg:my-0 shrink-0"
                        >
                            <Image
                                src={HowToUseMockup}
                                alt="How to use mockup"
                                className="w-full max-w-[320px] 2xl:max-w-[380px] h-auto object-contain z-10 relative drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Right Steps (02 and 04) */}
                        <div className="flex flex-col space-y-16 lg:items-start z-10 w-full lg:w-[320px]">
                            {/* Step 2 */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                }}
                                className="flex flex-col items-start text-left w-full max-w-[280px]"
                            >
                                <div className="bg-[#FFCC00] text-[#152B28] w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold tracking-tight mb-5">
                                    02.
                                </div>
                                <h3 className="text-[18px] 2xl:text-[20px] font-semibold text-[#E2DEC6] mb-3">{steps[1].title}</h3>
                                <p className="text-[#8a928e] text-[14px] 2xl:text-[15px] tracking-wide leading-relaxed">{steps[1].desc}</p>
                            </motion.div>
                            {/* Step 4 */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                }}
                                className="flex flex-col items-start text-left w-full max-w-[280px]"
                            >
                                <div className="bg-[#FFCC00] text-[#152B28] w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold tracking-tight mb-5">
                                    04.
                                </div>
                                <h3 className="text-[18px] 2xl:text-[20px] font-semibold text-[#E2DEC6] mb-3">{steps[3].title}</h3>
                                <p className="text-[#8a928e] text-[14px] 2xl:text-[15px] tracking-wide leading-relaxed">{steps[3].desc}</p>
                            </motion.div>
                        </div>

                    </div>
                </InView>
            </Container>
        </section>
    );
};

export default Howtouse;