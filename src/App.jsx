import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import FeaturedNews from './components/FeaturedNews/FeaturedNews';
import NewsGrid from './components/NewsGrid/NewsGrid';
import Footer from './components/Footer/Footer';
import { getLatestNews, search } from './utils/api';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLatestNews();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (query) => {
    const result = await search(query);

    if (result.length === 0) {
      setError('Not Found');
    } else {
      setData(result);
    }
  };

  console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <Header onSearch={handleSearch} />
      <main className="main-content">
        {error ? (
          <div className="container">
            <p>Error: {error}</p>
          </div>
        ) : (
          <>
            <FeaturedNews data={data[0]} />
            <NewsGrid data={data} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
