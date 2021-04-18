import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import work1 from '../../../images/package1.jpg';
import work2 from '../../../images/package2.jpg';
import work3 from '../../../images/package3.jpg';
import work4 from '../../../images/package4.jpg';
import work5 from '../../../images/package5.jpg';

import './Works.css';

const works = [
    {
        img: work1,
        interval: 1000
    },
    {
        img: work2,
        interval: 500
    },
    {
        img: work3,
        interval: 500
    },
    {
        img: work4,
        interval: 500
    },
    {
        img: work5,
        interval: 500
    },
]
const Works = () => {
    return (
        <div className="w-100 my-carousel my-5 text-center">
            <h2 className='text-light'>Benefits of UltraNET <span style={{color: '#7AB259'}}>Faster Speed are Simply Better.</span></h2>
            <Carousel className='w-75 m-auto'>
                {
                    works.map((work, idx) => <Carousel.Item key={idx} interval={work.interval}>
                        <img
                            className="carousel-img-height d-block w-50 mx-auto my-5 img-fluid"
                            src={work.img}
                            alt=""
                        />
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Works;