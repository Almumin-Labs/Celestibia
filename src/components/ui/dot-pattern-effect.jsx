import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const DotPatternEffect = ({
    className,
    colors = [[0, 255, 255]],
    dotSize = 2,
    animationSpeed = 3,
}) => {
    // Convert RGB array to CSS color string
    const primaryColor = colors[0] ? `rgb(${colors[0].join(",")})` : "rgb(0, 255, 255)";
    const secondaryColor = colors[1] ? `rgb(${colors[1].join(",")})` : primaryColor;

    return (
        <div className={cn("absolute inset-0 h-full w-full bg-black overflow-hidden", className)}>
            {/* Dot Pattern Background - Bolder */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `radial-gradient(${primaryColor} 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Animated Glowing Gradient Blob 1 - Larger and Bolder */}
            <motion.div
                className="absolute inset-0 opacity-60"
                animate={{
                    background: [
                        `radial-gradient(800px circle at 0% 0%, ${primaryColor} 0%, transparent 60%)`,
                        `radial-gradient(800px circle at 100% 100%, ${secondaryColor} 0%, transparent 60%)`,
                        `radial-gradient(800px circle at 0% 0%, ${primaryColor} 0%, transparent 60%)`,
                    ],
                }}
                transition={{
                    duration: animationSpeed * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    mixBlendMode: 'screen'
                }}
            />

            {/* Animated Glowing Gradient Blob 2 - Counter movement */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                    background: [
                        `radial-gradient(600px circle at 100% 0%, ${secondaryColor} 0%, transparent 50%)`,
                        `radial-gradient(600px circle at 0% 100%, ${primaryColor} 0%, transparent 50%)`,
                        `radial-gradient(600px circle at 100% 0%, ${secondaryColor} 0%, transparent 50%)`,
                    ],
                }}
                transition={{
                    duration: animationSpeed * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Hover Reveal Mask */}
            <div className="absolute inset-0 bg-black/80 group-hover/canvas-card:bg-black/30 transition-colors duration-500" />
        </div>
    );
};
