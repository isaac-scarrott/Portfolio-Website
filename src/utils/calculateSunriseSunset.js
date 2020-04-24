import SunCalc from 'suncalc';

export async function calculateSunriseAndSunset() {
  const coordinates = await getCoordinates();

  if (!coordinates) {
    return { sunrise: null, sunset: null };
  }

  return SunCalc.getTimes(
    new Date(),
    coordinates.latitude,
    coordinates.longitude
  );
}

const getCoordinates = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return resolve({ sunrise: null, sunset: null });
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        resolve({ latitude: coords.latitude, longitude: coords.longitude }),
      () => resolve({ sunrise: null, sunset: null })
    );
  });
