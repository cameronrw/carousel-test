import React, { Component } from 'react';
import './App.scss';
import Carousel from '../Carousel/Carousel';

// Pixabay API Key
// TODO: Move this to a .ENV file
const KEY = '9656065-a4094594c34f9ac14c7fc4c39';

// Pixabay API urk
const URL = `https://pixabay.com/api/?key=${KEY}&q=beautiful+landscape&image_type=photo&per_page=6`;

class App extends Component {

  state = {
    error: null,
    isLoaded: false,
    images: [],
    currentIndex: 0,
    translateX: 0,
  }

  componentDidMount() {
    // Fetch images
    fetch(URL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          images: result.hits,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      },
    );
  }

  slideNext = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateX: prevState.translateX + -(this.slideWidth()),
    }))
  }

  slidePrev = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateX: prevState.translateX + this.slideWidth(),
    }))
  }

  slideWidth = () => document.querySelector('.Carousel__item').clientWidth;

  render() {

    const {
      error, isLoaded, images, translateX,
    } = this.state;

    if (error) {
      return <p>Error: {error}</p>
    }

    if (!isLoaded) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <header className="App__header">
          <h1>Carousel Test</h1>
        </header>
        <Carousel
          images={images}
          slideNext={this.slideNext}
          slidePrev={this.slidePrev}
          translateX={translateX}
        />
      </div>
    );
  }
}

export default App;
