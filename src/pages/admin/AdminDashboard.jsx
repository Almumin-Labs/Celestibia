import React, { useState } from 'react';
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
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#020817]">
            {/* Top Navigation Bar - Medium Style */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-[#0A0F1E] border-b border-gray-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Celestibia <span className="text-sm font-normal text-gray-500">Admin</span>
                            </h1>
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
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                                ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                                    {user?.name?.charAt(0) || 'A'}
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name || 'Admin'}</span>
                            </div>
                            <Button
                                onClick={logout}
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
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
                                        className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                                <stat.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                                {stat.change}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                            {stat.title}
                                        </h3>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {stat.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <button
                                        onClick={handleNewPost}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
                                    >
                                        <Plus className="w-5 h-5" />
                                        <span className="font-medium">New Blog Post</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('services')}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
                                    >
                                        <Briefcase className="w-5 h-5" />
                                        <span className="font-medium">Manage Services</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('posts')}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
                                    >
                                        <FileText className="w-5 h-5" />
                                        <span className="font-medium">View All Posts</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h2>
                                <div className="space-y-3">
                                    {posts.slice(0, 5).map((post) => (
                                        <div
                                            key={post.id}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center gap-3 flex-1">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        {post.category} • {post.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.published
                                                        ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                                                        : 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400'
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
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Posts</h2>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your blog content</p>
                                </div>
                                <Button
                                    onClick={handleNewPost}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    New Post
                                </Button>
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Posts List */}
                            <div className="space-y-4">
                                {filteredPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        layout
                                        className="bg-white dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all"
                                    >
                                        <div className="flex gap-6">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-32 h-32 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                                            <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 font-medium">
                                                                {post.category}
                                                            </span>
                                                            <span>{post.date}</span>
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleTogglePublish(post)}
                                                            className={`p-2 rounded-lg transition-colors ${post.published
                                                                    ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                                                                    : 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400'
                                                                }`}
                                                            title={post.published ? 'Unpublish' : 'Publish'}
                                                        >
                                                            {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleEditPost(post)}
                                                            className="p-2 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeletePost(post.id)}
                                                            className="p-2 rounded-lg bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors"
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
