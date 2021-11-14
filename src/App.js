
import './App.css';
import Login from './Components/LoginMain/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Protected from './Protected';
import Dashboard from './Components/Dashboard/Dashboard';
import Setting from './Components/Setting/SettingJsx/Setting';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Protected path="/dashboard" component={Dashboard} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/setting" component={Setting} Auth={sessionStorage.getItem('token')}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
