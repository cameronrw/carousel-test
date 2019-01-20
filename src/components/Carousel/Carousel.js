import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';
import { ReactComponent as Arrow } from './arrow.svg';

const Carousel = ({
    images,
    slideNext,
    slidePrev,
    translateX,
}) => (
    <article className="Carousel">
        <ul
            className="Carousel__container"
            style={{
                transform: `translateX(${translateX}px)`,
                transition: 'transform 0.5s',
            }}
        >
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
            <button onClick={slidePrev} className="Carousel__button Carousel__button--prev" type="submit">
                <Arrow />
                <span>Prev</span>
            </button>
            <button onClick={slideNext} className="Carousel__button Carousel__button--next" type="submit">
                <Arrow />
                <span>Next</span>
            </button>
        </nav>
    </article>
);

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        webformatURL: PropTypes.string,
    })).isRequired,
    slideNext: PropTypes.func.isRequired,
    slidePrev: PropTypes.func.isRequired,
    translateX: PropTypes.number.isRequired,
};

export default Carousel;