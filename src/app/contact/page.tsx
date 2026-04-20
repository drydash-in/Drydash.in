'use client'
import React from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CheckCircleIcon, CaretDownIcon } from '@phosphor-icons/react';

const ContactPage = () => {
    return (
        <main className="min-h-screen text-white md:pt-24 pt-10 pb-20">
            <Container>
                <section className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[700px] py-16 lg:py-24 border-6 border-[#E2DEC6]/20 md:p-6 p-4 rounded-[40px] flex flex-col justify-center items-center relative overflow-hidden">

                    {/* Decorative Glowing Blobs (Optional, to mimic the image's vibrant lighting) */}
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#03D391]/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <InView
                        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-16 lg:gap-12 relative z-10">

                            {/* ── LEFT SIDE: BRAND CONTENT ── */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                                }}
                                className="w-full lg:w-[45%] flex flex-col pt-4 lg:pt-10"
                            >
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-black uppercase text-white">
                                        Let’s Talk
                                    </h1>

                                    {/* Feature Checklist */}
                                    <ul className="space-y-4 pt-8">
                                        {[
                                            "24-Hour Delivery Promise",
                                            "Eco-Friendly Solvents",
                                            "Doorstep Convenience",
                                            "Premium Fabric Care"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircleIcon weight="fill" size={24} className="text-[#FACC15]" />
                                                <span className="text-sm md:text-md font-bold tracking-wide text-white/90">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Branding Text */}
                                <div className="mt-10 lg:mt-auto">
                                    <p className="text-[13px] md:text-[14px] leading-relaxed text-[#8a928e] max-w-sm">
                                        Get in touch and we’ll handle the rest. <br />
                                        Quick booking, fast service, and fresh results—right when you need them
                                    </p>
                                </div>
                            </motion.div>

                            {/* ── RIGHT SIDE: FORM CARD ── */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
                                }}
                                className="w-full lg:w-[48%] xl:w-[45%]"
                            >
                                <div className="bg-[#111111]/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 rounded-[32px] shadow-2xl">
                                    <header className="mb-10">
                                        <p className="text-[14px] text-[#8a928e] leading-relaxed">
                                            Share a few details and our team will reach out with the right options for your city and investment range.
                                        </p>
                                    </header>

                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold text-[#8a928e] uppercase tracking-wider pl-1">Your name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#03D391]/40 focus:ring-1 focus:ring-[#03D391]/20 transition-all"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold text-[#8a928e] uppercase tracking-wider pl-1">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#03D391]/40 focus:ring-1 focus:ring-[#03D391]/20 transition-all"
                                            />
                                        </div>

                                        {/* Two Column Grid: Phone & City */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[12px] font-bold text-[#8a928e] uppercase tracking-wider pl-1">Phone number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter your phone number"
                                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#03D391]/40 focus:ring-1 focus:ring-[#03D391]/20 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[12px] font-bold text-[#8a928e] uppercase tracking-wider pl-1">City</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your city"
                                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#03D391]/40 focus:ring-1 focus:ring-[#03D391]/20 transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Investment Range Select */}
                                        {/* <div className="space-y-2 relative">
                                            <label className="text-[12px] font-bold text-[#8a928e] uppercase tracking-wider pl-1">Investment range</label>
                                            <div className="relative">
                                                <select
                                                    defaultValue=""
                                                    className="appearance-none w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-[#03D391]/40 transition-all cursor-pointer"
                                                >
                                                    <option value="" disabled>Select investment range</option>
                                                    <option value="basic">Standard</option>
                                                    <option value="premium">Premium</option>
                                                    <option value="enterprise">Enterprise</option>
                                                </select>
                                                <CaretDownIcon size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                                            </div>
                                        </div> */}

                                        {/* Footer Note & Submit */}
                                        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <p className="text-[11px] text-[#8a928e] leading-tight max-w-[200px]">
                                                We’ll only use your information to contact you about your inquiry.
                                            </p>
                                            <button className="w-full md:w-auto bg-[#FACC15] hover:bg-[#eab308] text-[#111111] font-bold py-4 px-10 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-yellow-500/10">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>

                        </div>
                    </InView>
                </section>
            </Container>
        </main>
    );
};

export default ContactPage;