
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/Slider';
function App() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center text-center text-white h-full">
        <h2 className="text-5xl font-bold leading-tight">Empowering the New Generation</h2>
        <h3 className="text-3xl text-cyan-400 mt-4">Delivering Innovative IT Services</h3>
        <p className="text-xl mt-4">To meet Evolving Business Needs</p>
      </main>
      <ImageSlider />
      <Footer />
    </div>
    
  );
}

export default App;
