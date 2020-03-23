import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ReactTable from 'react-table-6';
export class Fetchdata extends Component {
  state = {
    posts: {},
    isLoading: true,
    errors: null,
    loading: "Loading....."
  };

  getPosts() {
    axios("http://localhost:9080/artists")
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));

  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { isLoading, posts } = this.state;
    const columns = [{
      Header: 'ID',
      accessor: 'id'
    }, {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Followers',
      accessor: 'followers'
    },
    {
      Header: 'Genres',
      accessor: 'genres'
    },
    {
      Header: 'Popularity',
      accessor: 'popularity'
    }]

    return (
      <React.Fragment>
        <h2>Artist Web Service</h2>
        {!isLoading ? (
          <ReactTable
            data={posts}
            columns={columns}
            defaultPageSize={6}
            pageSizeOptions={[6, 12, 15]}
          />) : (
            <p>{this.state.loading}</p>
          )}
      </React.Fragment>
    );
  }
}

export default Fetchdata;