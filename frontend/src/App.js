import './App.css'
import Home from './pages/home/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import About from './pages/about/About';
function App() {
  return (
    <Router>
        <Header></Header>
        <Routes>
            <Route exact path='/' element={<Home></Home>}/>
            <Route exact path='/about' element={<About></About>} />
        </Routes>
    </Router>
  );
}

export default App;
