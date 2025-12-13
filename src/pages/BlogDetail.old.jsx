import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPublishedPosts, loading } = useBlog();
    const [post, setPost] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const loadPost = () => {
            try {
                const posts = getPublishedPosts();
                const foundPost = posts.find(p => p.id === parseInt(id));
                if (!foundPost) {
                    setNotFound(true);
                    return;
                }
                setPost(foundPost);
            } catch (error) {
                console.error('Error loading post:', error);
                setNotFound(true);
            }
        };

        loadPost();
    }, [id, getPublishedPosts]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020817] text-white pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading post...</p>
                </div>
            </div>
        );
    }

    if (notFound || !post) {
        return (
            <div className="min-h-screen bg-[#020817] flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-3xl font-bold mb-4 text-center">Post Not Found</h2>
                <p className="text-gray-400 mb-6 text-center">The post you're looking for doesn't exist or has been removed.</p>
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                <header className="mb-12 text-center">
                    <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                        {post.category}
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                    >
                        {post.title}
                    </motion.h1>

                    <div className="flex items-center justify-center gap-6 text-gray-400 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>
                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 rounded-xl overflow-hidden"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto max-h-[500px] object-cover rounded-xl"
                    />
                </motion.div>

                <div className="prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold">Share this article</h3>
                        <div className="flex gap-4">
                            <button className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="text-gray-400 hover:text-blue-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar / Social Share */}
                    <aside className="lg:col-span-2">
                        <div className="lg:sticky lg:top-32 flex lg:flex-col gap-4 items-center justify-center lg:justify-start">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden lg:block mb-2">Share</p>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#0A66C2] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#1DA1F2] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#1877F2] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Author Info */}
                        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-800">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{post.author}</h4>
                                <p className="text-sm text-gray-400">Technical Writer & Cloud Architect</p>
                            </div>
                        </div>

                        {/* Article Text */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="lead text-xl text-gray-300 mb-8">{post.excerpt}</p>

                            <p className="text-gray-400 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Evolution of Infrastructure</h2>
                            <p className="text-gray-400 mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-gray-300 my-10">
                                "The cloud is not just about saving money, it's about agility, speed, and innovation."
                            </blockquote>

                            <h3 className="text-xl font-bold text-white mt-10 mb-4">Key Takeaways</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-8">
                                <li>Scalability is paramount for modern applications.</li>
                                <li>Security should be integrated from day one (DevSecOps).</li>
                                <li>Automation reduces human error and accelerates deployment.</li>
                            </ul>

                            <p className="text-gray-400">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;
