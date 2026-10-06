import React from "react";
import Container from "@/components/common/container";
import Image from "next/image";
import Hero_character from "@/../public/Assests/Images/Hero_charater.png";
import DownloadBtn from "../DownloadBtn/downloadBtn";
import Link from "next/link";

const Hero = () => {
    return (
        <Container>
            <div className="relative min-h-[calc(100dvh-136px)] px-4 pt-20 sm:px-6 sm:pt-24 lg:flex lg:h-screen lg:min-h-0 lg:items-center lg:justify-between lg:px-4 lg:pt-0">

                {/* Content */}
                <div className="relative z-0 flex w-full flex-col gap-y-5 sm:gap-y-6 pt-[10%] lg:w-1/2 lg:pt-0">
                    <h1 className="text-h1">
                        Same-Day
                        <br />
                        Dry Cleaning
                    </h1>

                    <p className="text-body w-full max-w-[360px] lg:w-[80%] xl:w-[60%]">
                        Get your shoes and apparel restored the same day, with free pickup, delivery, and zero hidden charges
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <DownloadBtn />

                        <Link
                            href="/about-us"
                            className="flex shrink-0 cursor-pointer justify-center rounded-lg border border-primary bg-transparent p-[2px] 2xl:rounded-xl"
                        >
                            <button className="flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-transparent px-6 text-[15px] text-primary transition-transform active:scale-[0.98] sm:px-8 2xl:h-14 2xl:w-50 2xl:text-lg">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Character */}
                <div className="mt-8 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
                    <Image
                        src={Hero_character}
                        alt="DryDash cleaning professional"
                        priority
                        className="max-h-[70vh] w-auto object-contain"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;