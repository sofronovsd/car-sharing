import React, { useEffect, useState } from "react";
import "./map-widget.scss";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { LocationState } from "../../store/locationReducer";
import { useSelector } from "react-redux";
import { requestCoords } from "../../api/geocoder-api";
import IPoint from "../../store/interfaces/i-point";

interface MapWidgetState {
  location: LocationState;
}

const pointSelector = (state: MapWidgetState) => state.location.point;
const citySelector = (state: MapWidgetState) => state.location.city;

interface MapWidgetProps {
  points: IPoint[];
}

const MapWidget = ({ points }: MapWidgetProps) => {
  const point = useSelector(pointSelector);
  const city = useSelector(citySelector);
  const [placeMarks, setPlaceMarks] = useState([[0, 0]]);
  useEffect(() => {
    const coordsRequests = points.map((point) =>
      requestCoords(`${city.name}, ${point.address}`)
    );

    Promise.all(coordsRequests).then((coordsRequests) => {
      setPlaceMarks(coordsRequests);
    });
  }, [city.name, points]);

  const [position, setPosition] = useState({
    center: [54.3, 48.3],
    zoom: 10,
  });

  useEffect(() => {
    if (city.name && point.address) {
      requestCoords(`${city.name}, ${point.address}`).then((coords) => {
        if (coords) {
          setPosition({
            center: coords,
            zoom: 16,
          });
        }
      });
    }
  }, [city.name, point.address]);
  return (
    <div className="order_map_container">
      <span>Выбрать на карте:</span>
      <YMaps query={{ apikey: process.env.REACT_APP_MAP_KEY }}>
        <Map className="order_map" state={position}>
          {placeMarks.map((placeMark) => (
            <Placemark geometry={placeMark} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapWidget;
