import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import './ContactSection.css';

const contactMethods = [
    {
        id: 1,
        title: 'Email',
        description: 'support@mltutorials.com',
        icon: Mail,
    },
    {
        id: 2,
        title: 'Live Chat',
        description: 'Available 24/7',
        icon: MessageSquare,
    },
    {
        id: 3,
        title: 'Phone',
        description: '+1 (555) 123-4567',
        icon: Phone,
    },
];

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Get in Touch
            </motion.h2>
            <div className="contact-grid">
                {contactMethods.map((method, index) => (
                    <motion.div
                        key={method.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <method.icon className="w-8 h-8" />
                        </div>
                        <h3 className="contact-title">{method.title}</h3>
                        <p className="contact-description">{method.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ContactSection; 