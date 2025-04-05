import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
<div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Shop />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
