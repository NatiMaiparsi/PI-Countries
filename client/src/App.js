import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddActivity from './components/addActivity/addActivity';
import Details from './components/details/details';
import Home from './components/home/home';
import LandingPage from './components/landingPage/landingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/addactivity' component={AddActivity}/>
        <Route exact path='/:id' component={Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
