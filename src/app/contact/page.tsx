'use client'
import React from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CheckCircleIcon } from '@phosphor-icons/react';

const ContactPage = () => {
    return (
        <main className="min-h-screen text-foreground pb-20 mt-10">
            <Container>
                <section className=" w-full min-h-[640px] py-12 sm:py-16 lg:py-20 p-6 sm:p-10 lg:p-14 squircle-lg flex flex-col justify-center items-center relative overflow-hidden">


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
                        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-12 lg:gap-14 relative z-10">

                            {/* ── LEFT SIDE: BRAND CONTENT ── */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                                }}
                                className="w-full lg:w-[48%] flex flex-col pt-2 lg:pt-4"
                            >
                                <div className="space-y-6">
                                    <h1 className="text-h1 text-foreground uppercase tracking-tight">
                                        Let’s Talk
                                    </h1>
                                    {/* Feature Checklist */}
                                    <ul className="space-y-4 pt-4 sm:pt-6">
                                        {[
                                            "24-Hour Delivery Promise",
                                            "Eco-Friendly Solvents",
                                            "Doorstep Convenience",
                                            "Premium Fabric Care"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircleIcon weight="fill" size={22} className="text-primary shrink-0" />
                                                <span className="text-body font-semibold tracking-wide text-foreground">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Branding Text */}
                                <div className="mt-10 lg:mt-auto pt-6">
                                    <p className="text-body leading-relaxed text-foreground/70 max-w-sm">
                                        Get in touch and we’ll handle the rest. <br />
                                        Quick booking, fast service, and fresh results—right when you need them
                                    </p>
                                </div>
                            </motion.div>

                            {/* ── RIGHT SIDE: CONTACT INFO ── */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
                                }}
                                className="w-full lg:w-[48%] xl:w-[46%]"
                            >
                                <div className="bg-white border border-black/10 p-7 sm:p-10 md:p-12 squircle-md flex flex-col justify-center min-h-[320px]">
                                    <header className="mb-8">
                                        <p className="text-body text-foreground/60 leading-relaxed">
                                            Reach out to us directly for any inquiries or support. We are here to help!
                                        </p>
                                    </header>

                                    <div className="space-y-5">
                                        <div className="space-y-1.5 p-4 sm:p-5 squircle-sm bg-[#F6F7F9] border border-black/5 transition-colors hover:bg-[#EDF2EE] group">
                                            <label className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider pl-1">Email</label>
                                            <a href="mailto:support@drydash.in" className="block text-h3 md:text-h2 font-bold text-foreground group-hover:text-primary transition-colors">
                                                support@drydash.in
                                            </a>
                                        </div>

                                        <div className="space-y-1.5 p-4 sm:p-5 squircle-sm bg-[#F6F7F9] border border-black/5 transition-colors hover:bg-[#EDF2EE] group">
                                            <label className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider pl-1">Phone</label>
                                            <a href="tel:+918287636979" className="block text-h3 md:text-h2 font-bold text-foreground group-hover:text-primary transition-colors">
                                                +91 8287636979
                                            </a>
                                        </div>
                                    </div>
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
