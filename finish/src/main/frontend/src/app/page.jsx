import "../../styles/index.css";
import ArtistTable from "./ArtistTable";
import React from 'react';

// tag::createHome[]
export default function Home() {
  return (
    // tag::displayArtistTable[]
    <ArtistTable></ArtistTable>
    // end::displayArtistTable[]
  );
}
// end::createHome[]
