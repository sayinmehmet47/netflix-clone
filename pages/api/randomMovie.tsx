export async function getData() {
  const array = [18, 87, 2, 6, 11, 15];
  const random = Math.floor(Math.random() * array.length);
  const movie = array[random];
  //   console.log(movie);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=a23e1ed35a0af2b739526a162527185a`
  );
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
