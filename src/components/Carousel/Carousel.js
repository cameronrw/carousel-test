import React from 'react';
import './Carousel.scss';

const Carousel = ({ images }) => (
    <article className="Carousel">
        <div className="Carousel__wrapper">
            <ul className="Carousel__container">
                {Object.keys(images).map(key => (
                    <li className="Carousel__item" key={key}>
                        <img src={images[key].webformatURL} alt={`${parseInt(key, 10) + 1} title`} />
                        <p>{`Image ${parseInt(key, 10) + 1} title`}</p>
                    </li>
                ))}
            </ul>
        </div>
        <nav className="Carousel__nav">
            <button className="Carousel__button Carousel__button--prev" type="submit">
                <span>Prev</span>
            </button>
            <button className="Carousel__button Carousel__button--next" type="submit">
                <span>Next</span>
            </button>
        </nav>
    </article>
);

export default Carousel;