import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../../../assets/images/intro-1.png'
import img2 from '../../../assets/images/intro-2.png'
import Container from '../../ui/Container/Container'
import './Intro.scss'

export default function Intro() {
	const [data, setData] = useState([])
	return (
		<div className='intro'>
			<Container>
				<div className='intro__content'>
					<div className='intro__content__left'>
						<Swiper
							autoplay={{
								delay: 1500,
								disableOnInteraction: false,
							}}
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							pagination={true}
							navigation={{
								nextEl: '.btn__next',
								prevEl: '.btn__prev',
							}}
							modules={[Navigation, Pagination, Autoplay]}
							className='mySwiper'
						>
							<SwiperSlide>
								<div className='info'>
									<img src={img1} alt='' />
									<div className='info__left'>
										<div className='info__left__wrap'>
											<b className='subtitle'>Мы снизили цены !</b>
											<h2 className='title'>
												На ночную <span>оптику</span>
											</h2>
										</div>
										<a className='link' href=''>
											Подробнее{' '}
											<span>
												<i class='fa-solid fa-arrow-righ'></i>
											</span>
										</a>
									</div>
									<div className='info__right'>
										<b className='info__right__subtitle'>Например</b>
										<b className='info__right__discount'>
											155 490{' '}
											<span>
												<i class='fa-solid fa-ruble-sign'></i>
											</span>
										</b>
										<b className='info__right__price'>
											149 990{' '}
											<span>
												<i class='fa-solid fa-ruble-sign'></i>
											</span>
										</b>
										<p className='info__right__text'>
											Прицел ночного <span> видения Digisight Ultra</span> N455
											LRF c дальномером
										</p>
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
					<div className='intro__content__right'>
						<Swiper
							autoplay={{
								delay: 1500,
								disableOnInteraction: false,
							}}
							slidesPerView={1}
							spaceBetween={20}
							pagination={true}
							loop={true}
							navigation={{
								nextEl: '.btn__next2',
								prevEl: '.btn__prev2',
							}}
							modules={[Navigation, Pagination, Autoplay]}
							className='mySwiper'
						>
							<SwiperSlide>
								<img src={img2} alt='' />
								<div className='right__wrap'>
									<b className='right__wrap__title'>Hikmicro</b>
									<p className='right__wrap__text'>Тепловизионный монокуляр</p>
								</div>
							</SwiperSlide>
						</Swiper>

						<button className='btn__prev2'>
							<i class='fa-solid fa-chevron-left'></i>
						</button>
						<button className='btn__next2'>
							<i class='fa-solid fa-chevron-right'></i>
						</button>
					</div>
				</div>
			</Container>
		</div>
	)
}
