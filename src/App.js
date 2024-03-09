// App.js or wherever your root component is
import React from 'react';
import { Grommet } from 'grommet';
import { myTheme } from './theme'; // Adjust the path according to your file structure
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Grommet theme={myTheme} full>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Grommet>
  );
}

export default App;
