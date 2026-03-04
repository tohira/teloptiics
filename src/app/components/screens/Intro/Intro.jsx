import React, { useState } from 'react';
import './Intro.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from "../../../assets/images/intro-1.png"
import img2 from "../../../assets/images/intro-2.png"


export default function Intro() {
			const [data, setData] = useState([]);
		return (
				<div className="intro">
						<div className="container">
								<div className="intro__content">

                   <div className="intro__content__left">
											 <Swiper
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '.btn__next',
                            prevEl: '.btn__prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    </Swiper>

                    <button className="btn__prev">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="btn__next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
									 </div>
                   <div className="intro__content__right">
										 <Swiper
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '.btn__next',
                            prevEl: '.btn__prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                  
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                      
                    </Swiper>

                    <button className="btn__prev">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="btn__next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
									 </div>

									
								</div>
						</div>
				</div>
		);
}
