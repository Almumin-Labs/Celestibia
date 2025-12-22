import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, Chrome, Github } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Default to User login
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            const role = isAdmin ? 'admin' : 'user';
            login(email, role);

            // Redirect based on role
            if (role === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/profile');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex bg-black">
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 relative z-10 bg-black">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="mb-10">
                        <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm flex items-center mb-8">
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold text-white mb-2">
                            {isAdmin ? 'Admin Portal' : 'Welcome back'}
                        </h1>
                        <p className="text-gray-400">
                            {isAdmin ? 'Secure access for administrators' : 'Login to your Celestibia account'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={isAdmin ? "admin@celestibia.com" : "name@example.com"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" classname="text-white">Password</Label>
                                {!isAdmin && (
                                    <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <Button
                            type="submit"
                            className="w-full bg-white text-black hover:bg-gray-200 h-12 font-medium text-lg rounded-lg transition-colors"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Loading...
                                </>
                            ) : 'Login'}
                        </Button>
                    </form>

                    {!isAdmin && (
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-[#333]" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-black px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" className="h-12 border-[#333] bg-transparent text-white hover:bg-[#1a1a1a]">
                                    <Chrome className="mr-2 h-5 w-5" /> Google
                                </Button>
                                <Button variant="outline" className="h-12 border-[#333] bg-transparent text-white hover:bg-[#1a1a1a]">
                                    <Github className="mr-2 h-5 w-5" /> GitHub
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="pt-6 text-center space-y-4">
                        {!isAdmin && (
                            <p className="text-gray-400 text-sm">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-white hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        )}

                        <Button
                            variant="ghost"
                            className="text-xs text-gray-500 hover:text-white"
                            onClick={() => setIsAdmin(!isAdmin)}
                        >
                            {isAdmin ? 'Switch to User Login' : 'Switch to Admin Login'}
                        </Button>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-gray-600">
                        <Link to="#" className="hover:text-gray-400 mr-4">Terms of Service</Link>
                        <Link to="#" className="hover:text-gray-400">Privacy Policy</Link>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-[#1a1a1a]">
                <img
                    src={isAdmin
                        ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" // Tech/Server room
                        : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" // Abstract/Modern
                    }
                    alt="Login Visual"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />

                <div className="absolute bottom-12 left-12 right-12 z-10">
                    <blockquote className="space-y-2">
                        <p className="text-lg font-medium text-white/90">
                            "{isAdmin
                                ? "Control, monitor, and scale your infrastructure with precision from a single powerful dashboard."
                                : "Join thousands of developers building the future with Celestibia's cloud solutions."
                            }"
                        </p>
                        <footer className="text-sm text-white/60">
                            {isAdmin ? "— Admin System" : "— Team Celestibia"}
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Login;
