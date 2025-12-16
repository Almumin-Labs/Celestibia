import React from 'react';
import { motion } from 'framer-motion';

const Industry = () => {
    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden pt-20 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/50">
                    Industry Solutions
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We are crafting something amazing. Industry-specific solutions and insights will be shared here soon.
                </p>
                <div className="mt-8">
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Industry;
