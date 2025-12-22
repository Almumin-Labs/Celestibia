import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';

const Blog = () => {
    const { getPublishedPosts, loading } = useBlog();
    const BLOG_POSTS = getPublishedPosts();

    if (loading) {
        return (
            <div className="min-h-screen bg-transparent text-white pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading posts...</p>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-transparent text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden z-10">
                <div className="absolute inset-0 bg-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
                    >
                        <span className="text-blue-500">Blogs</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore the latest trends, tutorials, and insights from the world of cloud computing, DevOps, and software engineering.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-[#0B1120] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60 z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-blue-500" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-blue-500" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-800/50 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-[#0B1120]">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{post.author}</span>
                                        </div>

                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors group/link"
                                        >
                                            Read More <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
