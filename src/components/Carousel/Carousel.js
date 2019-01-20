import React from 'react';
import './Carousel.scss';
import { ReactComponent as Arrow } from './arrow.svg';

const Carousel = ({ images }) => (
    <article className="Carousel">
        <ul className="Carousel__container">
            {Object.keys(images).map(key => (
                <li className="Carousel__item" key={key}>
                    <div className="Media">
                        <img src={images[key].webformatURL} alt={`${parseInt(key, 10) + 1} title`} />
                    </div>
                    <p>{`Image ${parseInt(key, 10) + 1} title`}</p>
                </li>
            ))}
        </ul>
        <nav className="Carousel__nav">
            <button className="Carousel__button Carousel__button--prev" type="submit">
                <Arrow />
                <span>Prev</span>
            </button>
            <button className="Carousel__button Carousel__button--next" type="submit">
                <Arrow />
                <span>Next</span>
            </button>
        </nav>
    </article>
);

export default Carousel;