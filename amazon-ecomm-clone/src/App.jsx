import './App.css';
import Header from './Header'; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
    <Router>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
