export const fetchQuote = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/10')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      text: quote,
      name: character,
      img: image
    }));
};
