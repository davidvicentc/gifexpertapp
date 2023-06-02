export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Qdr6oKmM4GJypZgdTaSGLmDkJrme8W9C&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};
