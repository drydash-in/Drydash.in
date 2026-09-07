'use client';

import React from 'react';
import Image from 'next/image';
import PlaystoreLogo from '@/../public/Assests/SVG/playstore.svg';
import AppStoreLogo from '@/../public/Assests/SVG/app-store.svg';
// import { AndroidLogo, QrCode } from 'phosphor-react';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import playStoreQR from '@/../public/Assests/SVG/Drydash_QR.svg'

interface DownloadBtnProps {
    variant?: 'default' | 'minimal_black';
    varient?: 'default' | 'minimal_black'; // Support for typo in request
}

const DownloadBtn = ({ variant = 'default', varient }: DownloadBtnProps) => {
    const activeVariant = varient || variant;
    const [isIOS, setIsIOS] = React.useState(false);

    React.useEffect(() => {
        // Detect if device is iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) {
            setIsIOS(true);
        }
    }, []);

    return (
        <div className="will-change-transform w-full sm:w-auto flex flex-col justify-center">
            {/* Desktop View (Morphing Dialog) */}
            <div className="hidden md:block">
                <MorphingDialog
                    transition={{
                        type: 'spring',
                        bounce: 0.05,
                        duration: 0.25,
                    }}
                >
                    {activeVariant === 'minimal_black' ? (
                        <MorphingDialogTrigger
                            style={{ borderRadius: '16px' }}
                            className="w-auto mx-auto"
                        >
                            <div
                                style={{ borderRadius: '16px' }}
                                className="bg-black text-white font-black text-lg px-12 h-14 md:h-16 flex items-center justify-center transition-transform hover:scale-105 active:scale-[0.98] shadow-xl w-max"
                            >
                                Download App
                            </div>
                        </MorphingDialogTrigger>
                    ) : (
                        <MorphingDialogTrigger
                            style={{ borderRadius: '12px' }}
                            className="p-[2px] bg-primary w-full "
                        >
                            <div
                                style={{ borderRadius: '12px' }}
                                className="bg-primary text-white 2xl:text-lg text-[15px] 2xl:w-50 w-full px-8 2xl:h-14 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
                            >
                                <Image src={PlaystoreLogo} alt="Play Store" className="w-5 h-auto hidden" />
                                Download App
                            </div>
                        </MorphingDialogTrigger>
                    )}

                    <MorphingDialogContainer>
                        <MorphingDialogContent
                            style={{ borderRadius: '48px' }}
                            className="squircle-lg pointer-events-auto relative flex h-auto w-full sm:w-[650px] flex-col md:flex-row overflow-hidden border border-black/10 bg-white shadow-2xl"
                        >
                            {/* Left Side: Instructions */}
                            <div className="flex-1 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/5 bg-white z-10">
                                <div>
                                    <MorphingDialogTitle className="text-h3">
                                        Steps to Download
                                    </MorphingDialogTitle>

                                    <MorphingDialogDescription disableLayoutAnimation className="flex flex-col gap-6 mt-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 squircle rounded-xl bg-primary/15 flex items-center justify-center text-primary text-[13px] font-bold shrink-0">1</div>
                                            <span className="text-body text-foreground">Open your phone's QR scanner</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 squircle rounded-xl bg-primary/15 flex items-center justify-center text-primary text-[13px] font-bold shrink-0">2</div>
                                            <span className="text-body text-foreground">Scan the QR code below</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 squircle rounded-xl bg-primary/15 flex items-center justify-center text-primary text-[13px] font-bold shrink-0">3</div>
                                            <span className="text-body text-foreground">Tap the link to download</span>
                                        </div>
                                    </MorphingDialogDescription>
                                </div>
                            </div>

                            {/* Right Side: QR Code Area */}
                            <div className="flex-[0.8] bg-white p-10 flex flex-col items-center justify-center relative">
                                <div className="relative p-6">
                                    {/* Corner brackets */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none"></div>

                                    <div className="w-[180px] h-[180px] bg-white flex items-center justify-center rounded-sm">
                                        <Image src={playStoreQR} alt="Play Store QR" className="w-full h-full object-contain" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                        </MorphingDialogContent>
                    </MorphingDialogContainer>
                </MorphingDialog>
            </div>

            {/* Mobile View (Direct Link) */}
            <div className="block md:hidden w-full">
                <a
                    href={isIOS ? "https://apps.apple.com/in/app/drydash/id6761757578" : "https://play.google.com/store/apps/details?id=com.drydash.newCustomer&hl=en_IN"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                >
                    {activeVariant === 'minimal_black' ? (
                        <div
                            style={{ borderRadius: '16px' }}
                            className="bg-black font-franie text-white font-black text-[15px] h-12 flex items-center justify-center transition-transform hover:scale-105 active:scale-[0.98] shadow-xl w-max mx-auto"
                        >
                            Download
                        </div>
                    ) : (
                        <div
                            style={{ borderRadius: '12px' }}
                            className="p-[2px] bg-primary w-full"
                        >
                            <div
                                style={{ borderRadius: '12px' }}
                                className="bg-primary font-franie text-white text-[15px] w-full h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
                            >
                                <Image src={isIOS ? AppStoreLogo : PlaystoreLogo} alt={isIOS ? "App Store" : "Play Store"} className="w-5 h-auto text-white fill-white stroke-white" />
                                Download
                            </div>
                        </div>
                    )}
                </a>
            </div>
        </div>
    );
};

export default DownloadBtn;