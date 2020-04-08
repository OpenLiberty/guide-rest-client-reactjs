// tag::react-library[]
import React, { Component } from "react";
// end::react-library[]
// tag::axios-library[]
import axios from "axios";
// end::axios-library[]
// tag::react-table[]
import { Table } from "react-bootstrap";
import ReactTable from 'react-table-6';
// end::react-table[]

// tag::class[]
class Fetchdata extends Component {
// end::class[]
  // tag::state-object[]
  state = {
    posts: [{}],
    isLoading: true,
    error: null,
  };
  // end::state-object[]
  // tag::get-posts[]
  getPosts() {
    // tag::axios[]
    axios("http://localhost:9080/artists")
    // end::axios[]
      // tag::then-method[]
      .then(response => {
        this.setState({
          // tag::data[]
          posts: response.data,
          // end::data[]
          isLoading: false
        });
      // end::then-method[]
      })
      // tag::error-handling[]
      .catch(error => this.setState({ error, isLoading: false }));
      // end::error-handling[]

  }
  // end::get-posts[]
  // tag::mount-posts[]
  componentDidMount() {
    this.getPosts();
  }
  // end::mount-posts[]
  // tag::render-posts[]
  render() {
    const { isLoading, posts } = this.state;
    // tag::columns-info[]
    const columns = [{
      // tag::header-id[]
      Header: 'ID',
      // end::header-id[]
      // tag::accessor-id[]
      accessor: 'id'
      // end::accessor-id[]
    }, {
      // tag::header-name[]
      Header: 'Name',
      // end::header-name[]
      // tag::accessor-name[]
      accessor: 'name'
      // end::accessor-name[]
    },
    {
      // tag::header-followers[]
      Header: 'Followers',
      // end::header-followers[]
      // tag::accessor-followers[]
      accessor: 'followers'
      // end::accessor-followers[]
    },
    {
      // tag::header-genres[]
      Header: 'Genres',
      // end::header-genres[]
      // tag::accessor-genres[]
      accessor: 'genres'
      // end::accessor-genres[]
    }]
    // end::columns-info[]

    // tag::return-table[]
    return (
      // tag::react-fragment[]
      <React.Fragment>
        <h2>Artist Web Service</h2>
        {!isLoading ? (
          // tag::table[]
          <ReactTable
            // tag::posts[]
            data={posts}
            // end::posts[]
            // tag::columns[]
            columns={columns}
            // end::columns[]
            defaultPageSize={6}
            pageSizeOptions={[6, 12, 15]}
          />) : (
          // end::table[]
            <p>Loading .....</p>
          )}
      </React.Fragment>
      // end::react-fragment[]
    // end::return-table[]
    );
  }
  // end::render-posts[]
}
// end::element[]

// tag::export-fetchdata[]
export default Fetchdata;
// end::export-fetchdata[]