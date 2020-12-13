export async function requestCoords(geocode: string) {
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_MAP_KEY}&geocode=${geocode}&format=json`
  );

  if (response.ok) {
    const json = await response.json();
    const coords = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
      " "
    );
    return [Number.parseFloat(coords[1]), Number.parseFloat(coords[0])];
  }
  throw new Error();
}
