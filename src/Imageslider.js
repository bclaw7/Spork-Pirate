import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/Spork-edeee.png';
import img2 from './img/Spork-2020.png';
import img3 from './img/Spork-45454.png';
import img4 from './img/Spork-comica.jpg';
import img5 from './img/Spork-poop.jpg';

function imageslider() {
    return (
        <div>
            <Carousel interval={3000}>
                <Carousel.Item>
                    <img src={img1} height="900px" width="100%" alt="Spork" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} height="900px" width="100%" alt="Spork" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} height="900px" width="100%" alt="Spork" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img4} height="900px" width="100%" alt="Spork" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img5} height="900px" width="100%" alt="Spork" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default imageslider
