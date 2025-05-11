import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="hero-title"
            >
                Unlock the Power of Machine Learning
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                className="hero-description"
            >
                Explore comprehensive tutorials, practical guides, and in-depth
                resources to master machine learning.
            </motion.p>
            <div className="hero-cta">
                <a href="#tutorials">
                    <button className="cta-button">
                        Get Started <ChevronRight className="cta-icon" />
                    </button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection; 