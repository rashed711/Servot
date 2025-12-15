import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-neutral">
        <Navbar />
        {/* Removed pt-20 so Home section sits behind the fixed Navbar */}
        <main className="flex-grow">
          <Home id="home" />
          <About id="about" />
          <Services id="services" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;