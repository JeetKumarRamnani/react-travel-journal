import React from "react";

function Main(props) {
  console.log(props.item[0]);

  return (
    <div className="main-container">
      <img
        src={props.item.imageUrl}
        alt="picture of a country"
        className="country-picture"
      />
      <div className="other-details">
        <i className="fa-solid fa-location-dot location-dot">
          <span className="country-name">{props.item.location}</span>
        </i>
        <a
          href={props.item.googleMapsUrl}
          target="_blank"
          className="link-to-maps"
        >
          View on Google Maps
        </a>
        <h2 className="title-of-place">{props.item.title}</h2>
        <h4 className="date">{`${props.item.startDate} - ${props.item.endDate}`}</h4>
        <p className="description-of-place">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Main;
