import { Hero } from './components/Hero';
import { OpeningLetter } from './components/OpeningLetter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <OpeningLetter />
      <Footer />
    </div>
  );
}

export default App;
