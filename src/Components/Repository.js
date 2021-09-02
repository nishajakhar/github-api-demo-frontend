import { Component } from 'react';
import Header from './Header';

class Repository extends Component {
  constructor(props) {
    console.log('I am hereeee', props);

    super(props);
    this.state = {
      rows: [],
    };
  }

  renderTableData = () => {
    return this.props.location.state.repo.map((repo, index) => {
      const { repoName, ownerName, description, stars, url } = repo; //destructuring
      return (
        <tr key={index}>
          <td>{repoName}</td>
          <td>{ownerName}</td>
          <td>{description}</td>
          <td>{stars}</td>
          <td>
            <a href="#">{url}</a>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="background">
        <Header />

        <div className="repo-table-box">
          <h2> Username : {this.props.location.state.username}</h2>
          <table className="repo-table">
            <tr>
              <th>Repo Name</th>
              <th>Owner Name</th>
              <th>Description</th>
              <th>Stars Count</th>
              <th>URL</th>
            </tr>
            {this.props.location.state.repo.length > 0 ? this.renderTableData() : ''}
          </table>
        </div>
      </div>
    );
  }
}

export default Repository;
