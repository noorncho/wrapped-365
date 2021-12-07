import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import TopArtists from './pages/top-artists/top-artists';
import TopSongs from './pages/top-songs/top-songs';

function App() {
  
  return (
    <div className="row App">
      <Router>
        <div className="col col-md-2 col-xl-2">
          <Navbar />
        </div>

        <div className="col">
          <Routes>
            <Route path="/topSongs" element={<TopSongs />} />
            <Route path="/topArtists" element={<TopArtists />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
