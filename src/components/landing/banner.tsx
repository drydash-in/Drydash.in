'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import CheckBackground from '@/../public/Assests/SVG/Banner/checkBackground.svg';
import CheckIcon from '@/../public/Assests/SVG/Banner/check.svg';

const Banner = () => {
    return (
        <Container className="py-8 md:py-16 flex items-center justify-center">
            <div className="w-full flex items-center justify-center">
                <div className="squircle-lg w-full bg-primary text-background p-5 sm:p-8 md:p-12 flex flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 relative overflow-hidden shadow-xl">
                    {/* Text Content */}
                    <div className="flex flex-col items-start justify-center gap-2 sm:gap-3 z-0 flex-1 min-w-0">
                        <h2 className="text-h2 text-background xl:w-1/2">
                            Get 25% discount on your first pickup
                        </h2>
                        <p className="text-body text-background/90 xl:w-1/2">
                            Our service starts at just ₹99, experience the premium hassle free dry cleaning.
                        </p>
                    </div>
                    {/* Badge SVG Icon */}
                    <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 xl:w-48 xl:h-48 flex items-center justify-center z-0">
                        <Image
                            src={CheckBackground}
                            alt="Check background"
                            className="w-full h-full object-contain"
                            priority
                        />
                        <Image
                            src={CheckIcon}
                            alt="Check icon"
                            className="absolute w-1/2 h-1/2 object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;

