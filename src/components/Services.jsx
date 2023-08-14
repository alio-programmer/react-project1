import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.avif";

const Services = () => {
  return (
    <>
        <div className='photocarousel'>
            <Carousel infiniteLoop showStatus={false} showArrows={false}>
                <div>
                    <img src={img1} alt="" />
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <p className='legend'>Peer-to-Peer Services</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p className='legend'>High end performance</p>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Services