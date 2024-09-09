import defaultImage from '../../assets/default.png';
import './NewsCard.css';

export default function Card({
  url,
  image,
  author,
  publishedAt,
  title,
  summary,
}) {
  return (
    <div className="news-card">
      <article className="news-card__article">
        <a href={url} target="_blank">
          <div className="news-card__image">
            <img src={image || defaultImage} alt="" />
          </div>
          <div className="news-card__info">
            <div className="news-card__publisher">
              <p>{`${author} • ${publishedAt}`}</p>
            </div>
            <h3 className="news-card__title">{title}</h3>
            <p className="news-card__summary">{summary}</p>
          </div>
        </a>
      </article>
    </div>
  );
}
