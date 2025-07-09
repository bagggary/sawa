import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<GalleryPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/resources" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Patient Resources - Coming Soon</h1></div>} />
              <Route path="/appointments" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Appointments - Coming Soon</h1></div>} />
              <Route path="/emergency" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-red-600">Emergency Support - Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;