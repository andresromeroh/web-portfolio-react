import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container, Row } from 'react-bootstrap';

const responsive = {
    0: { items: 4 },
    1: { items: 4 },
    3: { items: 4 }
};

const items = [
    <img src="https://images.youracclaim.com/size/110x110/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/cisco_ccna_R_26S.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/92e96a17-8498-4007-9731-9971b5a24571/IBM_Cloud_Essentials_-_Knowledge_Badge.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/1b7ad355-be72-4017-b38f-abee54ea2d29/IBM_Cloudant_Indexes_and_Quries_V2.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/71ea5682-2233-434c-a2c5-dd3f7fb8d5e9/Garage_Method_-_Test_driven_Development_V1_-__Final.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/aea2774e-a5c4-4fdc-912d-23eb1625af4d/IBM_Cloudant_-_Dev_Essentials_V2.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/0bb8ffe9-eb19-4f60-ae87-d6bdb6532664/IBM_cloudant_managed_proficiency_v2.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python_101_Data_Science.png" alt='img'></img>,
    <img src="https://images.youracclaim.com/size/110x110/images/08216781-93cb-4ba1-8110-8eb3401fa8ce/Docker_Essentials_-_ISDN.png" alt='img'></img>
];

const Carousel = () => (
    <Container className='mobile-hide'>
        <Row>
            <div className='heading' style={{ paddingBottom: '50px' }}>
                <h2>Badges & Certifications</h2>
            </div>
        </Row>
        <AliceCarousel
            animationDuration={2000}
            paddingLeft={120}
            disableButtonsControls
            mouseTracking
            items={items}
            responsive={responsive}
        />
    </Container>
);

export default Carousel;