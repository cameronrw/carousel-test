import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

function aFunction() {
    return true;
}

const sampleImages = [{
    key: 0,
    webformatURL: 'url',
}];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Carousel
        images={sampleImages}
        translateX={0}
        slideNext={aFunction}
        slidePrev={aFunction}
    /> , div);
    ReactDOM.unmountComponentAtNode(div);
});