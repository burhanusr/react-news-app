import NewsCard from '../NewsCard/NewsCard';
import './NewsGrid.css';

export default function NewsGrid({ data }) {
  const newData = data
    .filter((el, i) => i !== 0)
    .filter((el) => el.title !== '[Removed]');

  return (
    <section className="news-grid">
      <div className="container">
        <h2 className="news-grid__title">Latest News</h2>
        <div className="news-grid__container">
          {newData.map((el, i) => (
            <NewsCard
              key={i}
              url={el.url}
              image={el.urlToImage}
              author={el.author}
              publishedAt={new Date(el.publishedAt).toISOString().split('T')[0]}
              title={el.title}
              summary={el.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
