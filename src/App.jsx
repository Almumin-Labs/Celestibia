import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Contact from '@/pages/Contact';
import CloudDevOps from '@/pages/services/CloudDevOps';
import DataAI from '@/pages/services/DataAI';
import ApplicationServices from '@/pages/services/ApplicationServices';
import SecurityServices from '@/pages/services/SecurityServices';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans antialiased">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/data-ai" element={<DataAI />} />
              <Route path="/services/application" element={<ApplicationServices />} />
              <Route path="/services/security" element={<SecurityServices />} />
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
