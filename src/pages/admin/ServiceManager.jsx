import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit, Cloud, Database, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceManager = () => {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);

    const serviceIcons = {
        'Cloud & DevOps': Cloud,
        'Data & AI': Database,
        'Security': Shield,
        'Application Services': Code
    };

    useEffect(() => {
        // Load services from localStorage
        const storedServices = localStorage.getItem('celestibia_services');
        if (storedServices) {
            setServices(JSON.parse(storedServices));
        } else {
            // Default services
            const defaultServices = [
                {
                    id: 1,
                    name: 'Cloud & DevOps',
                    description: 'Comprehensive cloud migration, infrastructure automation, and DevOps implementation services.',
                    subServices: [
                        'Cloud Migration & Optimization',
                        'CI/CD Pipeline Setup',
                        'Infrastructure as Code',
                        'Container Orchestration',
                        'Monitoring & Logging'
                    ]
                },
                {
                    id: 2,
                    name: 'Data & AI',
                    description: 'Advanced data engineering, analytics, and AI/ML solutions to drive business insights.',
                    subServices: [
                        'Data Pipeline Development',
                        'Machine Learning Models',
                        'Business Intelligence',
                        'Data Warehousing',
                        'Predictive Analytics'
                    ]
                },
                {
                    id: 3,
                    name: 'Security',
                    description: 'Enterprise-grade security solutions to protect your infrastructure and applications.',
                    subServices: [
                        'Security Audits',
                        'Penetration Testing',
                        'Compliance Management',
                        'Identity & Access Management',
                        'Threat Detection'
                    ]
                },
                {
                    id: 4,
                    name: 'Application Services',
                    description: 'Full-stack application development and modernization services.',
                    subServices: [
                        'Web Application Development',
                        'Mobile App Development',
                        'API Development',
                        'Legacy Modernization',
                        'Microservices Architecture'
                    ]
                }
            ];
            setServices(defaultServices);
            localStorage.setItem('celestibia_services', JSON.stringify(defaultServices));
        }
    }, []);

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
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Service Management</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your service offerings and descriptions</p>
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
                            className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10"
                        >
                            {/* Service Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {service.name}
                                    </h3>
                                    {isEditing ? (
                                        <textarea
                                            value={service.description}
                                            onChange={(e) => handleUpdateService(service.id, 'description', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        />
                                    ) : (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {service.description}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setEditingService(isEditing ? null : service.id)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                >
                                    <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>

                            {/* Sub-Services */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Sub-Services
                                    </h4>
                                    {isEditing && (
                                        <button
                                            onClick={() => handleAddSubService(service.id)}
                                            className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
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
                                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-white/5"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={subService}
                                                    onChange={(e) => handleUpdateSubService(service.id, index, e.target.value)}
                                                    className="flex-1 px-2 py-1 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                                                    {subService}
                                                </span>
                                            )}
                                            {isEditing && (
                                                <button
                                                    onClick={() => handleRemoveSubService(service.id, index)}
                                                    className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {isEditing && (
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                                    <Button
                                        onClick={() => setEditingService(null)}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl p-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Note:</strong> Changes to services will be reflected on the Services page and throughout the website.
                    Make sure to review your changes before saving.
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceManager;
