import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>recent Projects</span>
        <span>portfolio</span>
        <Swiper>
            <SwiperSlide>
                <img src={Image/} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio