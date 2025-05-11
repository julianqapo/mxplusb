import { BrainCircuit } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <div className="footer-logo" style={{ justifyContent: 'center' }}>
                    <BrainCircuit className="w-8 h-8" />
                    <span>ML Tutorials</span>
                </div>
                <div className="footer-copyright">
                    © {new Date().getFullYear()} ML Tutorials. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer; 