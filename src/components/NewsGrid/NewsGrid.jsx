import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsGrid.css';

export default class NewsGrid extends React.Component {
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
                publishedAt={
                  new Date(el.publishedAt).toISOString().split('T')[0]
                }
                title={el.title}
                summary={el.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
