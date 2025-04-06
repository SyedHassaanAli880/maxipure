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
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <Shop />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
