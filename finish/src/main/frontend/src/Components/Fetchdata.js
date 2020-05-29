// tag::react-library[]
import React, { Component } from "react";
// end::react-library[]
// tag::axios-library[]
import axios from "axios";
// end::axios-library[]
// tag::react-table[]
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// end::react-table[]

// tag::class[]
class Fetchdata extends Component {
// end::class[]
  // tag::state-object[]
  state = {
    posts: {},
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
          posts: convertData(response.data),
          // end::data[]
          isLoading: false
        });
      // end::then-method[]
      console.log(response);
      })
      // tag::error-handling[]
      .catch(error => this.setState({ error, isLoading: false }));
      // end::error-handling[]
      
  // tag::convert-data[]
    const convertData = (data) => {
      let result = [];

      for(let item of data){
        let b = {};
        
        if(item.albums.length){
        const a = item.albums;
        delete item.albums;

          for (let it of a) {
          b = it;
          result.push({...item,...b});
          }

          } else {
            delete item.albums;
            result.push(item);
          }
      }
      return result;
    }
    // end::convert-data[]
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
    // tag::table-info[]
    const columns = [{
        // tag::header-artist[]
        Header: 'Artist Info',
        // end::header-artist[]
        columns: [
          {
            // tag::header-ID[]
            Header: "Artist ID",
            // end::header-ID[]
            // tag::accessor-ID[]
            accessor: "id"
            // end::accessor-ID[]
          },
          {
            // tag::header-name[]
            Header: "Artist Name",
            // end::header-name[]
            // tag::accessor-name[]
            accessor: "name"
            // end::accessor-name[]
          },
          {
            // tag::header-genres[]
            Header: "Genres",
            // end::header-genres[]
            // tag::accessor-genres[]
            accessor: "genres",
            // end::accessor-genres[]
          }
        ]
    },
    {
      // tag::header-albums[]
      Header: 'Albums',
      // end::header-albums[]
      columns: [
        {
          // tag::header-title[]
          Header: "Title",
          // end::header-title[]
          // tag::accessor-title[]
          accessor: "title",
          // end::accessor-title[]
        },
        {
          // tag::header-tracks[]
          Header: "Number of Tracks",
          // end::header-tracks[]
          // tag::accessor-tracks[]
          accessor: "ntracks",
          // end::accessor-tracks[]
        }
      ]
    }
  ]
  // end::table-info[]

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
    );
    // end::return-table[]
  }
  // end::render-posts[]
}
// end::element[]

// tag::export-fetchdata[]
export default Fetchdata;
// end::export-fetchdata[]