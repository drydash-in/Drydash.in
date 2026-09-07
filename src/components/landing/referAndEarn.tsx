'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import ReferIllustration from '@/../public/Assests/Images/Refer_illustration.png';
import PlaystoreLogo from '@/../public/Assests/SVG/playstore.svg';
import AppstoreLogo from '@/../public/Assests/SVG/app-store.svg';

const ReferAndEarn = () => {
    return (
        <section className="w-full py-12 md:py-20">
            <Container className="flex justify-center items-center px-4 sm:px-6">
                {/* Refer a friend card */}
                <div className="relative w-full max-w-[540px] xl:max-w-[680px] 2xl:max-w-[780px] bg-[#D8EBE1] squircle-lg overflow-hidden flex flex-col items-center pt-8 xl:pb-0 pb-10 sm:pt-12 sm:pb-0 transition-all duration-300 ">
                    {/* Header */}
                    <h2 className="text-h3 text-foreground font-franie text-center">
                        Refer a friend
                    </h2>

                    {/* Illustration */}
                    <div className="relative my-3 flex h-[300px] w-full items-center justify-center overflow-hidden sm:my-8 sm:h-[380px] md:my-10 md:h-[420px] xl:h-[460px]">
                        <Image
                            src={ReferIllustration}
                            alt="Refer a friend with Drydash"
                            priority
                            className="absolute h-auto w-[145%] max-w-none object-contain select-none pointer-events-none sm:w-[135%] md:w-[125%] xl:w-[130%]"
                        />
                    </div>

                    {/* Reward Text */}
                    <div className="flex flex-col items-center text-center mt-1 mb-3 transform xl:-translate-y-24 translate-y-0">
                        <h3 className="text-h3 text-primary">
                            you get ₹200
                        </h3>
                        <h3 className="text-h3 text-primary">
                            they get ₹100
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-body text-foreground/80 text-center max-w-[280px] sm:max-w-[360px] mx-auto mb-6 sm:mb-8 leading-relaxed transform xl:-translate-y-24 translate-y-0">
                        download the drydash app & book your first pickup today
                    </p>

                    {/* App Store & Google Play Buttons */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto transform xl:-translate-y-24 translate-y-0">
                        <a
                            href="https://apps.apple.com/in/app/drydash/id6761757578"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[180px]"
                        >
                            <button className="w-full bg-[#18181B] hover:bg-black text-white flex items-center gap-3 px-4 py-2.5 squircle-md transition-all active:scale-95 cursor-pointer shadow-sm">
                                <Image
                                    src={AppstoreLogo}
                                    alt="App Store"
                                    className="w-7 h-7 object-contain shrink-0"
                                />
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-[9px] text-white/70 font-medium uppercase tracking-wider leading-none">
                                        GET IT ON
                                    </span>
                                    <span className="text-[15px] font-bold text-white tracking-tight leading-tight mt-0.5">
                                        App Store
                                    </span>
                                </div>
                            </button>
                        </a>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.drydash.newCustomer&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[180px]"
                        >
                            <button className="w-full bg-[#18181B] hover:bg-black text-white flex items-center gap-3 px-4 py-2.5 squircle-md transition-all active:scale-95 cursor-pointer shadow-sm">
                                <Image
                                    src={PlaystoreLogo}
                                    alt="Google Play"
                                    className="w-7 h-7 object-contain shrink-0"
                                />
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-[9px] text-white/70 font-medium uppercase tracking-wider leading-none">
                                        GET IT ON
                                    </span>
                                    <span className="text-[15px] font-bold text-white tracking-tight leading-tight mt-0.5">
                                        Google play
                                    </span>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ReferAndEarn;