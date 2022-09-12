import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, onDeleteListing }) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then ((r => r.json()))
    .then((listingData) => setListings(listingData))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
         return <ListingCard onDeleteListing={onDeleteListing} key={listing.id} listing={listing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
