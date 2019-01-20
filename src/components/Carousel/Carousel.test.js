import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

const sampleImages = [{
    key: 0,
    largeImageURL: 'url',
}];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Carousel images={sampleImages} /> , div);
    ReactDOM.unmountComponentAtNode(div);
});