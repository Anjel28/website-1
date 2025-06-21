import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About darkMode={darkMode} />;
      case 'projects':
        return <Projects darkMode={darkMode} />;
      case 'skills':
        return <Skills darkMode={darkMode} />;
      case 'contact':
        return <Contact darkMode={darkMode} />;
      default:
        return <About darkMode={darkMode} />;
    }
  };
  return (
     <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        {renderSection()}
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
     
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  

export default App;

