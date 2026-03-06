import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../../ui/Container/Container'
import './Bestseller.scss'
import img from "../../../assets/images/Bestsellers1.png"
import img2 from "../../../assets/images/Bestsellers2.png"
import img3 from "../../../assets/images/Bestsellers3.png"
import img4 from "../../../assets/images/Bestsellers4.png"

export default function Bestseller() {
	const [data, setData] = useState([])
	return (
		<div className='bestseller'>
			<Container>
				<div className='bestseller__content'>
					<div className='bestseller__content__el'>
						<b className='title'>Хиты продаж</b>
						<a className='link' href=''>
							Смотреть весь каталог
						</a>
					</div>
					<div className='bestsellar__content__lsit'>
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
							className='mySwiper'
						>
							<SwiperSlide>
								<div className='card'>
									<button className='card__btn'><span className='card__btn__chek'><i class="fa-solid fa-check"></i></span> В наличии </button>
									<Swiper
										autoplay={{
											delay: 1500,
											disableOnInteraction: false,
										}}
										slidesPerView={1}
										spaceBetween={20}
										loop={true}
										pagination
										modules={[Pagination, Autoplay]}
										className='mySwiper'
									>
										<SwiperSlide>
									    <img src={img} alt="" />
										</SwiperSlide>
										
									
									</Swiper>
									<p className="card__text">Бинокль БПЦ2 10х40 (обрезин., рубин)</p>
									<div className="card__wrap">
										<div className="card__wrap__star">
											<span><i class="fa-regular fa-star"></i></span>
											<span><i class="fa-regular fa-star"></i></span>
											<span><i class="fa-regular fa-star"></i></span>
											<span><i class="fa-regular fa-star"></i></span>
										</div>
										<p className='card__warp'><span>4.67 </span>(12 отзывов)</p>
									</div>
									<div className="card__price">
										<p className='card__price'>10 190 ₽ <span>12 450 ₽</span></p>
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>

						<button className='btn__prev'>
							<i class='fa-solid fa-chevron-left'></i>
						</button>
						<button className='btn__next'>
							<i class='fa-solid fa-chevron-right'></i>
						</button>
					</div>
				</div>
			</Container>
		</div>
	)
}
