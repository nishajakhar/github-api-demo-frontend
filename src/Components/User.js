import { Component } from 'react';
import Header from './Header';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    if (this.props.location) {
      this.setState({ user: this.props.location.state.user });
    }
  }
  render() {
    return (
      <div className="background">
        <Header />
        {this.state.user ? (
          <div className="user-table-box">
            <h2> Username : {this.state.user.username}</h2>
            <table className="user-table">
              <tr>
                <td>Username</td>
                <td>{this.state.user.username}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <a href={this.state.user.github_url}>
                    <img src={this.state.user.image} height="50" width="50" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Followers</td>
                <td>{this.state.user.followers}</td>
              </tr>
              <tr>
                <td>Following</td>
                <td>{this.state.user.followingCount}</td>
              </tr>
              <tr>
                <td>Repository</td>
                <td>{this.state.user.repoCount}</td>
              </tr>
              <tr>
                <td>Member Since</td>
                <td>{this.state.user.memberSince}</td>
              </tr>
            </table>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default User;
