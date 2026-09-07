'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';

import Step1Img from '@/../public/Assests/SVG/howItsWorks/step1.svg';
import Step2Img from '@/../public/Assests/SVG/howItsWorks/step2.svg';
import Step3Img from '@/../public/Assests/SVG/howItsWorks/step3.svg';

const steps = [
  {
    step: "Step 1",
    title: "Swip for instant\npickup",
    image: Step1Img,
    alt: "Step 1 - Swip for instant pickup",
  },
  {
    step: "Step 2",
    title: "Pick a slot, add\nitems and book",
    image: Step2Img,
    alt: "Step 2 - Pick a slot, add items and book",
  },
  {
    step: "Step 3",
    title: "All Done",
    image: Step3Img,
    alt: "Step 3 - All Done",
  },
];

const HowItsWorks = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 overflow-hidden bg-background">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-h3">
              How its works
            </h2>
            <p className="text-body text-foreground/80 mt-3 md:mt-4 leading-relaxed">
              Follow this simple steps to book your first pickup
            </p>
          </div>

          {/* Steps Container: Column-wise on mobile, 3-column grid on md, xl, 2xl */}
          <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start w-full max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto"
              >
                {/* Phone Mockup SVG */}
                <div className="w-full flex items-center justify-center mb-6 lg:mb-8">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    priority={idx === 0}
                    className="w-full max-w-[250px] sm:max-w-[270px] md:max-w-[290px] xl:max-w-[280px] 2xl:max-w-[360px] h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Step Label & Title */}
                <div className="w-full max-w-[250px] sm:max-w-[270px] md:max-w-[290px] xl:max-w-[330px] 2xl:max-w-[360px] text-left mx-auto md:mx-0">
                  <span className="font-mulish text-sm md:text-base text-foreground/75 font-medium block mb-1.5">
                    {item.step}
                  </span>
                  <h3 className="text-h4">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItsWorks;