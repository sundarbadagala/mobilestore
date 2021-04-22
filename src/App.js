import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Products/></Route>
          <Route path='/cart'><Cart/></Route>
          <Route path='/details'><Details/></Route>
          <Route><Default/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
