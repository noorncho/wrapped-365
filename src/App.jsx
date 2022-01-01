import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/home';
import TopArtists from './pages/top-artists/top-artists';
import TopSongs from './pages/top-songs/top-songs';
import LandingPage from './pages/landing-page/landing-page';
import RedirectPage from './pages/redirect-page/redirect-page';

function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/topSongs" element={<TopSongs />} />
            <Route path="/topArtists" element={<TopArtists />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/redirect" element={<RedirectPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </Router>      
    </div>
  );
}

export default App;
