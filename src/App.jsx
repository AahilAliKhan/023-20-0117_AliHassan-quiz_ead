import Auctions from "./components/Auctions";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import {Discover} from "./components/Discover";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#1F1D2B] text-white">
      <Navbar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
