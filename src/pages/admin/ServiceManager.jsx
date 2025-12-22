import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit, Cloud, Database, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceManager = () => {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);

    const serviceIcons = {
        'Cloud Services': Cloud,
        'DevOps Solutions': Cloud, // Fallback or distinct icon
        'Data Engineering': Database,
        'AI & Machine Learning': Database, // Fallback or distinct icon
        'Security Services': Shield,
        'Application Services': Code
    };

    useEffect(() => {
        // Load services from localStorage
        const storedServices = localStorage.getItem('celestibia_services');
        if (storedServices) {
            const parsed = JSON.parse(storedServices);
            // Migration check: if old data (4 services), replace with new default (6 services)
            // This is a simple heuristic for this session.
            if (parsed.length <= 4 && parsed.some(s => s.name === 'Cloud & DevOps')) {
                loadDefaults();
            } else {
                setServices(parsed);
            }
        } else {
            loadDefaults();
        }
    }, []);

    const loadDefaults = () => {
        const defaultServices = [
            {
                id: 1,
                name: 'Cloud Services',
                description: 'Scalable cloud solutions for modern businesses.',
                subServices: ['Cloud Migration', 'Cloud Architecture', 'Cost Optimization']
            },
            {
                id: 2,
                name: 'DevOps Solutions',
                description: 'Streamline your development lifecycle with CI/CD and automation.',
                subServices: ['CI/CD Pipeline', 'Infrastructure as Code', 'Docker & Kubernetes']
            },
            {
                id: 3,
                name: 'Data Engineering',
                description: 'Transform raw data into actionable insights.',
                subServices: ['Data Pipelines', 'ETL Processes', 'Data Warehousing']
            },
            {
                id: 4,
                name: 'AI & Machine Learning',
                description: 'Intelligent solutions to automate and predict.',
                subServices: ['Predictive Analytics', 'NLP Models', 'Computer Vision']
            },
            {
                id: 5,
                name: 'Application Services',
                description: 'Full-stack development for web and mobile.',
                subServices: ['Web Development', 'Mobile Apps', 'API Integration']
            },
            {
                id: 6,
                name: 'Security Services',
                description: 'Protect your digital assets with enterprise-grade security.',
                subServices: ['Security Audits', 'Penetration Testing', 'Compliance']
            }
        ];
        setServices(defaultServices);
        localStorage.setItem('celestibia_services', JSON.stringify(defaultServices));
    };

    const saveServices = (updatedServices) => {
        setServices(updatedServices);
        localStorage.setItem('celestibia_services', JSON.stringify(updatedServices));
    };

    const handleUpdateService = (id, field, value) => {
        const updatedServices = services.map(service =>
            service.id === id ? { ...service, [field]: value } : service
        );
        saveServices(updatedServices);
    };

    const handleAddService = () => {
        const newService = {
            id: Date.now(),
            name: 'New Service',
            description: 'Service description goes here.',
            subServices: ['Service Feature 1']
        };
        saveServices([...services, newService]);
        setEditingService(newService.id);
    };

    const handleDeleteService = (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            const updatedServices = services.filter(service => service.id !== id);
            saveServices(updatedServices);
        }
    };

    const handleAddSubService = (serviceId) => {
        const subServiceName = prompt('Enter sub-service name:');
        if (subServiceName) {
            const updatedServices = services.map(service =>
                service.id === serviceId
                    ? { ...service, subServices: [...service.subServices, subServiceName] }
                    : service
            );
            saveServices(updatedServices);
        }
    };

    const handleRemoveSubService = (serviceId, subServiceIndex) => {
        const updatedServices = services.map(service =>
            service.id === serviceId
                ? {
                    ...service,
                    subServices: service.subServices.filter((_, index) => index !== subServiceIndex)
                }
                : service
        );
        saveServices(updatedServices);
    };

    const handleUpdateSubService = (serviceId, subServiceIndex, newValue) => {
        const updatedServices = services.map(service =>
            service.id === serviceId
                ? {
                    ...service,
                    subServices: service.subServices.map((sub, index) =>
                        index === subServiceIndex ? newValue : sub
                    )
                }
                : service
        );
        saveServices(updatedServices);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Service Management</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage your service offerings and descriptions</p>
                </div>
                <Button onClick={handleAddService} className="bg-black hover:bg-gray-800 text-white rounded-lg px-6">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                </Button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service) => {
                    const Icon = serviceIcons[service.name] || Code;
                    const isEditing = editingService === service.id;

                    return (
                        <motion.div
                            key={service.id}
                            layout
                            className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all"
                        >
                            {/* Service Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5 shrink-0">
                                    <Icon className="w-5 h-5 text-black dark:text-white" />
                                </div>
                                <div className="flex-1">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={service.name}
                                            onChange={(e) => handleUpdateService(service.id, 'name', e.target.value)}
                                            className="w-full mb-2 px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-md text-lg font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                                        />
                                    ) : (
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                            {service.name}
                                        </h3>
                                    )}

                                    {isEditing ? (
                                        <textarea
                                            value={service.description}
                                            onChange={(e) => handleUpdateService(service.id, 'description', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-md text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
                                        />
                                    ) : (
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    )}
                                </div>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => setEditingService(isEditing ? null : service.id)}
                                        className="p-2 rounded-md text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteService(service.id)}
                                        className="p-2 rounded-md text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Sub-Services */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Sub-Services
                                    </h4>
                                    {isEditing && (
                                        <button
                                            onClick={() => handleAddSubService(service.id)}
                                            className="flex items-center gap-1 text-xs font-medium text-black dark:text-white hover:opacity-70"
                                        >
                                            <Plus className="w-3 h-3" />
                                            Add
                                        </button>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {service.subServices.map((subService, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={subService}
                                                    onChange={(e) => handleUpdateSubService(service.id, index, e.target.value)}
                                                    className="flex-1 px-2 py-1 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                                                />
                                            ) : (
                                                <span className="flex-1 text-sm text-gray-600 dark:text-gray-300">
                                                    {subService}
                                                </span>
                                            )}
                                            {isEditing && (
                                                <button
                                                    onClick={() => handleRemoveSubService(service.id, index)}
                                                    className="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {isEditing && (
                                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10">
                                    <Button
                                        onClick={() => setEditingService(null)}
                                        className="w-full bg-black hover:bg-gray-800 text-white"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Save Changes
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Info Box */}
            <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-white">Note:</strong> Changes to services will be reflected on the Services page and throughout the website.
                    Make sure to review your changes before saving.
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceManager;
