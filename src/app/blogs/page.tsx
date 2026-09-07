'use client'
import React from 'react';
import Container from '@/components/common/container';
import Link from 'next/link';
import { InView } from '@/components/ui/in-view';
import { CalendarBlank, Clock, ArrowRight } from 'phosphor-react';
import { BLOGS_DATA } from '@/data/blogs';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';

const blogsData = BLOGS_DATA.map(blog => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    date: blog.date,
    readTime: blog.readTime,
    image: blog.image,
}));

const BlogsPage = () => {
    return (
        <main className="min-h-screen text-foreground pb-20 mt-10">
            <Container>
                {/* ── HERO HEADER ── */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 md:mb-20 gap-2 sm:gap-3">
                        <h1 className="text-h2 text-foreground">
                            Blogs
                        </h1>

                    </div>
                </InView>

                {/* ── BLOGS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
                    {blogsData.map((blog, idx) => (
                        <InView
                            key={blog.id}
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.08 } }
                            }}
                            className="h-full"
                        >
                            <article className="bg-white border border-black/10 squircle-md p-4 sm:p-5 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                {/* Blog Image Container */}
                                <div className="relative w-full aspect-[16/10] squircle-sm overflow-hidden bg-[#F6F7F9] mb-5">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                    {/* Read Time Overlay Pill */}
                                    <div className="absolute top-3 right-3 z-10">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-foreground text-[11px] font-medium shadow-xs">
                                            <Clock size={12} className="text-primary" />
                                            <span>{blog.readTime}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="flex flex-col grow">
                                    <div className="flex items-center gap-1.5 text-foreground/50 text-xs mb-2.5">
                                        <CalendarBlank size={14} className="text-primary" />
                                        <span>{blog.date}</span>
                                    </div>

                                    <Link href={`/blogs/${blog.slug}`} className="block mb-3">
                                        <h2 className="text-h4 text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug font-semibold">
                                            {blog.title}
                                        </h2>
                                    </Link>

                                    <p className="text-body text-foreground/70 leading-relaxed mb-6 grow line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    {/* Footer Action */}
                                    <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="inline-flex items-center gap-2 text-button text-primary font-semibold group/btn transition-colors hover:text-primary/80"
                                        >
                                            <span>Read article</span>
                                            <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                                        </Link>
                                        <span className="text-[11px] text-foreground/40 font-mulish">
                                            {blog.readTime}
                                        </span>
                                    </div>
                                </div>
                            </article>
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
                                Join the circle of homeowners and professionals who trust drydash for their daily wardrobe and shoe care.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <DownloadBtn />
                                <Link href="/services" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border border-primary text-primary font-medium text-body px-8 h-12 flex items-center justify-center transition-all active:scale-[0.98] rounded-lg cursor-pointer shadow-sm hover:bg-primary/5">
                                        Explore Services
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

export default BlogsPage;