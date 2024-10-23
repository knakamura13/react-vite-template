import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import HomePage from '@pages/HomePage';
import SamplePage from '@pages/SamplePage';
import NotFoundPage from '@pages/NotFoundPage';

function App() {
    return (
        <Router>
            <nav className="site-nav">
                <Link to="/">Home</Link> | <Link to="/sample">Sample Page</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/sample" element={<SamplePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
