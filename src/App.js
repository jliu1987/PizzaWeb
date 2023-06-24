
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/contact' exact component={Contact}/>
           <Route path='/menu' exact component={Menu}/>
           <Route path='/about' exact component={About}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
