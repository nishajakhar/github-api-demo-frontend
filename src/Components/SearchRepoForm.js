import { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import Form from './Form';
import { backend } from '../config';
class SearchRepoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isError: false,
      errorMessage: '',
    };
  }

  async onRepoSubmitHandler(username) {
    fetch(`${backend.url}repo/${username}`)
      .then(res => res.json())
      .then(result => {
        if (result.status && result.status == 200) {
          this.setState({ repos: result.data, isLoaded: true, username: username });
          this.props.history.push({
            pathname: '/repository',
            state: {
              repo: result.data,
              username: this.state.username,
            },
          });
        } else {
          this.setState({ username: username, isError: true, errorMessage: result.message });
        }
      })
      .catch(err => {
        this.setState({ username: username, isError: true, errorMessage: err.message });
      });
  }

  render() {
    return (
      <div className="background">
        <Header />
        {this.state.isError ? <p className="errorMessage">{this.state.errorMessage}</p> : ''}
        <Route
          render={({ history }) => (
            <Form
              title="Enter Repository name"
              buttonName="Get Repository"
              onUsernameSubmitHandler={async username => {
                const result = await this.onRepoSubmitHandler(username);
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default SearchRepoForm;
