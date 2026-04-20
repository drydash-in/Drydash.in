'use client';
import React from 'react';
import Container from '@/components/common/container';
import { Star, Quotes, User } from 'phosphor-react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    message: string;
    rating: number;
    profilePic?: string; // Optional: If provided, render an image, otherwise fallback to the User icon
}

// Data for the first row of testimonials
const testimonialsRow1: Testimonial[] = [
    {
        id: 1,
        name: "Kunalalla",
        role: "",
        message: "I had a great experience with Shoe Spa. The quality of cleaning and restoration was impressive — my shoes looked almost brand new after the service. The team was professional, attentive, and handled everything with great care. Turnaround time was reasonable, and the pricing felt fair for the level of service provided. Highly recommended for anyone who wants to maintain or restore their footwear to top condition. I’ll definitely be using their service again!",
        rating: 5.0,
    },
    {
        id: 2,
        name: "AYUSH SINGH",
        role: "",
        message: "Excellent shoe spa service by Drydash.My shoes were cleaned really well and delivered within 24 hours.",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Omkar jaiswal",
        role: "",
        message: "The delivery service was fast and well-organized. My order arrived on time and in perfect condition, exactly within the promised 24-hour delivery window. Very convenient and reliable service. Will connect with you guys super soon!",
        rating: 5.0,
    },
    {
        id: 4,
        name: "Shivam Pandey",
        role: "",
        message: "Earlier, I tried many services, but none of them delivered before 3 days, and the service quality was very poor. Then I tried Dry Dash. For express service, they mentioned 8 hours, but they delivered my shoes in just 6 hours with great quality. I was truly impressed. Thank you, Dry Dash! I will come back soon to try more services.",
        rating: 5.0,
    },
    {
        id: 5,
        name: "HARI OM TRIPATHI",
        role: "",
        message: "They offer excellent service across the NCR region — definitely worth trying.",
        rating: 4.9,
    },
    {
        id: 6,
        name: "Ankit Singh Thakur",
        role: "",
        message: "What a great shoe spa service - shoes came out clean as new. I was very impressed with the quality cleaning and finishing.",
        rating: 4.9,
    },
    {
        id: 7,
        name: "Rocky",
        role: "",
        message: "It's hard to find a genuinely good cleaning service in the area, but DryDash has earned my trust. I would definitely recommend it to my friends.",
        rating: 4.9,
    }
];

// Data for the second row of testimonials
export const testimonialsRow2: Testimonial[] = [
    {
        id: 1,
        name: "Kunalalla",
        role: "",
        message: "I had a great experience with Shoe Spa. The quality of cleaning and restoration was impressive — my shoes looked almost brand new after the service. The team was professional, attentive, and handled everything with great care. Turnaround time was reasonable, and the pricing felt fair for the level of service provided. Highly recommended for anyone who wants to maintain or restore their footwear to top condition. I’ll definitely be using their service again!",
        rating: 5.0,
    },
    {
        id: 2,
        name: "AYUSH SINGH",
        role: "",
        message: "Excellent shoe spa service by Drydash.My shoes were cleaned really well and delivered within 24 hours.",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Omkar jaiswal",
        role: "",
        message: "The delivery service was fast and well-organized. My order arrived on time and in perfect condition, exactly within the promised 24-hour delivery window. Very convenient and reliable service. Will connect with you guys super soon!",
        rating: 5.0,
    },
    {
        id: 4,
        name: "Shivam Pandey",
        role: "",
        message: "Earlier, I tried many services, but none of them delivered before 3 days, and the service quality was very poor. Then I tried Dry Dash. For express service, they mentioned 8 hours, but they delivered my shoes in just 6 hours with great quality. I was truly impressed. Thank you, Dry Dash! I will come back soon to try more services.",
        rating: 5.0,
    },
    {
        id: 5,
        name: "HARI OM TRIPATHI",
        role: "",
        message: "They offer excellent service across the NCR region — definitely worth trying.",
        rating: 4.9,
    },
    {
        id: 6,
        name: "Ankit Singh Thakur",
        role: "",
        message: "What a great shoe spa service - shoes came out clean as new. I was very impressed with the quality cleaning and finishing.",
        rating: 4.9,
    },
    {
        id: 7,
        name: "Rocky",
        role: "",
        message: "It's hard to find a genuinely good cleaning service in the area, but DryDash has earned my trust. I would definitely recommend it to my friends.",
        rating: 4.9,
    },

];

export const TestimonialCard = ({ data }: { data: Testimonial }) => (
    <div className="w-[380px] 2xl:w-[420px] bg-[#141414]/80 border border-white/5 rounded-2xl p-8 flex flex-col gap-6 shrink-0 snap-start">
        {/* Top row: Quotes & Rating */}
        <div className="hidden md:flex justify-between items-start">
            <Quotes size={32} weight="fill" className="text-gray-600/50" />
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#FFCC00]">
                    {/* Render stars based on rating (floor for solid stars) */}
                    {[...Array(Math.floor(data.rating))].map((_, i) => (
                        <Star key={i} size={16} weight="fill" />
                    ))}
                </div>
                <div className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-bold text-white/80">
                    {data.rating.toFixed(1)}
                </div>
            </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-white/80 text-[15px] 2xl:text-[16px] leading-[1.7] tracking-wide mb-4 line-clamp-4">
            {data.message}
        </p>

        {/* User Profile */}
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                {data.profilePic ? (
                    <img src={data.profilePic} alt={data.name} className="w-full h-full object-cover" />
                ) : (
                    <User size={20} weight="fill" className="text-white/50" />
                )}
            </div>
            <div className="flex flex-col">
                <h4 className="text-white/90 font-medium text-[14px]">{data.name}</h4>
                <p className="text-gray-500 text-[12px]">{data.role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {

    return (
        <section className="w-full py-20 lg:py-32 bg-[#0A0A0A] overflow-hidden">
            <Container>
                {/* Header text */}
                <div className="flex flex-col md:items-center md:justify-center justify-start md:text-center text-left mb-16 px-4">
                    <h2 className="text-lg tracking-wide mb-6 text-gray-400 md:hidden block">/ Our trusted user</h2>
                    <h2 className="text-4xl 2xl:text-5xl font-black text-[#E2DEC6] mb-5 tracking-tight md:block hidden">
                        Our Trusted User
                    </h2>
                    <p className="text-[15px] 2xl:text-[16px] leading-relaxed text-[#8a928e] max-w-2xl mx-auto tracking-wide md:block hidden">
                        Trusted by customers for quality and convenience. we deliver reliable
                        service, careful handling, and fresh results—on time, every time.
                    </p>
                </div>
            </Container>

            {/* Infinite scrolling rows container */}
            <div className="w-full flex flex-col gap-6 lg:gap-8 overflow-hidden relative">
                {/* Left/Right Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 2xl:w-40 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 2xl:w-40 bg-linear-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>

                {/* Row 1 - Moving Right */}
                <InfiniteSlider reverse speed={50} gap={24}>
                    {testimonialsRow1.map((testimonial) => (
                        <TestimonialCard key={'row1-' + testimonial.id} data={testimonial} />
                    ))}
                </InfiniteSlider>

                {/* Row 2 - Moving Left */}
                <InfiniteSlider speed={50} gap={24}>
                    {testimonialsRow2.map((testimonial) => (
                        <TestimonialCard key={'row2-' + testimonial.id} data={testimonial} />
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
};

export default Testimonials;