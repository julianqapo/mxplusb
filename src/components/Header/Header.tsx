import { BrainCircuit } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <BrainCircuit className="logo-icon" />
                    <h1 className="logo-text">
                        Machine Learning Tutorials
                    </h1>
                </div>
                <nav className="nav-desktop">
                    <ul className="nav-list">
                        <li>
                            <a
                                href="#tutorials"
                                className="nav-link"
                            >
                                Tutorials
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="nav-link"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="nav-link"
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

export default Header; 