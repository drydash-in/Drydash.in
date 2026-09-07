'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = useMemo(() => [
        { id: "info-collect", title: "1. Information We Collect" },
        { id: "info-use", title: "2. How We Use Your Information" },
        { id: "payments-security", title: "3. Payments & Security" },
        { id: "location-info", title: "4. Location Information" },
        { id: "rights", title: "5. Your Rights" },
        { id: "contact-us", title: "6. Contact Us" }
    ], []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <main className="min-h-screen text-foreground pb-20 mt-10">
            <Container>
                {/* ── HEADER ── */}
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
                            Privacy Policy
                        </h1>
                        <p className="text-body text-foreground/60">
                            Effective March 2026
                        </p>
                    </div>
                </InView>

                {/* ── MAIN CONTENT GRID ── */}
                <div className="relative grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] 2xl:grid-cols-[360px_1fr] gap-10 lg:gap-16">

                    {/* ── LEFT SIDE: QUICK NAVIGATION (Sticky) ── */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                                    Navigation
                                </h4>
                                <nav className="flex flex-col gap-1 border-l-2 border-black/5">
                                    {sections.map((section) => {
                                        const isActive = activeSection === section.id;
                                        return (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className={`group flex items-center py-2.5 px-4 text-xs 2xl:text-sm font-medium transition-all duration-300 border-l-2 -ml-[2px] rounded-r-lg ${isActive
                                                    ? "text-primary font-bold border-primary bg-[#E6F2E9]/60"
                                                    : "text-foreground/60 border-transparent hover:text-foreground hover:bg-[#F6F7F9]"
                                                    }`}
                                            >
                                                {section.title}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>

                            <div className="p-5 squircle-sm bg-[#F6F7F9] border border-black/5">
                                <p className="text-body text-foreground/70 leading-relaxed text-xs">
                                    Need help with your data? <br />
                                    <a href="mailto:support@drydash.in" className="text-primary font-semibold hover:underline">support@drydash.in</a>
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* ── RIGHT SIDE: POLICY CONTENT ── */}
                    <article className="space-y-12 lg:space-y-16 max-w-[850px]">

                        {/* Intro */}
                        <section className="space-y-6">
                            <div className="p-5 sm:p-6 squircle-sm bg-[#F6F7F9] border border-black/5">
                                <p className="text-body text-foreground/80 leading-relaxed italic">
                                    At DryDash, we value your privacy. This policy explains how we collect, use, and protect your information when you use our apparel, shoe spa, and dry cleaning services.
                                </p>
                            </div>
                        </section>

                        {/* 1. Information We Collect */}
                        <section id="info-collect" className="scroll-mt-32 space-y-4 group">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Section 01</span>
                                <h2 className="text-h3 text-foreground font-semibold group-hover:text-primary transition-colors">Information We Collect</h2>
                            </div>
                            <p className="text-body text-foreground/75 leading-relaxed">
                                We may collect your name, phone number, address, precise and approximate location data (with your permission), and payment details to provide pickup, cleaning, and delivery services.
                            </p>
                        </section>

                        {/* 2. How We Use */}
                        <section id="info-use" className="scroll-mt-32 space-y-4 group border-t border-black/5 pt-8">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Section 02</span>
                                <h2 className="text-h3 text-foreground font-semibold group-hover:text-primary transition-colors">How We Use Your Information</h2>
                            </div>
                            <p className="text-body text-foreground/75 leading-relaxed">
                                Your data is used to process orders, provide real-time tracking, send notifications, and improve our services. We do not sell your personal information.
                            </p>
                        </section>

                        {/* 3. Payments */}
                        <section id="payments-security" className="scroll-mt-32 space-y-4 group border-t border-black/5 pt-8">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Section 03</span>
                                <h2 className="text-h3 text-foreground font-semibold group-hover:text-primary transition-colors">Payments & Security</h2>
                            </div>
                            <p className="text-body text-foreground/75 leading-relaxed">
                                All payments are processed securely via trusted payment gateways. We implement industry-standard measures to protect your data.
                            </p>
                        </section>

                        {/* 4. Location Information (Main Detail) */}
                        <section id="location-info" className="scroll-mt-32 space-y-6 group border-t border-black/5 pt-8">
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Section 04</span>
                                <h2 className="text-h3 text-foreground font-semibold group-hover:text-primary transition-colors">Location Information</h2>
                                <p className="text-body text-foreground/80 leading-relaxed font-medium pt-1">
                                    Our app collects and processes your device location data (precise and/or approximate location) with your permission to provide core services such as pickup, delivery, and order tracking.
                                </p>
                            </div>

                            <div className="space-y-4 bg-white p-6 sm:p-8 squircle-md border border-black/10 shadow-xs">
                                <h4 className="text-sm font-bold text-foreground tracking-wide">Location data is used to:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Identify your pickup and delivery address",
                                        "Assign nearby service partners",
                                        "Provide real-time tracking and delivery updates"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-body text-foreground/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4 text-body text-foreground/75 leading-relaxed">
                                <p>
                                    We do not collect location data in the background or when the app is not in use. Location access is only used when required while using the app.
                                </p>
                                <p>
                                    Your location data is not sold to third parties. It may be shared only with trusted service partners strictly for the purpose of completing your service request.
                                </p>
                                <p className="pt-2 border-t border-black/5 text-foreground/65">
                                    You can enable or disable location access at any time through your device settings.
                                </p>
                            </div>
                        </section>

                        {/* 5. Your Rights */}
                        <section id="rights" className="scroll-mt-32 space-y-4 group border-t border-black/5 pt-8">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Section 05</span>
                                <h2 className="text-h3 text-foreground font-semibold group-hover:text-primary transition-colors">Your Rights</h2>
                            </div>
                            <p className="text-body text-foreground/75 leading-relaxed">
                                You can request access, correction, or deletion of your personal data anytime by contacting our support team.
                            </p>
                        </section>

                        {/* 6. Contact Us */}
                        <section id="contact-us" className="scroll-mt-32 space-y-4 bg-[#D8EBE1] p-8 sm:p-12 squircle-lg border border-black/5 text-center shadow-xs">
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80">Section 06</span>
                                <h2 className="text-h2 text-foreground">Contact Us</h2>
                            </div>
                            <p className="text-body text-foreground/75 max-w-sm mx-auto leading-relaxed">
                                If you have any questions, reach out at:
                            </p>
                            <a
                                href="mailto:support@drydash.in"
                                className="inline-block text-h3 font-bold text-primary hover:underline transition-all"
                            >
                                support@drydash.in
                            </a>
                        </section>

                    </article>
                </div>
            </Container>
        </main>
    );
};

export default PrivacyPolicyPage;