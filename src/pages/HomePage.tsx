import React from 'react';
import reactLogo from '@assets/logo-react.svg';
import viteLogo from '@assets/logo-vite.svg';
import './HomePage.scss';
import Counter from '@components/Counter';

const HomePage: React.FC = () => {
    return (
        <div className="page home">
            <div className="logos">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1>React + Vite Template</h1>

            <p className="intro-paragraph">
                Welcome to my <strong>React + Vite Template</strong>. This project serves as a starting point for new
                React applications, featuring key tools and configurations to help you kick-start your project with
                minimal setup.
            </p>

            <h2>Key Features and Dependencies</h2>
            <ul>
                <li>
                    <strong>React 18:</strong> Modern React framework for building UIs.
                </li>
                <li>
                    <strong>Vite:</strong> Super-fast development build tool.
                </li>
                <li>
                    <strong>React Router:</strong> For handling routing in your single-page application.
                </li>
                <li>
                    <strong>Redux Toolkit:</strong> State management with minimal boilerplate using Redux.
                </li>
                <li>
                    <strong>SASS/SCSS:</strong> Support for modular and maintainable styles with SCSS.
                </li>
                <li>
                    <strong>Prettier:</strong> Enforces consistent code formatting with your preferred rules.
                </li>
                <li>
                    <strong>TypeScript:</strong> Adds static typing to JavaScript for better tooling and fewer bugs.
                </li>
                <li>
                    <strong>Path Aliases:</strong> Simplified imports using custom path aliases.
                </li>
            </ul>

            <h2>Redux Example</h2>
            <p>
                This <strong>Counter</strong> component demonstrates the integration of Redux for state management:
            </p>

            <Counter />
        </div>
    );
};

export default HomePage;
