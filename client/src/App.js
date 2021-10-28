import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Activities from './components/activities';
import Home from './components/home';
import LandingPage from './components/landingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/activities' component={Activities}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
