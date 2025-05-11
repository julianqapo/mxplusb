import { motion } from 'framer-motion';
import { Users, BookOpen, Award } from 'lucide-react';
import './AboutSection.css';

const features = [
    {
        id: 1,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with years of experience.',
        icon: Users,
    },
    {
        id: 2,
        title: 'Comprehensive Content',
        description: 'Access detailed tutorials and practical examples.',
        icon: BookOpen,
    },
    {
        id: 3,
        title: 'Certification',
        description: 'Earn certificates to showcase your skills.',
        icon: Award,
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Why Choose Our Platform
            </motion.h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="feature-card"
                    >
                        <div className="feature-icon">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection; 