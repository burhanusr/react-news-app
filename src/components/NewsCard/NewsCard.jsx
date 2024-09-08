import React from 'react';
import defaultImage from '../../assets/default.png';
import './NewsCard.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className="news-card">
        <article className="news-card__article">
          <a href={this.props.url} target="_blank">
            <div className="news-card__image">
              <img src={this.props.image || defaultImage} alt="" />
            </div>
            <div className="news-card__info">
              <div className="news-card__publisher">
                <p>{`${this.props.author} • ${this.props.publishedAt}`}</p>
              </div>
              <h3 className="news-card__title">{this.props.title}</h3>
              <p className="news-card__summary">{this.props.summary}</p>
            </div>
          </a>
        </article>
      </div>
    );
  }
}
