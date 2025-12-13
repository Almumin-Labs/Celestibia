import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DotPatternEffect } from "@/components/ui/dot-pattern-effect";
import { Users, Zap, Target, Clock } from "lucide-react";

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

const Card = ({
    title,
    icon,
    children,
    description
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-[20rem] bg-black overflow-hidden"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white dark:text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white dark:text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white dark:text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white dark:text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 h-full w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover/canvas-card:-translate-y-10">
                    <div className="mb-4 text-white group-hover/canvas-card:text-white transition-colors duration-200">
                        {icon}
                    </div>
                    <h2 className="text-xl font-bold text-white text-center transition-colors duration-200">
                        {title}
                    </h2>
                </div>

                <div className="absolute bottom-8 left-4 right-4 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-300 text-center">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function EngagementModels() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card title="Dedicated Remote Engineers" icon={<Users className="h-10 w-10 text-white" />} description="Hire full-time cloud engineers, DevOps experts, or developers who work as an extension of your team.">
                    <DotPatternEffect
                        colors={[[16, 185, 129]]} // Emerald
                    />
                </Card>
                <Card title="On-Demand Specialists" icon={<Zap className="h-10 w-10 text-white" />} description="Access certified experts (AWS, Azure, GCP, K8s) for short-term assignments or emergency tasks.">
                    <DotPatternEffect
                        colors={[
                            [236, 72, 153], // Pink
                            [232, 121, 249], // Purple
                        ]}
                        animationSpeed={5}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card title="Team Augmentation" icon={<Users className="h-10 w-10 text-white" />} description="Quickly plug in vetted talent into your existing team and workflows — no long hiring cycles.">
                    <DotPatternEffect
                        colors={[[125, 211, 252]]} // Sky Blue
                    />
                </Card>
                <Card title="Project-Based Delivery Pods" icon={<Target className="h-10 w-10 text-white" />} description="Get an agile, cross-functional squad tailored to deliver specific outcomes with timelines.">
                    <DotPatternEffect
                        colors={[[168, 85, 247]]} // Purple
                    />
                </Card>
            </div>
        </div>
    );
}
