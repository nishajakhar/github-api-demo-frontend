import { Component } from 'react';
import Header from './Header';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      isLoaded: false,
      isLoggedIn: false,
      username: null,
    };
  }

  render() {
    return (
      <div className="background">
        <Header />
        <div style={{ textAlign: 'center' }}>
          <h1 className="welcome-label"> Welcome !!</h1>
          <img src="/bike.gif" width="400" height="300" />
        </div>
      </div>
    );
  }
}

export default Home;
