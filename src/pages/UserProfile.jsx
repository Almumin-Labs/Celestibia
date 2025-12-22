import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Shield, Calendar, MapPin, Building, Link as LinkIcon, Edit, Share2, Globe, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you might have this, or fallback to Input
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const UserProfile = () => {
    const { user, logout } = useAuth();

    // Initial State derived from user or defaults
    const [profileData, setProfileData] = useState({
        bio: "Passionate developer focused on building intuitive and scalable web applications. I love exploring new technologies and solving complex problems with clean code.",
        location: "San Francisco, CA",
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        portfolio: "https://celestibia.com",
        blogsCount: 23,
        followers: "1.2k",
        following: 48
    });

    // Edit Form State
    const [editForm, setEditForm] = useState(profileData);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        // Load from local storage if available for persistence demo
        const saved = localStorage.getItem('celestibia_user_profile');
        if (saved) {
            setProfileData(JSON.parse(saved));
            setEditForm(JSON.parse(saved)); // Sync edit form
        }
    }, []);

    const handleSaveProfile = () => {
        setProfileData(editForm);
        localStorage.setItem('celestibia_user_profile', JSON.stringify(editForm));
        setIsDialogOpen(false);
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    const SocialLink = ({ icon: Icon, href, colorClass }) => {
        if (!href) return null;
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md",
                    "bg-white border border-gray-100 text-gray-400 hover:text-white",
                    colorClass
                )}
            >
                <Icon className="h-5 w-5" />
            </a>
        );
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden bg-gray-50">
            {/* Enhanced Gradient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-gray-50 to-white opacity-70"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-3xl filter"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-3xl filter"></div>
            </div>

            <div className="relative max-w-6xl mx-auto space-y-8 z-10">

                {/* Header Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                        {/* Cover Image */}
                        <div className="h-64 w-full bg-[#0F172A] relative overflow-hidden">
                            {/* Abstract digital waves */}
                            <div className="absolute inset-0 opacity-30">
                                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 50 Q 50 100 100 50 T 200 50" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
                                    <path d="M0 60 Q 50 110 100 60 T 200 60" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: "#60A5FA", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                            </div>

                            <div className="absolute top-6 right-6 flex gap-3">
                                <Button
                                    size="sm"
                                    onClick={logout}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-full px-6 transition-all"
                                >
                                    Sign Out
                                </Button>
                            </div>
                        </div>

                        <div className="px-8 pb-8">
                            <div className="relative flex justify-between items-end -mt-20 mb-8 sm:flex-row flex-col items-center sm:items-end text-center sm:text-left gap-4">
                                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
                                    <div className="relative group">
                                        <div className="h-40 w-40 rounded-full border-[6px] border-white bg-black text-white flex items-center justify-center text-6xl font-bold shadow-2xl relative overflow-hidden">
                                            <span className="relative z-10">{user.name.charAt(0).toUpperCase()}</span>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-green-500 h-5 w-5 rounded-full border-[3px] border-white"></div>
                                    </div>
                                    <div className="mb-2 space-y-1">
                                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">{user.name}</h1>
                                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-gray-500 font-medium">
                                            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-blue-500" /> {user.role === 'admin' ? 'Admin' : 'Member'}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                            <span className="flex items-center gap-1.5 text-gray-600"><Building className="h-4 w-4" /> Celestibia Solutions</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-2 w-full sm:w-auto mt-4 sm:mt-0">
                                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                        <DialogTrigger asChild>
                                            <Button className="flex-1 sm:flex-none bg-gray-900 hover:bg-black text-white px-8 rounded-full shadow-lg shadow-gray-900/20 active:scale-95 transition-transform">
                                                <Edit className="mr-2 h-4 w-4" /> Edit Profile
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[600px] bg-white border-0 shadow-2xl rounded-2xl p-0 overflow-hidden">
                                            <div className="bg-gray-50 border-b px-6 py-4 flex items-center justify-between">
                                                <DialogHeader className="p-0">
                                                    <DialogTitle className="text-xl font-bold text-gray-900">Edit Profile</DialogTitle>
                                                    <DialogDescription className="text-gray-500">
                                                        Update your personal information and public profile.
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </div>

                                            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label className="text-sm font-semibold text-gray-700">Bio</Label>
                                                        <Textarea
                                                            className="min-h-[100px]"
                                                            value={editForm.bio}
                                                            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                                            placeholder="Tell us about yourself..."
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                                <Github className="h-4 w-4" /> GitHub URL
                                                            </Label>
                                                            <Input
                                                                className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                                value={editForm.github}
                                                                onChange={(e) => setEditForm({ ...editForm, github: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                                <Twitter className="h-4 w-4" /> X (Twitter) URL
                                                            </Label>
                                                            <Input
                                                                className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                                value={editForm.twitter}
                                                                onChange={(e) => setEditForm({ ...editForm, twitter: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                                <Linkedin className="h-4 w-4" /> LinkedIn URL
                                                            </Label>
                                                            <Input
                                                                className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                                value={editForm.linkedin}
                                                                onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                                <Globe className="h-4 w-4" /> Portfolio URL
                                                            </Label>
                                                            <Input
                                                                className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                                value={editForm.portfolio}
                                                                onChange={(e) => setEditForm({ ...editForm, portfolio: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <DialogFooter className="bg-gray-50 border-t px-6 py-4 gap-3">
                                                <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl border-gray-200">Cancel</Button>
                                                <Button onClick={handleSaveProfile} className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <Button className="flex-1 sm:flex-none border-2 border-black bg-white hover:bg-gray-100 text-black font-semibold rounded-full px-8">
                                        <Share2 className="mr-2 h-4 w-4" /> Share
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center sm:items-start border-t border-gray-100 pt-8 gap-8">
                                <div className="flex gap-12 text-center sm:text-left">
                                    <div className="space-y-1">
                                        <div className="text-3xl font-black text-gray-900">{profileData.blogsCount}</div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Blogs</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-3xl font-black text-gray-900">{profileData.followers}</div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Followers</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-3xl font-black text-gray-900">{profileData.following}</div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Following</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <SocialLink icon={Github} href={profileData.github} colorClass="hover:bg-[#333] hover:border-[#333]" />
                                    <SocialLink icon={Twitter} href={profileData.twitter} colorClass="hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" />
                                    <SocialLink icon={Linkedin} href={profileData.linkedin} colorClass="hover:bg-[#0A66C2] hover:border-[#0A66C2]" />
                                    <SocialLink icon={Globe} href={profileData.portfolio} colorClass="hover:bg-purple-500 hover:border-purple-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: About */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="border-none shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden h-full">
                                <CardHeader className="pb-2 bg-white sticky top-0 z-10">
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        About Me
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 pt-6 bg-white min-h-[200px]">
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {profileData.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-50">
                                        {profileData.location && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                                <MapPin className="h-3.5 w-3.5" /> {profileData.location}
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                            <Mail className="h-3.5 w-3.5" /> {user.email}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Right Column: Blog Activity & Settings */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="border-none shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden">
                                <CardHeader className="pb-4 border-b border-gray-100 bg-white">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl font-bold text-gray-900">Recent Blog Activity</CardTitle>
                                        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full font-medium">View All Logs</Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0 bg-white">
                                    <div className="space-y-0">
                                        {[
                                            { action: "Published a new article", target: "The Future of Cloud Native", time: "2 hours ago", icon: Edit, bg: "bg-blue-100", color: "text-blue-600" },
                                            { action: "Commented on", target: "10 Tips for React Performance", time: "Yesterday", icon: Share2, bg: "bg-purple-100", color: "text-purple-600" },
                                            { action: "Liked a post", target: "Why Tailwind CSS is taking over", time: "3 days ago", icon: Shield, bg: "bg-pink-100", color: "text-pink-600" },
                                            { action: "Updated draft", target: "Microservices Architecture 101", time: "5 days ago", icon: Edit, bg: "bg-yellow-100", color: "text-yellow-700" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex gap-4 p-6 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 relative group cursor-pointer">
                                                <div className={`flex-shrink-0 h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                                    <item.icon className="h-5 w-5" />
                                                </div>
                                                <div className="space-y-1 flex-1">
                                                    <p className="text-gray-900 font-medium">
                                                        {item.action} <span className="font-bold">"{item.target}"</span>
                                                    </p>
                                                    <p className="text-sm text-gray-500">{item.time}</p>
                                                </div>
                                                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ExternalLink className="h-4 w-4 text-gray-400" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Settings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Card className="border-none shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden bg-white">
                                <CardHeader className="pb-4 border-b border-gray-100">
                                    <CardTitle className="text-xl font-bold text-gray-900">Preferences</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label className="text-base font-medium text-gray-900">Email Notifications</Label>
                                            <p className="text-sm text-gray-500">Receive updates when someone comments on your blog.</p>
                                        </div>
                                        <Switch className="data-[state=checked]:bg-blue-600" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label className="text-base font-medium text-gray-900">Public Profile</Label>
                                            <p className="text-sm text-gray-500">Allow others to view your profile and blog history.</p>
                                        </div>
                                        <Switch className="data-[state=checked]:bg-blue-600" defaultChecked />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
