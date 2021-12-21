
import './App.css';
import Login from './Components/LoginMain/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "@fontsource/montserrat";
import Protected from './Protected';
import Dashboard from './Components/Dashboard/Dashboard';
import Setting from './Components/Setting/SettingJsx/Setting';
import Accessories from './Components/Accessories/Accessories';
import FilledCylinder from './Components/FilledCylinder/FilledCylinder';
import Profile from './Components/Sidebar/SidebarProfile/Profile/Profile';
import EmptyCylinder from './Components/EmptyCylinder/EmptyCylinder';
import Finance from './Components/Finance/Finance';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Protected path="/dashboard" component={Dashboard} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/setting" component={Setting} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/accessories" component={Accessories} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/filledcylinder" component={FilledCylinder} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/profile" component={Profile} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/emptycylinder" component={EmptyCylinder} Auth={sessionStorage.getItem('token')}/>
        <Protected path="/finance" component={Finance} Auth={sessionStorage.getItem('token')}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
