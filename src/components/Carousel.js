import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Strong } from '../shared/CustomStyled';
import { Row } from 'react-bootstrap';

const Carousel = ({ items }) => {
    const images = items.map((item, index) => (
        <a 
            key={index} 
            style={{ marginLeft: '6%' }} 
            href={item.information}
            target='_blank'
            rel='noreferrer noopener'
        >
            <img className='zoom' src={item.image} alt='badge' />
        </a>
    ));
    const responsive = {
        0: { items: 5 },
        1: { items: 5 }
    };
    return (
        <section className='carousel mb-5'>
            <Row className='pb-5'>
                <h2>
                    <Strong>C</Strong>ertifications & Badges
                </h2>
            </Row>
            <AliceCarousel
                animationDuration={2000}
                autoPlay
                infinite
                disableButtonsControls
                disableDotsControls
                mouseTracking
                items={images}
                responsive={responsive}
            />
        </section>
    );
}

export default Carousel;