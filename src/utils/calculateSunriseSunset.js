import SunCalc from 'suncalc';

export async function calculateSunriseAndSunset() {
  const coordinates = await getCoordinates();
  console.log(coordinates);
  if (!coordinates) {
    return { sunrise: null, sunset: null };
  }

  return SunCalc.getTimes(
    new Date(),
    coordinates.latitude,
    coordinates.longitude
  );
}

const getCoordinates = async () => {
  try {
    const response = await fetch('https://api.ipgeolocationapi.com/geolocate', {
      mode: 'cors',
    });
    const geo = await response.json();
    debugger;

    return { latitude: geo.latitude, longitude: geo.longitude };
  } catch (error) {
    console.log(error);
  }
};
