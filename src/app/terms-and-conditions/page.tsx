'use client'
import React from 'react';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';
import { CheckCircleIcon } from '@phosphor-icons/react';

const TermsAndConditionsPage = () => {
    return (
        <main className="min-h-screen text-foreground pb-20 mt-10">
            <Container>
                {/* ── HERO SECTION ── */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 md:mb-20 gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F2E9] text-primary text-xs font-semibold tracking-wide uppercase">
                            Legal & Compliance
                        </span>
                        <h1 className="text-h2 text-foreground">
                            Terms & Conditions
                        </h1>
                        <p className="text-body text-foreground/60">
                            Owned and operated by Gyld Solutions Private Limited
                        </p>
                    </div>
                </InView>

                {/* ── CENTERED CONTENT COLUMN ── */}
                <div className="w-full max-w-[850px] mx-auto space-y-10 sm:space-y-12 mb-24">

                    {/* Intro paragraph */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                        }}
                    >
                        <div className="p-5 sm:p-6 squircle-sm bg-[#F6F7F9] border border-black/5">
                            <p className="text-body text-foreground/80 leading-relaxed italic">
                                Transparency, care, and trust are the foundation of every DryDash experience. Please read our terms carefully before availing our services.
                            </p>
                        </div>
                    </InView>

                    {/* Delivery Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                        }}
                    >
                        <div className="bg-white border border-black/10 p-6 sm:p-8 md:p-10 squircle-md shadow-xs w-full">
                            <h2 className="text-h3 text-foreground font-semibold mb-6">Delivery Policy</h2>
                            <ul className="space-y-4 sm:space-y-5">
                                {[
                                    "apparel deliveries will be made in 72 hours.",
                                    "Dry Cleaning garments will be delivered in 120 hours.",
                                    "Urgent delivery of garments will be charged at 50% extra.",
                                    "Free pickup & delivery on apparel orders of 6 KG or more.",
                                    "We strive for timely delivery; if delayed, we’ll keep you updated.",
                                    "Customers are requested to inspect garments upon delivery.",
                                    "We are not responsible for fabric shrinkage, color bleeding, or embellishment damage.",
                                    "All garments are cleaned with care, but some stains may be permanent.",
                                    "Garments uncollected within 15 days of delivery may incur storage risk.",
                                    "We are not liable for loss due to fire, burglary, or unforeseen circumstances."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3.5">
                                        <CheckCircleIcon size={19} weight="fill" className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-body text-foreground/75 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                    {/* Cleaning & Quality Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                    >
                        <div className="bg-white border border-black/10 p-6 sm:p-8 md:p-10 squircle-md shadow-xs w-full">
                            <h2 className="text-h3 text-foreground font-semibold mb-6">Cleaning & Quality Policy</h2>
                            <ul className="space-y-4 sm:space-y-5">
                                {[
                                    "We use professional methods such as hydrocarbon, PERC, and soft washes as required.",
                                    "Tariff is determined by garment complexity; rates listed are minimal estimates.",
                                    "Our technicians assess and choose the safest, most effective cleaning method for each garment.",
                                    "All articles are processed at the customer’s risk.",
                                    "We may feature cleaned garments in promotional visuals with full discretion.",
                                    "All disputes fall under the jurisdiction of Delhi courts."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3.5">
                                        <CheckCircleIcon size={19} weight="fill" className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-body text-foreground/75 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                    {/* Privacy Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                        }}
                    >
                        <div className="bg-white border border-black/10 p-6 sm:p-8 md:p-10 squircle-md shadow-xs w-full">
                            <h2 className="text-h3 text-foreground font-semibold mb-4">Privacy Policy</h2>
                            <p className="text-body text-foreground/75 leading-relaxed mb-6">
                                DryDash values your privacy. We collect and protect personal data shared through our stores, mobile app, or customer service channels with utmost care and consent.
                            </p>
                            <div className="mb-6 p-4 sm:p-5 squircle-sm bg-[#F6F7F9] border border-black/5">
                                <h3 className="text-sm font-semibold text-foreground mb-3">Your data helps us provide customized services like:</h3>
                                <ul className="space-y-2.5 pl-1">
                                    {[
                                        "Real-time updates about your order",
                                        "Information about offers and new services",
                                        "Feedback and experience research"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-body text-foreground/75 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-body text-foreground/75 leading-relaxed pt-2 border-t border-black/5">
                                Communication methods include phone, WhatsApp, SMS, email, and direct mailers.
                            </p>
                        </div>
                    </InView>

                    {/* Guaranteed Cloth Protection Program */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                        }}
                    >
                        <div className="bg-[#D8EBE1] border border-black/5 p-6 sm:p-8 md:p-10 squircle-md shadow-sm w-full">
                            <h2 className="text-h3 text-foreground font-semibold mb-6">Guaranteed Cloth Protection Program</h2>
                            <ul className="space-y-4 sm:space-y-5">
                                {[
                                    "Protection against any damage or loss during cleaning.",
                                    "Refund up to 2X the item’s processing value in case of confirmed loss/damage.",
                                    "Free re-processing for quality-related issues.",
                                    "Claims must be raised within 30 days of delivery.",
                                    "Disputes are subject to company address."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3.5">
                                        <CheckCircleIcon size={19} weight="fill" className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-body text-foreground/85 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                </div>
            </Container>
        </main>
    );
};

export default TermsAndConditionsPage;