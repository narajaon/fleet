import React from 'react';

function Localisation() {
  const [loc, setLoc] = React.useState();
  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLoc({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  if (!loc) return null;

  return (
    <div>
      <div>latitude {loc.lat}</div>
      <div>longitude {loc.long}</div>
    </div>
  );
}

export default Localisation;
