import React from 'react';
import defaultImage from '../../assets/default.png';
import './FeaturedNews.css';

export default class FeaturedNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data.articles, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  async componentDidUpdate() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&q=${
      this.props.q
    }&apiKey=${import.meta.env.VITE_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data.articles, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) return <p>Loading...</p>;

    if (data.length === 0) return <p>Result Not Found</p>;

    return (
      <section className="featured-news">
        <article className="featured-news__article">
          <a
            href={data[0].url}
            target="_blank"
            className="container featured-news__link"
          >
            <div className="featured-news__image">
              <img src={data[0].urlToImage || defaultImage} alt="" />
            </div>
            <div className="featured-news__info">
              <div className="featured-news__publisher">
                <p>{`${data[0].author || 'Unknown'}  •  ${
                  new Date(data[0].publishedAt).toISOString().split('T')[0]
                }`}</p>
              </div>
              <h2 className="featured-news__title">{data[0].title}</h2>
              <p className="featured-news__summary">{data[0].description}</p>
            </div>
          </a>
        </article>
      </section>
    );
  }
}
