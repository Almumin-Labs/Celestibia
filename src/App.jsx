import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { BlogProvider } from '@/context/BlogContext';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Contact from '@/pages/Contact';
import CloudServices from '@/pages/services/CloudServices';
import DevOpsSolutions from '@/pages/services/DevOpsSolutions';
import DataEngineering from '@/pages/services/DataEngineering';
import AIML from '@/pages/services/AIML';
import ApplicationServices from '@/pages/services/ApplicationServices';
import SecurityServices from '@/pages/services/SecurityServices';
import Industry from '@/pages/Industry';
import CaseStudies from '@/pages/CaseStudies';
import Footer from '@/components/Footer';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import RequestDemo from '@/pages/RequestDemo';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  return children;
};

const GlobalBackground = () => {
  const location = useLocation();
  const path = location.pathname;

  let gridOverlayClass = "stroke-white/10"; // Default

  if (path.includes('/services/cloud')) gridOverlayClass = "stroke-blue-500/30";
  else if (path.includes('/services/devops')) gridOverlayClass = "stroke-orange-500/30";
  else if (path.includes('/services/data-engineering')) gridOverlayClass = "stroke-purple-500/30";
  else if (path.includes('/services/ai-ml')) gridOverlayClass = "stroke-emerald-500/30";
  else if (path.includes('/services/security')) gridOverlayClass = "stroke-red-500/30";
  else if (path.includes('/services/application')) gridOverlayClass = "stroke-indigo-500/30";
  else if (path.includes('/industry')) gridOverlayClass = "stroke-yellow-500/30";

  return (
    <GridPattern
      width={40}
      height={40}
      x={-1}
      y={-1}
      squares={[
        [4, 4],
        [5, 1],
        [8, 2],
        [5, 3],
        [5, 5],
      ]}
      className={cn(
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        "fixed inset-0 h-full w-full opacity-75 mix-blend-screen pointer-events-none z-0",
        gridOverlayClass
      )}
      strokeDasharray={"4 2"}
    />
  );
};

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <div className="flex flex-col min-h-screen font-sans antialiased bg-black relative overflow-hidden">
            <GlobalBackground />
            <Navbar />
            <main className="flex-grow z-10 relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/cloud" element={<CloudServices />} />
                <Route path="/services/devops" element={<DevOpsSolutions />} />
                <Route path="/services/data-engineering" element={<DataEngineering />} />
                <Route path="/services/ai-ml" element={<AIML />} />
                <Route path="/services/application" element={<ApplicationServices />} />
                <Route path="/services/security" element={<SecurityServices />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/resources/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/request-demo" element={<RequestDemo />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
