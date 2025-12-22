import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2, ArrowRight, Apple, Github } from 'lucide-react';

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            login(formData.email, 'user');
            navigate('/profile');
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex bg-black">
            {/* Left Side - SignUp Form */}
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
                            Create Account
                        </h1>
                        <p className="text-gray-400">
                            Join Celestibia and start your journey today
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" classname="text-white">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" classname="text-white">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 focus:border-white h-12 rounded-lg"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-white text-black hover:bg-gray-200 h-12 font-medium text-lg rounded-lg transition-colors mt-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-[#333]" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-black px-2 text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-12 border-[#333] bg-transparent text-white hover:bg-[#1a1a1a]">
                                <Apple className="mr-2 h-5 w-5" /> Apple
                            </Button>
                            <Button variant="outline" className="h-12 border-[#333] bg-transparent text-white hover:bg-[#1a1a1a]">
                                <Github className="mr-2 h-5 w-5" /> GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="pt-2 text-center">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-white hover:underline font-medium">
                                Log in
                            </Link>
                        </p>
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
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2070&auto=format&fit=crop"
                    alt="SignUp Visual"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />

                <div className="absolute bottom-12 left-12 right-12 z-10">
                    <blockquote className="space-y-2">
                        <p className="text-lg font-medium text-white/90">
                            "Building the future with Celestibia has been a game-changer. The scalability and performance are unmatched."
                        </p>
                        <footer className="text-sm text-white/60">
                            — Alex Chen, Lead Developer
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
