import './App.css';
import Banner from './components/Banner/Banner';
import MainPostSection from './components/MainPostSection/MainPostSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className=" mx-auto main-font position-relative">
      <Navbar />
      <Banner />
      <MainPostSection />
    </div>
  );
}

export default App;

