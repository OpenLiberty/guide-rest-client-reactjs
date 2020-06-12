// tag::react-library[]
import React, { Component } from 'react';
// end::react-library[]
// tag::axios-library[]
import axios from 'axios';
// end::axios-library[]
// tag::react-table[]
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// end::react-table[]

// tag::class[]
class ArtistTable extends Component {
// end::class[]
  // tag::state-object[]
  state = {
    posts: [],
    isLoading: true,
    error: null,
  };
  // end::state-object[]

  // tag::get-posts[]
  getArtistsInfo() {
    // tag::axios[]
    axios('http://localhost:9080/artists')
    // end::axios[]
      // tag::then-method[]
      .then(response => {
        // tag::response-data[]
        const artists = response.data;
        // end::response-data[]
        // tag::convert-data[]
        const posts = [];
        for (const artist of artists) {
          // tag::spread-one[]
          const { albums, ...rest } = artist;
          // end::spread-one[]
          for (const album of albums) {
            // tag::spread-two[]
            posts.push({ ...rest, ...album });
            // end::spread-two[]
          }
        };
        // end::convert-data[]
        this.setState({
          // tag::data[]
          posts,
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
    this.getArtistsInfo();
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
          Header: 'Artist ID',
          // end::header-ID[]
          // tag::accessor-ID[]
          accessor: 'id'
          // end::accessor-ID[]
        },
        {
          // tag::header-name[]
          Header: 'Artist Name',
          // end::header-name[]
          // tag::accessor-name[]
          accessor: 'name'
          // end::accessor-name[]
        },
        {
          // tag::header-genres[]
          Header: 'Genres',
          // end::header-genres[]
          // tag::accessor-genres[]
          accessor: 'genres',
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
          Header: 'Title',
          // end::header-title[]
          // tag::accessor-title[]
          accessor: 'title',
          // end::accessor-title[]
        },
        {
          // tag::header-tracks[]
          Header: 'Number of Tracks',
          // end::header-tracks[]
          // tag::accessor-tracks[]
          accessor: 'ntracks',
          // end::accessor-tracks[]
        }
      ]
    }
  ]
  // end::table-info[]

  // tag::return-table[]
  return (
    // tag::react-fragment[]
    <div>
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
          defaultPageSize={4}
          pageSizeOptions={[4, 5, 6]}
        />) : (
        // end::table[]
          <p>Loading .....</p>
        )}
    </div>
    // end::react-fragment[]
    );
    // end::return-table[]
  }
  // end::render-posts[]
}
// end::element[]

// tag::export-artisttable[]
export default ArtistTable;
// end::export-artisttable[]