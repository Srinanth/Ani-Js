import HomePage from './Pages/Home';
import UsagePage from './Pages/Usage';
import PlayGroundPage from './Pages/PlayGround';
import AnimationsPage from './Pages/Animations';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/usage" element={<UsagePage />} />
      <Route path="/playground" element={<PlayGroundPage />} />
      <Route path="/animations" element={<AnimationsPage />} />
    </Routes>
  );

}

export default App
