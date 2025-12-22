import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

// Initial blog posts data
const INITIAL_POSTS = [
    {
        id: 1,
        title: "The Future of Cloud Computing in 2025",
        excerpt: "Explore the emerging trends in cloud computing, from serverless architectures to edge computing and how they will shape the digital landscape.",
        content: `
            <h2>Introduction</h2>
            <p>Cloud computing continues to evolve at a rapid pace. As we approach 2025, the landscape is shifting from simple storage and compute solutions to intelligent, autonomous ecosystems. In this deep dive, we explore the key trends that will define the future of cloud infrastructure.</p>
            
            <h3>1. The Rise of Serverless 2.0</h3>
            <p>Serverless computing is revolutionizing how we build and deploy applications. By abstracting away server management, developers can focus purely on code. The next generation of serverless will offer stateful functions, reduced cold starts, and better edge integration.</p>
            <blockquote>"The best code is the code you don't have to manage."</blockquote>

            <h3>2. Edge Computing Everywhere</h3>
            <p>Edge computing brings computation closer to data sources, reducing latency and improving performance for real-time applications like IoT and autonomous vehicles. We expect creating edge nodes to become as simple as spinning up an EC2 instance.</p>

            <h3>3. AI-Optimized Cloud</h3>
            <p>Cloud providers are increasingly optimizing their hardware for AI/ML workloads. Custom silicon like TPU and Inferentia will become standard availability zones for training massive models.</p>
        `,
        author: "Amit Patel",
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
        content: `
            <h2>The AI Revolution in DevOps</h2>
            <p>Artificial Intelligence is transforming how we approach DevOps, making systems smarter and more efficient. It's no longer just about CI/CD; it's about AIOps.</p>

            <h3>Predictive Analytics</h3>
            <p>AI can predict system failures before they occur by analyzing log patterns and metric anomalies. This allows teams to take proactive measures rather than reactive firefighting.</p>

            <h3>Automated Code Reviews</h3>
            <ul>
                <li><strong>Static Analysis on Steroids:</strong> AI tools can suggest refactors for performance and security in real-time.</li>
                <li><strong>Test Generation:</strong> Automatically generating unit tests for legacy codebases.</li>
            </ul>
        `,
        author: "Priya Sharma",
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
        content: `
            <h2>Multi-Cloud Security Challenges</h2>
            <p>Managing security across multiple cloud providers requires a comprehensive strategy. The attack surface grows exponentially with each added provider.</p>

            <h3>Implementing Zero-Trust</h3>
            <p>Assume breach. Verify explicitly. Use least privileged access. These are the pillars of Zero Trust architecture that are essential for multi-cloud environments.</p>

            <h3>Unified Compliance Monitoring</h3>
            <p>Using tools like CSPM (Cloud Security Posture Management) to ensure that your AWS S3 buckets and Azure Blob Storage containers adhere to the same compliance standards.</p>
        `,
        author: "Vikram Singh",
        date: "Dec 08, 2024",
        readTime: "6 min read",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        metaTitle: "Securing Your Data in Multi-Cloud Environments | Celestibia",
        metaDescription: "Learn best practices for security across AWS, Azure, and Google Cloud Platform.",
        published: true,
        createdAt: new Date("2024-12-08").toISOString()
    },
    {
        id: 4,
        title: "Building Microservices with Rust",
        excerpt: "Why Rust is becoming the language of choice for high-performance, safe, and scalable microservices architecture.",
        content: `
            <h2>Why Rust?</h2>
            <p>Rust has been Stack Overflow's most loved language for years. Its memory safety guarantees without a garbage collector make it perfect for high-performance microservices.</p>

            <h3>Performance vs Safety</h3>
            <p>Traditionally, you had to choose between speed (C++) and safety (Java/Go). Rust gives you both. We discuss how ownership and borrowing models prevent data races.</p>

            <h3>Ecosystem Maturity</h3>
            <p>With frameworks like Actix-web and Axum, the Rust web ecosystem is now production-ready for enterprise applications.</p>
        `,
        author: "Aditya Verma",
        date: "Dec 05, 2024",
        readTime: "8 min read",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
        metaTitle: "Building Microservices with Rust | Celestibia",
        metaDescription: "Discover why Rust is perfect for modern microservices architecture.",
        published: true,
        createdAt: new Date("2024-12-05").toISOString()
    },
    {
        id: 5,
        title: "The State of WebAssembly in 2024",
        excerpt: "WebAssembly is moving beyond the browser. Learn how Wasm is enabling a new wave of server-side computing.",
        content: `
            <h2>Beyond the Browser</h2>
            <p>WebAssembly (Wasm) started in the browser but is finding its true calling on the server. It offers a secure, sandboxed, and polyglot runtime.</p>

            <h3>Wasm vs Containers</h3>
            <p>While Docker containers virtualize the OS, Wasm virtualizes the application. It offers startup times in microseconds, making it ideal for high-density serverless functions.</p>

            <h3>The Component Model</h3>
            <p>We explore the Wasm Component Model and how it allows composing applications from libraries written in different languages (Rust, C++, Python) seamlessly.</p>
        `,
        author: "Neha Gupta",
        date: "Dec 01, 2024",
        readTime: "5 min read",
        category: "WebAssembly",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
        metaTitle: "The State of WebAssembly in 2024 | Celestibia",
        metaDescription: "WebAssembly on the server: Wasm vs Docker and the Component Model.",
        published: true,
        createdAt: new Date("2024-12-01").toISOString()
    },
    {
        id: 6,
        title: "Scaling Kubernetes for Enterprise",
        excerpt: "Lessons learned from managing large-scale Kubernetes clusters. Configuring limits, requests, and auto-scaling.",
        content: `
            <h2>The Day 2 Operations</h2>
            <p>Setting up Kubernetes is easy (kind of). Operating it at scale is the real challenge. </p>

            <h3>Resource Management</h3>
            <p>Understanding Requests vs Limits is crucial. We verify the "Goldilocks" problem: finding the just-right amount of resources to prevent OOM kills without wasting money.</p>

            <h3>Cost Optimization</h3>
            <p>Using Spot Instances and Karpenter for intelligent node provisioning to reduce cloud bills by up to 40%.</p>
        `,
        author: "Karthik Reddy",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Kubernetes",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
        metaTitle: "Scaling Kubernetes for Enterprise | Celestibia",
        metaDescription: "Tips for managing large-scale Kubernetes clusters effectively.",
        published: true,
        createdAt: new Date("2024-11-28").toISOString()
    }
];

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // For development/demo purposes, we are prioritizing the INITIAL_POSTS
        // ensuring the user sees the updated "Notion-like" content and new authors.
        // in a real app, we might merge or version the data.
        setPosts(INITIAL_POSTS);
        localStorage.setItem('celestibia_blog_posts', JSON.stringify(INITIAL_POSTS));
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
