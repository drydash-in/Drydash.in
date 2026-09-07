'use client';

import React from 'react';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';
import Link from 'next/link';
import { ServiceCard, servicesData } from '@/components/landing/services';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';

const ServicesPage = () => {
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
                        <h1 className="text-h2 text-foreground">
                            Our Services
                        </h1>
                        <p className="text-body text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            Experience a new standard of luxury maintenance. From meticulous
                            garment care to bespoke onsite solutions, we curate the details so you
                            don't have to.
                        </p>
                    </div>
                </InView>

                {/* ── SERVICE GRID ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 mb-20 sm:mb-28 md:mb-32">
                    {servicesData.map((service, idx) => (
                        <InView
                            key={service.id}
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, delay: idx * 0.08 }
                                }
                            }}
                            className="h-full"
                        >
                            <ServiceCard service={service} />
                        </InView>
                    ))}
                </div>

                {/* ── CTA BOX ── */}
                <InView
                    viewOptions={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <div className="relative bg-[#D8EBE1] border border-black/5 p-8 sm:p-12 md:p-16 squircle-lg overflow-hidden text-center shadow-sm">
                        <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                            <h2 className="text-h2 text-foreground leading-tight">
                                Ready for a curated experience?
                            </h2>
                            <p className="text-body text-foreground/75 max-w-xl mx-auto leading-relaxed mb-4">
                                Join the circle of homeowners and professionals who trust drydash for their
                                daily essentials.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <DownloadBtn />
                                <Link href="/about-us" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border border-primary text-primary font-medium text-body px-8 h-12 flex items-center justify-center transition-all active:scale-[0.98] rounded-lg cursor-pointer shadow-sm">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </InView>
            </Container>
        </main>
    );
};

export default ServicesPage;