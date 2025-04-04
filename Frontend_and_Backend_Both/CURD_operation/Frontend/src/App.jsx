import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Add  from './components/Add'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
function App() {
  

  return (
    <div className='text-3xl w-full'>
    <Router> 
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/> 
       <Route path="/add" element={<Add/>}/> 
      </Routes>
      
       </Router>
    </div>
  )
}

export default App
