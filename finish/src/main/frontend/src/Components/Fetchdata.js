// tag::react-library[]
import React, { Component } from "react";
import axios from "axios";
// end::react-library[]

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
}

// tag::export-fetchdata[]
export default Fetchdata;
// end::export-fetchdata[]
