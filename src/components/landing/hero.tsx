import React from "react";
import Container from "@/components/common/container";
import Image from "next/image";
import Hero_character from "@/../public/Assests/Images/Hero_charater.png";
import DownloadBtn from "../DownloadBtn/downloadBtn";
import Link from "next/link";

const Hero = () => {
    return (
        <Container>
            <div className="relative min-h-[calc(100dvh-136px)] px-4 pt-20 sm:px-6 sm:pt-24 xl:flex xl:h-screen xl:min-h-0 xl:items-center xl:justify-between xl:px-4 xl:pt-0">

                {/* Content */}
                <div className="relative z-0 flex w-full flex-col gap-y-5 sm:gap-y-6 xl:w-1/2 xl:pt-[0%] pt-[10%]">
                    <h1 className="text-h1">
                        Same-Day
                        <br />
                        Dry Cleaning
                    </h1>

                    <p className="text-body w-full max-w-[360px] xl:w-[60%]">
                        Get your shoes and apparels restored the same day, free pick up and delivery and ₹0 hidden charges.
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
                <div className="">
                    <Image
                        src={Hero_character}
                        alt="DryDash cleaning professional"
                        priority
                        className=""
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;