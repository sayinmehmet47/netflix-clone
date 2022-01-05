// import axios from "axios";

// export default function handler(req, res) {
//   const array = [2, 6, 8, 22, 82, 36];
//   const random = Math.floor(Math.random() * array.length);
//   const movie = array[random];
//   console.log(movie);

//   const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=a23e1ed35a0af2b739526a162527185a`;
//   axios
//     .get(url)
//     .then(({ data }) => {
//       res.status(200).json({ data });
//     })
//     .catch(({ err }) => {
//       res.status(400).json({ err });
//     });
// }

export async function getData() {
  const array = [2, 6, 8, 22, 82, 36];
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


