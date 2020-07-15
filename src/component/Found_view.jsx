import React from "react";
import Styles from "./Found_view.module.css";
const FoundView = ({ foundSearch }) => {
  const { view_wrapper, display_view, found_view, img_view } = Styles;
  const searchResult = foundSearch.length ? (
    foundSearch &&
    foundSearch.map(({ address, imageSrc, url, city, category }, i) => (
      <div key={i} className={found_view}>
        <div className={img_view}>
          <img
            src={imageSrc}
            alt={category}
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <address>{address}</address>
        <cite>{city}</cite>
        <br />
        <a href={url}>view in page</a>
      </div>
    ))
  ) : (
    <div>{null}</div>
  );

  return (
    <div className={view_wrapper}>
      <div className={display_view}>{searchResult}</div>
    </div>
  );
};

export default FoundView;
