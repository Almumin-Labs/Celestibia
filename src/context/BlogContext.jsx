import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

// Initial blog posts data
const INITIAL_POSTS = [
    {
        id: 1,
        title: "The Future of Cloud Computing in 2025",
        excerpt: "Explore the emerging trends in cloud computing, from serverless architectures to edge computing and how they will shape the digital landscape.",
        content: `<h2>Introduction</h2><p>Cloud computing continues to evolve at a rapid pace. In this article, we explore the key trends that will define the future of cloud infrastructure.</p><h2>Serverless Architecture</h2><p>Serverless computing is revolutionizing how we build and deploy applications. By abstracting away server management, developers can focus purely on code.</p><h2>Edge Computing</h2><p>Edge computing brings computation closer to data sources, reducing latency and improving performance for real-time applications.</p>`,
        author: "Rahul Kumar",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        metaTitle: "The Future of Cloud Computing in 2025 | Celestibia",
        metaDescription: "Explore emerging trends in cloud computing including serverless architectures and edge computing.",
        published: true,
        createdAt: new Date("2024-12-12").toISOString()
    },
    {
        id: 2,
        title: "AI-Driven DevOps: Automating the Future",
        excerpt: "How Artificial Intelligence is revolutionizing DevOps pipelines, predicting failures, and optimizing deployment strategies.",
        content: `<h2>The AI Revolution in DevOps</h2><p>Artificial Intelligence is transforming how we approach DevOps, making systems smarter and more efficient.</p><h2>Predictive Analytics</h2><p>AI can predict system failures before they occur, allowing teams to take proactive measures.</p>`,
        author: "Sarah Jenkins",
        date: "Dec 10, 2024",
        readTime: "4 min read",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        metaTitle: "AI-Driven DevOps: Automating the Future | Celestibia",
        metaDescription: "Discover how AI is revolutionizing DevOps pipelines and deployment strategies.",
        published: true,
        createdAt: new Date("2024-12-10").toISOString()
    },
    {
        id: 3,
        title: "Securing Your Data in a Multi-Cloud World",
        excerpt: "Best practices for maintaining robust security protocols across AWS, Azure, and Google Cloud Platform environments.",
        content: `<h2>Multi-Cloud Security Challenges</h2><p>Managing security across multiple cloud providers requires a comprehensive strategy.</p><h2>Best Practices</h2><p>Implement zero-trust architecture, use encryption everywhere, and maintain consistent security policies.</p>`,
        author: "Michael Chen",
        date: "Dec 08, 2024",
        readTime: "6 min read",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        metaTitle: "Securing Your Data in Multi-Cloud Environments | Celestibia",
        metaDescription: "Learn best practices for security across AWS, Azure, and Google Cloud Platform.",
        published: true,
        createdAt: new Date("2024-12-08").toISOString()
    }
];

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load posts from localStorage or use initial data
        const storedPosts = localStorage.getItem('celestibia_blog_posts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        } else {
            setPosts(INITIAL_POSTS);
            localStorage.setItem('celestibia_blog_posts', JSON.stringify(INITIAL_POSTS));
        }
        setLoading(false);
    }, []);

    const savePosts = (newPosts) => {
        setPosts(newPosts);
        localStorage.setItem('celestibia_blog_posts', JSON.stringify(newPosts));
    };

    const addPost = (post) => {
        const newPost = {
            ...post,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        const updatedPosts = [newPost, ...posts];
        savePosts(updatedPosts);
        return newPost;
    };

    const updatePost = (id, updatedData) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, ...updatedData } : post
        );
        savePosts(updatedPosts);
    };

    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        savePosts(updatedPosts);
    };

    const getPostById = (id) => {
        return posts.find(post => post.id === parseInt(id));
    };

    const getPublishedPosts = () => {
        return posts.filter(post => post.published !== false);
    };

    return (
        <BlogContext.Provider value={{
            posts,
            loading,
            addPost,
            updatePost,
            deletePost,
            getPostById,
            getPublishedPosts
        }}>
            {children}
        </BlogContext.Provider>
    );
};
