import defaultImage from '../../assets/default.png';
import './FeaturedNews.css';

export default function FeaturedNews({ data }) {
  return (
    <section className="featured-news">
      <article className="featured-news__article">
        <a
          href={data.url}
          target="_blank"
          className="container featured-news__link"
        >
          <div className="featured-news__image">
            <img src={data.urlToImage || defaultImage} alt="" />
          </div>
          <div className="featured-news__info">
            <div className="featured-news__publisher">
              <p>{`${data.author || 'Unknown'}  •  ${new Date(data.publishedAt)
                .toISOString()
                .split('T')}`}</p>
            </div>
            <h2 className="featured-news__title">{data.title}</h2>
            <p className="featured-news__summary">{data.description}</p>
          </div>
        </a>
      </article>
    </section>
  );
}
