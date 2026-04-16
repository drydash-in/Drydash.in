import React from "react";

const BottomBlur = () => {
    return (
        <div
            className="bg-background fixed inset-x-0 bottom-0 z-40 h-16 w-full to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"
            style={{
                maskImage: "linear-gradient(to top, black, transparent)",
                WebkitMaskImage: "linear-gradient(to top, black, transparent)",
            }}
        />
    );
};

export default BottomBlur;