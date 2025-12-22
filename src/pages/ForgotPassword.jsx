import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPassword = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
            >
                <Link to="/login" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
                </Link>

                {!submitted ? (
                    <>
                        <div className="text-center mb-8">
                            <div className="mx-auto w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400">
                                <Mail className="h-6 w-6" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
                            <p className="text-white/60">Enter your email address and we'll send you a link to reset your password.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white/90">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-white/5 border-white/10 text-white focus:border-blue-500"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-6">
                                Send Reset Link
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Check your email</h2>
                        <p className="text-white/60 mb-8">
                            We've sent a password reset link to your email address. Please follow the instructions to reset your password.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full border-white/10 text-white hover:bg-white/5"
                            onClick={() => setSubmitted(false)}
                        >
                            Try another email
                        </Button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
