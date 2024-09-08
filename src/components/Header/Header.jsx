import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(event) {
    const { searchQuery } = this.state;

    if (event.key === 'Enter' && searchQuery.trim() !== '') {
      event.preventDefault();
      this.props.onSearch(searchQuery);
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              myNEWS
            </a>
          </div>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Business
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Lifestyle
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__search">
            <form className="search-form" onSubmit={this.handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3rem"
                viewBox="0 -960 960 960"
                width="1.3rem"
                fill="#5f6368"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange={this.handleInputChange}
                onKeyDown={this.handleSubmit}
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}
