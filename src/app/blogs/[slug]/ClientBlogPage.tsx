'use client'

import React, { useState, useEffect, useMemo } from 'react';
import Container from '@/components/common/container';
import Link from 'next/link';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CalendarBlankIcon, ShareNetworkIcon, CaretLeftIcon } from '@phosphor-icons/react';
import { BLOGS_DATA } from '@/data/blogs';

export default function ClientBlogPage({ slug }: { slug: string }) {
    const [activeSection, setActiveSection] = useState("");
    const [copied, setCopied] = useState(false);

    // Detect if this is a dynamic blog post from our data folder
    const blog = useMemo(() => {
        return BLOGS_DATA.find(b => b.slug === slug);
    }, [slug]);

    // Populate TOC sections
    const sections = useMemo(() => {
        if (!blog) return [];
        const list = blog.sections.map(s => ({
            id: s.id,
            title: s.title
        }));
        if (blog.conclusion) {
            list.push({
                id: "final-thought",
                title: "Final thought"
            });
        }
        return list;
    }, [blog]);

    const activeIndex = useMemo(() =>
        sections.findIndex(s => s.id === activeSection),
        [activeSection, sections]);

    useEffect(() => {
        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px',
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

    const handleShare = async () => {
        if (typeof window === 'undefined') return;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: blog?.title || 'DryDash Blog',
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            // User cancelled share
        }
    };

    if (!blog) {
        return (
            <main className="min-h-screen text-foreground pt-24 pb-20 flex items-center justify-center">
                <Container className="text-center">
                    <h1 className="text-h2 text-foreground mb-4">Blog Post Not Found</h1>
                    <Link href="/blogs" className="text-primary font-semibold hover:underline">
                        Back to Blogs
                    </Link>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen text-foreground pb-20 mt-10">
            {/* Scrollspy Sidebar */}
            <aside className="hidden lg:block fixed top-32 right-8 xl:right-16 2xl:right-24 w-[280px] 2xl:w-[320px] z-20">
                <div className="flex flex-col gap-6">
                    <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                        On this page
                    </h4>
                    <div className="relative flex gap-5">
                        <div className="relative w-[2px] bg-black/5 shrink-0 h-full min-h-[260px] rounded-full">
                            {activeIndex !== -1 && (
                                <motion.div
                                    className="absolute left-0 w-full bg-primary rounded-full z-10"
                                    initial={false}
                                    animate={{
                                        top: `${(activeIndex / sections.length) * 100}%`,
                                        height: `${100 / sections.length}%`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>
                        <nav className="flex flex-col gap-4 py-0">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block text-[13px] 2xl:text-[14px] leading-snug transition-all duration-300 transform ${isActive
                                            ? "text-primary font-bold translate-x-1"
                                            : "text-foreground/55 font-medium hover:text-foreground"
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(section.id);
                                            if (element) {
                                                const offset = 120;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                });
                                            }
                                        }}
                                    >
                                        <div className="py-0.5">{section.title}</div>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>

            <Container className="relative">
                <div className="w-full max-w-[800px] 2xl:max-w-[900px] mx-auto px-4 md:px-0">
                    {/* Back Arrow Link */}
                    <div className="mb-10 sm:mb-12 mt-6 sm:mt-10">
                        <Link
                            href="/blogs"
                            className="group inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm font-medium"
                        >
                            <CaretLeftIcon size={16} className="group-hover:-translate-x-1 transition-transform text-primary" />
                            Back to Blogs
                        </Link>
                    </div>

                    <article className="space-y-12 md:space-y-16">
                        {/* ── HEADER ── */}
                        <header className="space-y-6 sm:space-y-8">
                            <h1 className="text-h1 text-foreground leading-tight">
                                {blog.title}
                            </h1>

                            <div className="space-y-4">
                                <p className="text-body text-foreground/75 leading-relaxed text-base sm:text-lg">
                                    {blog.intro}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between py-6 border-y border-black/10">
                                <div className="flex items-center gap-3 text-foreground/60 text-xs md:text-sm font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <CalendarBlankIcon size={18} className="text-primary" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <span className="w-1 h-1 bg-foreground/25 rounded-full"></span>
                                    <span>{blog.readTime}</span>
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 bg-white hover:bg-[#F6F7F9] border border-black/10 px-5 py-2 rounded-full text-xs font-semibold text-foreground transition-all active:scale-95 shadow-xs cursor-pointer"
                                >
                                    <ShareNetworkIcon size={16} className="text-primary" />
                                    {copied ? 'Link Copied!' : 'Share Post'}
                                </button>
                            </div>
                        </header>

                        {/* ── SECTIONS ── */}
                        {blog.sections.map((section) => (
                            <InView
                                key={section.id}
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                                }}
                            >
                                <section id={section.id} className="space-y-5 sm:space-y-6 pt-6 border-t border-black/5 scroll-mt-28">
                                    <h2 className="text-h3 text-foreground font-semibold">
                                        {section.title}
                                    </h2>
                                    {section.paragraphs.map((p, idx) => (
                                        <p key={idx} className="text-body text-foreground/75 leading-relaxed text-[15px] sm:text-[16px]">
                                            {p}
                                        </p>
                                    ))}

                                    {section.listTitle && (
                                        <div className="space-y-4 pt-4">
                                            <p className="text-body font-semibold text-primary italic border-l-2 border-primary/40 pl-4 py-1 text-[15px] sm:text-[16px]">
                                                {section.listTitle}
                                            </p>
                                            <ul className="space-y-3 pl-1">
                                                {section.listItems?.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-body text-foreground/80 text-[14px] sm:text-[15px]">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            </InView>
                        ))}

                        {/* ── CONCLUSION / FINAL THOUGHT ── */}
                        {blog.conclusion && (
                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.98 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                            >
                                <section
                                    id="final-thought"
                                    className="bg-[#D8EBE1] p-8 sm:p-12 md:p-14 squircle-lg border border-black/5 text-center shadow-sm relative overflow-hidden scroll-mt-28"
                                >
                                    <h2 className="text-h2 text-foreground mb-4">
                                        Final thought
                                    </h2>
                                    <p className="text-body text-foreground/85 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                                        {blog.conclusion}
                                    </p>
                                </section>
                            </InView>
                        )}
                    </article>
                </div>
            </Container>
        </main>
    );
}