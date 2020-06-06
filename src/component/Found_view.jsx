import React from "react";

const FoundView = ({ foundSearch }) => {
  // console.log(foundSearch);
  const searchResult = foundSearch.length ? (
    foundSearch.map(({ address, imageSrc, url, city, category }, i) => (
      <div key={i}>
        <div>
          <img
            src={imageSrc}
            alt={category}
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <address>{address}</address>
        <br />
        <cite>{city}</cite>
        <a href={url}>view in page</a>
      </div>
    ))
  ) : (
    <div>loading...</div>
  );

  return (
    <div style={{ display: "flex", justifyContent: "spac-around" }}>
      <div>{searchResult}</div>
    </div>
  );
};

export default FoundView;
