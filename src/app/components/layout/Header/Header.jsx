import { useState } from 'react'
import logo from '../../../assets/images/header3-logo.png'
import logores from '../../../assets/images/logores.png'
import './Header.scss'

export default function Header() {
	const [data, setData] = useState([])
	return (
		<div className='header'>
			
				<nav className='header__nav'>
					<div className='bg'>
					<div className="container">
						<div className="header__nav__wrap1">
								<div className='menu'>
							<div className='menu__wrap'>
								<a className='menu__wrap__link' href=''>
									<i class='fa-solid fa-bars'></i>
								</a>
								<a href=''>
									<img src={logores} alt='' />
								</a>
							</div>
						</div>
						<div className='menu'>
							<div className='menu__wrap'>
								<a className='menu__wrap__link' href=''>
									<i class='fa-solid fa-phone'></i>
								</a>
								<a className='menu__wrap__link' href=''>
									<i class='fa-solid fa-magnifying-glass'></i>
								</a>
							</div>
						</div>

						<ol className='list1'>
							<li className='list1__item'>
								<a className='list1__item__link' href=''>
									<span className='map'>
										<i class='fa-solid fa-location-dot'></i>
									</span>{' '}
									Москва
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link' href=''>
									О компании
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link' href=''>
									Доставка
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link links' href=''>
									Оплата
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link links' href=''>
									Акции
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link links' href=''>
									Распродажа
								</a>
							</li>
							<li className='list1__item'>
								<a className='list1__item__link' href=''>
									Еще
								</a>
							</li>
						</ol>
						<ol className='list2'>
							<li className='list2__item'>
								<div className='list2__item__wrap'>
									<a href='' className='icon'>
										<i class='fa-brands fa-telegram'></i>
									</a>
									<a href='' className='icon'>
										<i class='fa-brands fa-whatsapp'></i>
									</a>
									<a href='' className='icon'>
										<i class='fa-solid fa-phone'></i>
									</a>
									<a href='tel:+7 495 215 0744' className='icon'>
										+7 495 215 0744
									</a>
								</div>
							</li>
							<li className='list2__item'>
								<a className='list2__item__link' href=''>
									<span>
										<i class='fa-solid fa-envelope'></i>
									</span>{' '}
									sales@tele-optics.ru
								</a>
							</li>
							<li className='list2__item'>
								<a className='list2__item__link' href=''>
									<span>
										<i class='fa-regular fa-user'></i>
									</span>{' '}
									Вход / Регистрация{' '}
								</a>
							</li>
						</ol>
						</div>
					</div>
					</div>
					<div className=''>
					  <div className="container">
							<div className="header__nav__wrap2">
									<a href=''>
							<img src={logo} alt='' />
						</a>
						<form className='form'>
						   <div className="form__wrap">
									<label htmlFor="">Введите название:</label>
							<input
								className='form__input'
								type='text'
								placeholder=' Бинокль армейский'
							/> 
							 </div>
							<span className='form__icon'>
								<i class='fa-solid fa-magnifying-glass'></i>
							</span>
						</form>
					  <div className="icon">
						<a className='icon__link' href=''><i class='fa-regular fa-eye'></i></a>
						<a className='icon__link' href=''><i class='fa-solid fa-scale-balanced'></i></a>
						<a className='icon__link' href=''><i class='fa-regular fa-heart'></i></a>
						<a className='icon__link' href=''><i class='fa-solid fa-cart-arrow-down'></i></a>
						</div>
						</div>
							</div>
					</div>
				 <hr className='hr' />
						<div className="container">
							<div className="header__nav__wrap3">
						    <a className='link' href="">Телескопы</a>
						    <a className='link' href="">Бинокли</a>
						    <a className='link' href="">Лупы</a>
						    <a className='link links' href="">Микроскопы</a>
						    <a className='link links' href="">Зрительные трубы</a>
						    <a className='link links' href="">Монокуляры</a>
						    <a className='link' href="">Прицелы</a>
						    <a className='link' href="">Дальномеры</a>
						    <a className='link' href="">Тепловизоры</a>
						    <a className='link' href="">Еще</a>
							</div>
						</div>
				
				</nav>
			</div>

	)
}
