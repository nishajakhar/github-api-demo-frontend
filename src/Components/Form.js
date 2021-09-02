import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Love' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = event => {
    this.setState({ username: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onUsernameSubmitHandler(this.state.username);
  };
  render() {
    return (
      <div className="name-form-box">
        <form className="name-form" onSubmit={this.handleSubmit}>
          <p className="name-label">{this.props.title}</p>
          <input type="text" name="topic" className="name" placeholder="username" onChange={this.handleInputChange} />
          <input type="submit" value={this.props.buttonName} className="btn" />
        </form>
      </div>
    );
  }
}

export default Form;
