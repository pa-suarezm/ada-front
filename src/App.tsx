import './App.css';
import AppHeader from './AppHeader/AppHeader';
import Projects from './Projects/Projects';
import Auth from './Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';


function App() {
  return (
    <div className="containter-fluid">
      <AppHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
