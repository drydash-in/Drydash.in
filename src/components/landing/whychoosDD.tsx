'use client';

import React from 'react';
import Container from '@/components/common/container';

const features = [
    {
        highlight: "₹0 hidden",
        label: "fees",
    },
    {
        highlight: "Free",
        label: "pickup & Delivery",
    },
    {
        highlight: "Same day",
        label: "dry cleaning",
    },
    {
        highlight: "Door step",
        label: "billing",
    },
];

const WhychoosDD = () => {
    return (
        <section className="w-full bg-background py-16 md:py-24">
            <Container>
                <div className="flex flex-col gap-10 md:gap-14 px-4 sm:px-6">
                    {/* Header Content */}
                    <div className="flex flex-col items-start gap-4 md:gap-5 max-w-2xl">
                        <span className="text-primary text-body font-medium">
                            Why choose us
                        </span>

                        <h2 className="text-h2 text-foreground">
                            We offer same day <br />
                            dry cleaning starting <br />
                            at just <span className="text-primary">₹99</span>
                        </h2>

                        <p className="text-body text-foreground/80 leading-relaxed">
                            Fast. Reliable. Hassle-free dry cleaning and shoe spa. <br />
                            Fresh, clean, and ready at your doorstep.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="w-full grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between md:gap-0">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="aspect-square w-full squircle-md flex flex-col items-center justify-center p-3 text-center transition-all duration-300 hover:scale-[1.02] md:w-[21%] lg:w-[21.5%] md:p-6"
                                style={{
                                    background: "radial-gradient(circle at 50% 45%, #FFFFFF 15%, #EDF7F1 60%, #DCEFE3 100%)",
                                }}
                            >
                                <span className="font-franie text-h4 font-bold leading-snug text-primary">
                                    {item.highlight}
                                </span>

                                <span className="font-franie text-[13px] font-semibold leading-snug text-foreground sm:text-[16px]">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhychoosDD;