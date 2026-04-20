'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../common/container';

interface ProcessSectionProps {
  index: string;
  title: string;
  description: string;
  svgPath: string;
  gradientFrom: string;
  gradientTo: string;
  textColor?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  index,
  title,
  description,
  svgPath,
  gradientFrom,
  gradientTo,
  textColor = 'text-white',
}) => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        height: 'calc(100vh - 65px)', // Refined estimate for navbar height
      }}
    >
      <Container className="relative h-full w-full flex flex-col pt-12 md:pt-24">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 z-10">
          {/* Index Number */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
          >
            <h1 className={`text-5xl md:text-9xl 2xl:text-[160px] font-bold ${textColor} relative leading-none select-none tracking-tighter`}>
              {index}
              <span className="opacity-40">.</span>
            </h1>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "anticipate", delay: 0.14 }}
            className={`${textColor} md:text-start max-w-xl self-end md:self-start md:w-[30%] w-full`}
          >
            <h2 className="text-4xl md:text-5xl 2xl:text-[120px] font-bold mb-6 leading-tight select-none">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
            <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-xs font-light">
              {description}
            </p>
          </motion.div>
        </div>

        {/* SVG Illustration - Pushed to bottom/center */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full h-[65%] md:h-[90%] z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            className="relative w-full h-full max-w-480 mx-auto"
          >
            <Image
              src={svgPath}
              alt={title}
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
