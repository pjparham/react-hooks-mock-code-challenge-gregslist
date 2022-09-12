import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListings] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings)
  }

  // function handleSearch(submittedSearch){
  //   const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(submittedSearch.toLowerCase()))
  //   setListings(searchedListings)
  // }

  const displayedListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ListingsContainer onDeleteListing={handleDeleteListing} listings={displayedListings} setListings={setListings}/>
    </div>
  );
}

export default App;
