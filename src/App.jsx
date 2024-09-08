import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FeaturedNews from './components/FeaturedNews/FeaturedNews';
import NewsGrid from './components/NewsGrid/NewsGrid';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(q) {
    this.setState({ query: q });
  }
  render() {
    return (
      <div className="container">
        <Header onSearch={this.handleSearch} />
        <main className="main-content">
          <FeaturedNews q={this.state.query} />
          <NewsGrid q={this.state.query} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
