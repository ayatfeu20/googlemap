import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css"

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

let marker: any;

const Map = () => {
  const sweden = { lat: 60.1282, lng: 18.6435 };
  const [coordinates, setCoordinates] = useState(sweden);
  const [isEditable, setIsEditable] = useState(false);

  const handleApiLoaded = (map: any, maps: any) => {
    marker = new maps.Marker({
      position: coordinates,
      map,
      title: "Store Location",
    });

    google.maps.event.addListener(map, "center_changed", function () {
      const center = map.getCenter();
      setCoordinates(center.toJSON());
      marker.setPosition(center);
    });
  };

  return (
  <div className=" project container d-flex">
    <div><p>Map project</p></div>
    <div className="map">
      <GoogleMapReact
        defaultCenter={sweden}
        zoom={15}
        yesIWantToUseGoogleMapApiInternals
        draggable={isEditable}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          latitude={59.955413}
          longitude={30.337844}
          text="Store Location"
        />
      </GoogleMapReact>
      <div className="container d-flex">
        <div className="buttons row">
      <div className="col-lg-2 ">
          <button className="ran-btn " onClick={() => setIsEditable(true)} >Teleport me to somewhere randon</button></div>
      <div className="col-lg-4">
          <button className="home-btn " onClick={() => setIsEditable(false)}>Bring me back home</button></div>
        </div>
        </div>
        <div className="position"> <p>{JSON.stringify(coordinates)}</p></div>
       
       
      
    </div>
  </div>
  );
};

export default Map;
