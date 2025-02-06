import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <style>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
        <Footer />
    </Router>
  );
};

export default App;