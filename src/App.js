import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import CreateCV from './components/CreateCV';
import StartPage from './components/StartPage';
import SampleResumeGenerator from './components/SampleResumeGenerator';
import LoadResumeGenerator from './components/LoadResumeGenerator';
import UserGuide from './components/UserGuide';
import About from './components/About';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/cvcreator/' element={<StartPage />} />
        <Route path='/cvcreator/CreateCV' element={<CreateCV />} />
        <Route path='/cvcreator/SampleResumeGenerator' element={<SampleResumeGenerator />} />        
        <Route path='/cvcreator/LoadCV' element={<LoadResumeGenerator />} />
        <Route path='/cvcreator/UserGuide' element={<UserGuide />} />
        <Route path='/cvcreator/About' element={<About />} />
      </Routes>  
    </Router>
  );
}

export default App;
