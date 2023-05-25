import './App.css';
import Navbar from './components/Navbar';
import HeroSec from './components/HeroSec';
import HeroTwin from './components/HeroTwin';
import GoodwillSec from './components/GoodwillSec';
import Keyfeatures from './components/Keyfeatures';
import Team from './components/Team';
import SolutionFor from './components/SolutionFor';
import PricePanel from './components/PricePanel';
import Subscribe from './components/Subscribe';
import Foot from './components/Foot';
function App() {
  return (
    <div className='font-Montserrat pt-0 scroll-smooth '>
      <Navbar />
      <HeroSec />
      <HeroTwin />
      <GoodwillSec />
      <Keyfeatures />
      <Team />
      <SolutionFor />
      <PricePanel />
      <Subscribe />
      <Foot />
    </div>
  );
}

export default App;
