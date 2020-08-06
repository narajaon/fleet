import React from 'react';
import { google_api as KEY } from '../keys.json';

const ZOOM = 30;
const MAP_ID = 'map';
const SRC = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=initMap`;

/*
 * TODO:
 * - define zone delimiter ?
 * - check when out of zone
 * - push notification when out of zone
 */
function MapScript() {
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = {
            lat,
            lng,
          };

          const script = document.createElement('script');

          script.src = SRC;
          script.defer = true;

          window.initMap = () => {
            let map;
            let marker;

            if (window.google) {
              map = new window.google.maps.Map(
                document.getElementById(MAP_ID),
                {
                  center: pos,
                  zoom: ZOOM,
                }
              );

              marker = new window.google.maps.Marker({
                position: pos,
                map,
                title: 'Your vehicle is here',
              });
            }

            return { map, marker };
          };

          document.head.appendChild(script);
        }
      );
    }
  }, []);

  return null;
}

function Map() {
  return (
    <>
      <div id="map" style={{ height: '500px', width: '500px' }} />
      <MapScript />
    </>
  );
}

export default Map;
