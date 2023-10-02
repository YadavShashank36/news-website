import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News category="general"/>}/>
        <Route exact path="/sports" element={<News category="sports"/>}/>
        <Route exact path="/entertainment" element={<News category="entertainment"/>}/>
        <Route exact path="/business" element={<News category="business"/>}/>
        <Route exact path="/technology" element={<News category="technology"/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
    </>
  );
}

export default App;
//404f5b9ef47346a6b4aa5d913ac35ab6