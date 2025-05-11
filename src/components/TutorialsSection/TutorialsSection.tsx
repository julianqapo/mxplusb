import { motion } from 'framer-motion';
import { Code2, Brain, LineChart, Database } from 'lucide-react';
import './TutorialsSection.css';

const tutorials = [
    {
        id: 1,
        title: 'Introduction to Machine Learning',
        description: 'Learn the fundamentals of machine learning algorithms and concepts.',
        icon: Brain,
        level: 'Beginner',
    },
    {
        id: 2,
        title: 'Deep Learning with Python',
        description: 'Master neural networks and deep learning techniques using Python.',
        icon: Code2,
        level: 'Intermediate',
    },
    {
        id: 3,
        title: 'Data Visualization',
        description: 'Create compelling visualizations to understand your data better.',
        icon: LineChart,
        level: 'Beginner',
    },
    {
        id: 4,
        title: 'Big Data Processing',
        description: 'Handle large datasets efficiently using modern tools and techniques.',
        icon: Database,
        level: 'Advanced',
    },
];

const TutorialsSection = () => {
    return (
        <section id="tutorials" className="tutorials-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Featured Tutorials
            </motion.h2>
            <div className="tutorials-grid">
                {tutorials.map((tutorial, index) => (
                    <motion.div
                        key={tutorial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="tutorial-card"
                    >
                        <div className="tutorial-icon">
                            <tutorial.icon className="w-8 h-8" />
                        </div>
                        <h3 className="tutorial-title">{tutorial.title}</h3>
                        <p className="tutorial-description">{tutorial.description}</p>
                        <span className="tutorial-level">{tutorial.level}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TutorialsSection; 