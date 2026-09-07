'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Container from '@/components/common/container';
import Link from 'next/link';

// Static image imports
import ShoeSpaImg from '@/../public/Assests/Images/Services/ShoeSpa.png';
import DryCleaningImg from '@/../public/Assests/Images/Services/DryCleaning.png';
import CarWashImg from '@/../public/Assests/Images/Services/car-wash.png';
import OnSiteImg from '@/../public/Assests/Images/Services/on-site.png';
import DeliveryImg from '@/../public/Assests/Images/Services/8-hours delivery.png';

// Reusable Most Ordered Tag Component with Props
export interface MostOrderedTagProps {
    text?: string;
    className?: string;
    variant?: 'lime' | 'yellow' | 'accent';
}

export const MostOrderedTag: React.FC<MostOrderedTagProps> = ({
    text = "most ordered",
    className = "",
    variant = "lime",
}) => {
    const variantStyles = {
        lime: "bg-[#D6EA29] text-[#1B2B25]",
        yellow: "bg-[#FACC15] text-[#161511]",
        accent: "bg-primary text-white",
    };

    return (
        <span
            className={`inline-flex items-center justify-center h-[18px] sm:h-[22px] px-2 sm:px-3 rounded-full  tracking-tight whitespace-nowrap select-none leading-none ${variantStyles[variant]} ${className}`}
        >
            <span className=" text-[10px] md:text-[11px] font-light">
                {text}
            </span>
        </span>
    );
};

// Reusable Service Card Component
export interface ServiceItem {
    id: string;
    title: string;
    image: StaticImageData | string;
    alt: string;
    isMostOrdered?: boolean;
    tagText?: string;
    href?: string;
}

export interface ServiceCardProps {
    service: ServiceItem;
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = "" }) => {
    const cardContent = (
        <div
            className={`relative bg-white border border-black/10 squircle-lg p-2 sm:p-3 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group w-full ${className}`}
        >
            {/* Reusable Tag if most ordered */}
            {service.isMostOrdered && (
                <div className="absolute -top-3.5 xl:-top-3.5 left-8.5 xl:left-15 z-10">
                    <MostOrderedTag text={service.tagText || "most ordered"} />
                </div>
            )}

            {/* Image Box */}
            <div className="w-full aspect-square squircle-md rounded-[16px] sm:rounded-[20px] bg-[#F6F7F9] flex items-center justify-center p-3.5 sm:p-5 md:p-6 overflow-hidden transition-colors duration-300 group-hover:bg-[#F0F2F5]">
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 20vw"
                        className="object-contain p-1 sm:p-2 transition-transform duration-300 group-hover:scale-105"
                        priority={service.isMostOrdered}
                    />
                </div>
            </div>

            {/* Service Title */}
            <div className="w-full pt-2.5 pb-1 sm:pt-4 sm:pb-2 text-center">
                <h3 className="font-mulish font-regular text-[13px] sm:text-[15px] md:text-[16px]">
                    {service.title}
                </h3>
            </div>
        </div>
    );

    if (service.href) {
        return (
            <Link href={service.href} className="block w-full">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

export const servicesData: ServiceItem[] = [
    {
        id: "shoe-spa",
        title: "SHOE SPA",
        image: ShoeSpaImg,
        alt: "Shoe Spa Service",
        isMostOrdered: true,
        tagText: "most ordered",
        href: "/services#shoe-spa",
    },
    {
        id: "dry-clean",
        title: "DRY CLEAN",
        image: DryCleaningImg,
        alt: "Dry Cleaning Service",
        href: "/services#dry-cleaning",
    },
    {
        id: "car-wash",
        title: "CAR WASH",
        image: CarWashImg,
        alt: "Car Wash Service",
        href: "/services#car-wash",
    },
    {
        id: "on-site",
        title: "ON-SITE",
        image: OnSiteImg,
        alt: "On-site Cleaning Service",
        href: "/services#on-site",
    },
    {
        id: "8-hours-delivery",
        title: "8-HOURS DELIVERY",
        image: DeliveryImg,
        alt: "8-Hours Express Delivery",
        href: "/services#express-delivery",
    },
];

const Services = () => {
    return (
        <section className="w-full bg-background py-16 md:py-24">
            <Container>
                <div className="flex flex-col gap-10 md:gap-14 px-4 sm:px-6">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
                        <h2 className="text-h3">
                            Our services
                        </h2>
                        <p className="text-body">
                            We offer shoe spa and dry cleaning, along with on-site services and car wash. With our 8-hour express delivery you get everything cleaned and ready the same day.
                        </p>
                    </div>

                    {/* Services Cards (5 cards in a row on desktop, swipeable smaller cards on mobile) */}
                    <div className="w-full flex overflow-x-auto pb-4 pt-4 px-1 gap-3 sm:gap-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:p-0">
                        {servicesData.map((service) => (
                            <div key={service.id} className="w-[150px] sm:w-[170px] md:w-[190px] lg:w-full snap-start shrink-0 lg:shrink">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;