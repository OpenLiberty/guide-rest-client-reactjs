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
    axios("http://localhost:9080/user")
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
      Header: 'USerID',
      accessor: 'id'
    }, {
      Header: 'FirstName',
      accessor: 'firstName'
    },
    {
      Header: 'LastName',
      accessor: 'lastName'
    },
    {
      Header: 'Gender',
      accessor: 'gender'
    },
    {
      Header: 'Email',
      accessor: 'email'
    }]

    return (
      <React.Fragment>
        <h2>Random Post</h2>
        {!isLoading ? (
          <ReactTable
            data={posts}
            columns={columns}
            defaultPageSize={5}
            pageSizeOptions={[5, 10, 15]}
          />) : (
            <p>{this.state.loading}</p>
          )}
      </React.Fragment>
    );
  }
}

export default Fetchdata;