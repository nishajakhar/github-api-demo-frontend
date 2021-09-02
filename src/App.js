import React from 'react';
import './Stylesheets/App.css';
import './Stylesheets/style.css';
import Repository from './Components/Repository';
import User from './Components/User';
import SearchRepoForm from './Components/SearchRepoForm';
import SearchUserForm from './Components/SearchUserForm';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search-repo" component={SearchRepoForm} />
          <Route path="/search-user" component={SearchUserForm} />
          <Route path="/repository" component={Repository} />
          <Route path="/user" component={User} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}
export default App;
