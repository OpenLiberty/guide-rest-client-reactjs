import React, { Component } from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

class Fetchdata extends Component {
  state = {
    posts: {},
    isLoading: true,
    error: null,
  };

  render() {
    const { isLoading, posts } = this.state;
    const columns = [{
        Header: 'Artist Info',
        columns: [
          {
            Header: "Artist ID",
            accessor: "id"
          },
          {
            Header: "Artist Name",
            accessor: "name"
          },
          {
            Header: "Genres",
            accessor: "genres",
          }
        ]
    },
    {
      Header: 'Albums',
      columns: [
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Number of Tracks",
          accessor: "ntracks",
        }
      ]
    }
  ]
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
            <p>Loading .....</p>
          )}
      </React.Fragment>
    );
  }
}

export default Fetchdata;
