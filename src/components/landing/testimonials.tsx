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
        role: "Google Reviewer",
        message: "I had a great experience with Shoe Spa. The quality of cleaning and restoration was impressive — my shoes looked almost brand new after the service. The team was professional, attentive, and handled everything with great care. Turnaround time was reasonable, and the pricing felt fair for the level of service provided. Highly recommended for anyone who wants to maintain or restore their footwear to top condition. I’ll definitely be using their service again!",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Kunalalla.png"
    },
    {
        id: 2,
        name: "AYUSH SINGH",
        role: "Google Reviewer",
        message: "Excellent shoe spa service by drydash.My shoes were cleaned really well and delivered within 24 hours.",
        rating: 4.8,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/AYUSH%20SINGH.png"
    },
    {
        id: 3,
        name: "Omkar jaiswal",
        role: "Google Reviewer",
        message: "The delivery service was fast and well-organized. My order arrived on time and in perfect condition, exactly within the promised 24-hour delivery window. Very convenient and reliable service. Will connect with you guys super soon!",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Omkar%20jaiswal.png"
    },
    {
        id: 4,
        name: "Shivam Pandey",
        role: "Google Reviewer",
        message: "Earlier, I tried many services, but none of them delivered before 3 days, and the service quality was very poor. Then I tried Dry Dash. For express service, they mentioned 8 hours, but they delivered my shoes in just 6 hours with great quality. I was truly impressed. Thank you, Dry Dash! I will come back soon to try more services.",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Shivam%20Pandey.png"
    },
    {
        id: 5,
        name: "HARI OM TRIPATHI",
        role: "Google Reviewer",
        message: "They offer excellent service across the NCR region — definitely worth trying.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/HARI%20OM%20TRIPATHI.png"
    },
    {
        id: 6,
        name: "Ankit Singh Thakur",
        role: "Google Reviewer",
        message: "What a great shoe spa service - shoes came out clean as new. I was very impressed with the quality cleaning and finishing.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Ankit%20Singh%20Thakur.png"
    },
    {
        id: 7,
        name: "Rocky",
        role: "Google Reviewer",
        message: "It's hard to find a genuinely good cleaning service in the area, but drydash has earned my trust. I would definitely recommend it to my friends.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Rocky.png"
    }
];

// Data for the second row of testimonials
export const testimonialsRow2: Testimonial[] = [
    {
        id: 1,
        name: "Kunalalla",
        role: "Google Reviewer",
        message: "I had a great experience with Shoe Spa. The quality of cleaning and restoration was impressive — my shoes looked almost brand new after the service. The team was professional, attentive, and handled everything with great care. Turnaround time was reasonable, and the pricing felt fair for the level of service provided. Highly recommended for anyone who wants to maintain or restore their footwear to top condition. I’ll definitely be using their service again!",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Kunalalla.png"
    },
    {
        id: 2,
        name: "AYUSH SINGH",
        role: "Google Reviewer",
        message: "Excellent shoe spa service by drydash.My shoes were cleaned really well and delivered within 24 hours.",
        rating: 4.8,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/AYUSH%20SINGH.png"
    },
    {
        id: 3,
        name: "Omkar jaiswal",
        role: "Google Reviewer",
        message: "The delivery service was fast and well-organized. My order arrived on time and in perfect condition, exactly within the promised 24-hour delivery window. Very convenient and reliable service. Will connect with you guys super soon!",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Omkar%20jaiswal.png"
    },
    {
        id: 4,
        name: "Shivam Pandey",
        role: "Google Reviewer",
        message: "Earlier, I tried many services, but none of them delivered before 3 days, and the service quality was very poor. Then I tried Dry Dash. For express service, they mentioned 8 hours, but they delivered my shoes in just 6 hours with great quality. I was truly impressed. Thank you, Dry Dash! I will come back soon to try more services.",
        rating: 5.0,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Shivam%20Pandey.png"
    },
    {
        id: 5,
        name: "HARI OM TRIPATHI",
        role: "Google Reviewer",
        message: "They offer excellent service across the NCR region — definitely worth trying.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/HARI%20OM%20TRIPATHI.png"
    },
    {
        id: 6,
        name: "Ankit Singh Thakur",
        role: "Google Reviewer",
        message: "What a great shoe spa service - shoes came out clean as new. I was very impressed with the quality cleaning and finishing.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Ankit%20Singh%20Thakur.png"
    },
    {
        id: 7,
        name: "Rocky",
        role: "Google Reviewer",
        message: "It's hard to find a genuinely good cleaning service in the area, but drydash has earned my trust. I would definitely recommend it to my friends.",
        rating: 4.9,
        profilePic: "/Assests/Images/drydash_testimonials_user_imgs/Rocky.png"
    },

];

export const TestimonialCard = ({ data }: { data: Testimonial }) => (
    <div className="w-[380px] 2xl:w-[420px] squircle-sm border border-black/15 p-8 flex flex-col gap-6 shrink-0 snap-start">
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
                <div className="bg-black/10 px-2 py-0.5 rounded text-[11px] font-bold text-black/80">
                    {data.rating.toFixed(1)}
                </div>
            </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-body mb-2 line-clamp-4">
            {data.message}
        </p>

        {/* User Profile */}
        <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center overflow-hidden shrink-0">
                    {data.profilePic ? (
                        <img src={data.profilePic} alt={data.name} className="w-full h-full object-cover" />
                    ) : (
                        <User size={20} weight="fill" className="text-black/50" />
                    )}
                </div>
                <div className="flex flex-col">
                    <h4 className="text-black/90 font-medium text-[14px]">{data.name}</h4>
                    <p className="text-gray-500 text-[12px]">{data.role}</p>
                </div>
            </div>
            <img src="/Assests/Logo/google%20logo.svg" alt="Google Review" className="w-5 h-5 shrink-0 object-contain" />
        </div>
    </div>
);

const Testimonials = () => {

    return (
        <section className="w-full py-20 lg:py-32 overflow-hidden">
            <Container>
                {/* Header text */}
                <div className="flex flex-col md:items-center md:justify-center justify-start md:text-center text-left mb-16 px-4">
                    <h2 className="text-lg tracking-wide mb-6 text-h3 md:hidden block">/ Our trusted user</h2>
                    <h3 className="text-4xl 2xl:text-5xl text-h3 mb-5 tracking-tight md:block hidden">
                        Our Trusted User
                    </h3>
                    <p className="text-[15px] 2xl:text-[16px] leading-relaxed text-body max-w-2xl mx-auto tracking-wide md:block hidden">
                        Trusted by many individuals like you.
                    </p>
                </div>
            </Container>

            {/* Infinite scrolling rows container */}
            <div className="w-full flex flex-col gap-6 lg:gap-8 overflow-hidden relative">

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