import './App.css';
import AppHeader from './AppHeader/AppHeader';
import Projects from './Projects/Projects';
import Auth from './Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ProjectDetail from './Projects/ProjectDetail/ProjectDetail';
import AddProject from './Projects/AddProject/AddProject';


function App() {
  return (
    <div className="containter-fluid">
      <AppHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:_id" element={<ProjectDetail />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/project/create" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
