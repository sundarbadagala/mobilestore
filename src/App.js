import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ProductProvider} from './components/Context'

function App() {
  return (
    <div className="App">
    <ProductProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Products/></Route>
          <Route path='/cart'><Cart/></Route>
          <Route path='/details'><Details/></Route>
          <Route path='/sign'><SignUp/></Route>
          <Route path='/:name'><Default/></Route>
        </Switch>
      </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
