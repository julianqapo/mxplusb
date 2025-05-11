import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    ChevronRight,
    BrainCircuit
} from 'lucide-react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import TutorialsSection from './components/TutorialsSection/TutorialsSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

// Mock data for tutorials (replace with actual data fetching)
const tutorialsData = [
    {
        id: '1',
        title: 'Introduction to Machine Learning',
        description: 'Learn the fundamentals of machine learning and its applications.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'Basics',
    },
    {
        id: '2',
        title: 'Deep Learning with TensorFlow',
        description: 'Explore deep learning techniques using TensorFlow.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'Deep Learning',
    },
    {
        id: '3',
        title: 'Data Science with Python',
        description: 'Master data manipulation, analysis, and visualization with Python.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'Data Science',
    },
    {
        id: '4',
        title: 'Machine Learning Algorithms',
        description: 'Dive into various ML algorithms like Linear Regression, Decision Trees, and more.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'Algorithms',
    },
    {
        id: '5',
        title: 'Natural Language Processing',
        description: 'Learn how to process and understand human language using NLP techniques.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'NLP',
    },
    {
        id: '6',
        title: 'Computer Vision',
        description: 'Explore the world of computer vision and image recognition.',
        imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        category: 'Computer Vision',
    },
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Header Component
const HeaderComponent = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 lg:px-12 xl:px-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <BrainCircuit className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-200">
                        Machine Learning Tutorials
                    </h1>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#tutorials"
                                className="text-gray-300 hover:text-white transition-colors duration-300
                                           hover:border-b-2 border-transparent hover:border-blue-500"
                            >
                                Tutorials
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-300 hover:text-white transition-colors duration-300
                                           hover:border-b-2 border-transparent hover:border-blue-500"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-300 hover:text-white transition-colors duration-300
                                           hover:border-b-2 border-transparent hover:border-blue-500"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Hero Section Component
const HeroSectionComponent = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-12 xl:px-20 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
            >
                Unlock the Power of Machine Learning
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
                Explore comprehensive tutorials, practical guides, and in-depth
                resources to master machine learning.
            </motion.p>
            <div className="flex justify-center">
                <a href="#tutorials">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </a>
            </div>
        </section>
    );
};

// Tutorials Section Component
const TutorialsSectionComponent = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading for 1 second
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="tutorials" className="py-16 px-4 md:px-8 lg:px-12 xl:px-20 bg-gray-950">
            <h2 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Featured Tutorials
            </h2>
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-800 border-gray-700 rounded-lg border shadow-md">
                            <div className="p-4">
                                <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                            </div>
                            <div className="p-4">
                                <div className="h-40 bg-gray-700 rounded mb-4"></div>
                                <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {tutorialsData.map((tutorial) => (
                            <motion.div
                                key={tutorial.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300
                                               hover:scale-[1.02] transition-transform
                                               bg-gradient-to-br from-gray-800 to-gray-900
                                               hover:from-gray-700 hover:to-gray-800
                                               shadow-md hover:shadow-lg
                                               transition-all duration-300
                                               border border-gray-700 rounded-lg"
                                >
                                    <img
                                        src={tutorial.imageUrl}
                                        alt={tutorial.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-white text-xl font-semibold">
                                            {tutorial.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {tutorial.category}
                                        </p>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            {tutorial.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </section>
    );
};

// About Section Component
const AboutSectionComponent = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-8 lg:px-12 xl:px-20 bg-gray-900">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="md:w-1/2"
                >
                    <BrainCircuit className="w-64 h-64 text-blue-500 mx-auto
                                               drop-shadow-lg" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="md:w-1/2"
                >
                    <h2 className="text-3xl font-bold text-white mb-4
                                   bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                        About ML-Tutorials
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        ML-Tutorials is a platform dedicated to providing high-quality
                        educational resources for machine learning enthusiasts of all
                        levels. Our mission is to make machine learning accessible to
                        everyone by offering clear, concise, and practical tutorials.
                    </p>
                    <p className="text-gray-400 text-lg mt-4 leading-relaxed">
                        We cover a wide range of topics, from the basics of machine
                        learning to advanced deep learning techniques. Whether you are
                        a beginner or an experienced practitioner, you will find
                        valuable content to enhance your skills.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSectionComponent = () => {
    return (
        <section id="contact" className="py-16 px-4 md:px-8 lg:px-12 xl:px-20 bg-gray-950">
            <h2 className="text-3xl font-bold text-white mb-8 text-center
                           bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Contact Us
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 text-gray-400" />
                    <a
                        href="mailto:contact@ml-tutorials.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        contact@ml-tutorials.com
                    </a>
                </div>
                <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                    <Github className="w-6 h-6 text-gray-400" />
                    <a
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        GitHub
                    </a>
                </div>
                <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                    <Linkedin className="w-6 h-6 text-gray-400" />
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                    <Twitter className="w-6 h-6 text-gray-400" />
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const FooterComponent = () => {
    return (
        <footer className="py-6 px-4 md:px-8 lg:px-12 xl:px-20 text-center text-gray-400 border-t border-gray-800 bg-gray-900">
            <p className="text-gray-300">
                &copy; {new Date().getFullYear()} ML-Tutorials. All rights reserved.
            </p>
            <p>
                <a
                    href="https://your-website.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block font-medium"
                >
                    Developed by Your Name/Company
                </a>
            </p>
        </footer>
    );
};

// Main App Component
const MLTutorialsApp = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Header />
            <main className="pt-24">
                <HeroSection />
                <TutorialsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default MLTutorialsApp;
