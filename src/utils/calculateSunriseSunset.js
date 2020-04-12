import SunCalc from 'suncalc';

export async function calulateSunriseAndSunet() {
  const coordinates = await getCorordinates();

  if (!coordinates) {
    return;
  }

  return SunCalc.getTimes(
    new Date(),
    coordinates.latitude,
    coordinates.longitude
  );

}

const getCorordinates = () => new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return resolve(null);
    }

    navigator.geolocation.getCurrentPosition(
      ({coords}) => resolve({latitude: coords.latitude, longitude: coords.longitude}),
      () => resolve(null)
    );
  })
