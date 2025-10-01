import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QueHace from './components/QueHace';
import ComoHace from './components/ComoHace';
import PorQue from './components/PorQue';
import Footer from './components/footer';
function App() {
  return (
      <div>
      <Navbar />
      <Hero />
      <QueHace />
      <div id="como-funciona">
        <ComoHace />
      </div>
      <PorQue />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
