import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="logo">
          <p> Github Demo</p>
        </div>
        <span>
          <Link className="navbar-item" activeClassName="is-active" to="/">
            Home
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/search-repo">
            Repository
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/search-user">
            User
          </Link>
        </span>
      </div>
    );
  }
}
export default Header;
