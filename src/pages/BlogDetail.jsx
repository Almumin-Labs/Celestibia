import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';

// Add this if you want to handle markdown content
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPublishedPosts, getPostById, loading } = useBlog();
    const [post, setPost] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const loadPost = () => {
            try {
                const foundPost = getPostById(parseInt(id));
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
    }, [id, getPostById]);

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

    if (notFound) {
        return (
            <div className="min-h-screen bg-[#020817] flex items-center justify-center text-white">
                <div className="text-center p-8 max-w-md">
                    <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
                    <p className="text-gray-400 mb-6">The post you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/blog')}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center mx-auto"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </button>
                </div>
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
