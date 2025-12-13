import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Bell,
    Search,
    TrendingUp,
    Users,
    Activity
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
    const { user, logout } = useAuth();

    const stats = [
        { title: "Total Projects", value: "12", icon: LayoutDashboard, color: "text-blue-500" },
        { title: "Active Tasks", value: "5", icon: Activity, color: "text-green-500" },
        { title: "Team Members", value: "8", icon: Users, color: "text-purple-500" },
        { title: "Growth", value: "+24%", icon: TrendingUp, color: "text-orange-500" },
    ];

    return (
        <div className="min-h-screen bg-[#020817] pt-24 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                        <p className="text-white/60 mt-1">Welcome back, {user?.name || 'User'}!</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Button
                            onClick={logout}
                            variant="destructive"
                            className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-white/70">
                                        {stat.title}
                                    </CardTitle>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <p className="text-xs text-white/40 mt-1">
                                        +10% from last month
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart/Content Placeholder */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white/5 border-white/10 h-[400px]">
                            <CardHeader>
                                <CardTitle className="text-white">Project Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-[300px] text-white/30">
                                Chart Placeholder
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <Card className="bg-white/5 border-white/10 h-[400px]">
                            <CardHeader>
                                <CardTitle className="text-white">Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                                            <div>
                                                <p className="text-sm text-white font-medium">New project created</p>
                                                <p className="text-xs text-white/40">2 hours ago</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
