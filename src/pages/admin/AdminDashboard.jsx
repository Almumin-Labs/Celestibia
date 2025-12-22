import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useBlog } from '@/context/BlogContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    Settings,
    LogOut,
    Plus,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    Search,
    TrendingUp,
    Users,
    BarChart3,
    Briefcase,
    Building2,
    Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogEditor from './BlogEditor';
import ServiceManager from './ServiceManager';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const { posts, deletePost, updatePost } = useBlog();
    const [activeTab, setActiveTab] = useState('overview');
    const [editingPost, setEditingPost] = useState(null);
    const [showEditor, setShowEditor] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        {
            title: 'Total Posts',
            value: posts.length,
            icon: FileText,
            color: 'from-blue-500 to-blue-600',
            change: '+12%'
        },
        {
            title: 'Published',
            value: posts.filter(p => p.published).length,
            icon: Eye,
            color: 'from-green-500 to-green-600',
            change: '+8%'
        },
        {
            title: 'Total Views',
            value: '12.5K',
            icon: TrendingUp,
            color: 'from-purple-500 to-purple-600',
            change: '+24%'
        },
        {
            title: 'Engagement',
            value: '89%',
            icon: BarChart3,
            color: 'from-orange-500 to-orange-600',
            change: '+5%'
        },
    ];

    const handleDeletePost = (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(id);
        }
    };

    const handleTogglePublish = (post) => {
        updatePost(post.id, { published: !post.published });
    };

    const handleEditPost = (post) => {
        setEditingPost(post);
        setShowEditor(true);
        setActiveTab('editor');
    };

    const handleNewPost = () => {
        setEditingPost(null);
        setShowEditor(true);
        setActiveTab('editor');
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black">
            {/* Top Navigation Bar - Minimalist */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity">
                                Celestibia <span className="text-gray-400 font-normal">Admin</span>
                            </Link>
                            <div className="hidden md:flex items-center gap-1">
                                {[
                                    { id: 'overview', label: 'Overview', icon: BarChart3 },
                                    { id: 'posts', label: 'Posts', icon: FileText },
                                    { id: 'services', label: 'Services', icon: Briefcase },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setShowEditor(false);
                                        }}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === tab.id
                                            ? 'bg-black dark:bg-white text-white dark:text-black'
                                            : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-2">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold border border-gray-200 dark:border-white/10">
                                    {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name || 'Admin'}</span>
                            </div>
                            <Button
                                onClick={logout}
                                variant="ghost"
                                size="sm"
                                className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                            >
                                <LogOut className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-black/20 dark:hover:border-white/20 transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5">
                                                <stat.icon className="w-5 h-5 text-black dark:text-white" />
                                            </div>
                                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white">
                                                {stat.change}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            {stat.title}
                                        </h3>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                            {stat.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white dark:bg-zinc-900/50 rounded-xl border border-gray-200 dark:border-white/10 p-8">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <button
                                        onClick={handleNewPost}
                                        className="flex items-center justify-center gap-3 p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all shadow-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        <span className="font-medium text-sm">New Blog Post</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('services')}
                                        className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                    >
                                        <Briefcase className="w-4 h-4" />
                                        <span className="font-medium text-sm">Manage Services</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('posts')}
                                        className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                    >
                                        <FileText className="w-4 h-4" />
                                        <span className="font-medium text-sm">View All Posts</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white dark:bg-zinc-900/50 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
                                <div className="p-6 border-b border-gray-100 dark:border-white/5">
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Posts</h2>
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-white/5">
                                    {posts.slice(0, 5).map((post) => (
                                        <div
                                            key={post.id}
                                            className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center gap-4 flex-1">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-10 h-10 rounded-md object-cover ring-1 ring-gray-100 dark:ring-white/10"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-1">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                        {post.category} • {post.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border ${post.published
                                                    ? 'bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white border-black/10 dark:border-white/10'
                                                    : 'bg-transparent text-gray-500 border-gray-200'
                                                    }`}>
                                                    {post.published ? 'Published' : 'Draft'}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'posts' && !showEditor && (
                        <motion.div
                            key="posts"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Blog Posts</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage and organize your content</p>
                                </div>
                                <Button
                                    onClick={handleNewPost}
                                    className="bg-black hover:bg-gray-800 text-white rounded-lg px-6"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    New Post
                                </Button>
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                                />
                            </div>

                            {/* Posts List */}
                            <div className="space-y-4">
                                {filteredPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        layout
                                        className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
                                    >
                                        <div className="flex gap-6">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-24 h-24 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-3 leading-relaxed">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                                            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-medium">
                                                                {post.category}
                                                            </span>
                                                            <span>{post.date}</span>
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleTogglePublish(post)}
                                                            className={`p-2 rounded-md transition-all ${post.published
                                                                ? 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                                                                : 'text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                                                                }`}
                                                            title={post.published ? 'Unpublish' : 'Publish'}
                                                        >
                                                            {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleEditPost(post)}
                                                            className="p-2 rounded-md text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeletePost(post.id)}
                                                            className="p-2 rounded-md text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'editor' && showEditor && (
                        <BlogEditor
                            post={editingPost}
                            onClose={() => {
                                setShowEditor(false);
                                setActiveTab('posts');
                            }}
                        />
                    )}

                    {activeTab === 'services' && (
                        <ServiceManager />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AdminDashboard;
