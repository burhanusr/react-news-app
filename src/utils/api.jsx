const baseUrl = import.meta.env.VITE_BASE_URL;

export const getLatestNews = async () => {
  const response = await fetch(
    `${baseUrl}/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
  );
  const result = await response.json();
  return result.articles;
};

export const search = async (query) => {
  const response = await fetch(
    `${baseUrl}/top-headlines?country=us&q=${query}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const result = await response.json();
  return result.articles;
};
