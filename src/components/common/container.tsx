import React, { forwardRef } from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`animate-fade-in-blur container mx-auto 2xl:max-w-400 md:max-w-280 max-w-95 px-1 py-0 ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Container.displayName = "Container";

export default Container;