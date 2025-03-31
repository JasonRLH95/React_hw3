
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/color_picker' element={<Section1/>}/>
          <Route path='/reminder_pro' element={<Section2/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
