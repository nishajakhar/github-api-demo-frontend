import { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import Form from './Form';

class SearchRepoForm extends Component {
  constructor(props) {
    console.log('I am hereeee', props);

    super(props);
    this.state = {
      username: '',
      isError: false,
      errorMessage: '',
    };
  }

  async onRepoSubmitHandler(username) {
    fetch(`http://localhost:4000/repo/${username}`)
      .then(res => res.json())
      .then(result => {
        console.log('I am here in response', result.status);
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
        console.log('I am here in errro', err);
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
              title="Enter github Username"
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
