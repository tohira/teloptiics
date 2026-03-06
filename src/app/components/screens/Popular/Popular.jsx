import { useState } from 'react'
import Container from '../../ui/Container/Container'
import './Popular.scss'
import img  from "../../../assets/images/popular1.png"
import img2 from "../../../assets/images/popular2.png"
import img3 from "../../../assets/images/popular3.png"
import img4 from "../../../assets/images/popular4.png"
import img5 from "../../../assets/images/popular5.png"
import img6 from "../../../assets/images/popular6.png"
import img7 from "../../../assets/images/popular7.png"
import img8 from "../../../assets/images/popular8.png"
import img9 from "../../../assets/images/popular9.png"
import img10 from "../../../assets/images/popular10.png"


export default function Popular() {
	const [data, setData] = useState([])
	return (
		<div className='popular'>
			<Container>
				<div className='popular__content'>
          <div className="popular__content__el">
						<h2 className="title">Популярные категории</h2>
						<a className='link' href="">Перейти в каталог</a>
					</div>
          <div className="popular__content__list">
						<div className="card"><img src={img } alt="" /> <b className='title'>Бинокли</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img2} alt="" /> <b className='title'>Телескопы</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img3} alt="" /> <b className='title'>Дальномеры</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img4} alt="" /> <b className='title'>Зрительные трубы</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img5} alt="" /> <b className='title'>Прицелы</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img6} alt="" /> <b className='title'>Лупы</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img7} alt="" /> <b className='title'>Монокуляры</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img8} alt="" /> <b className='title'>Микроскопы</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img9} alt="" /> <b className='title'>Тепловизоры</b> <p className='text'>35 товаров</p></div>
						<div className="card"><img src={img10} alt="" /> <b className='title'>Цифровые камеры</b> <p className='text'>35 товаров</p></div>
					</div>
				</div>
			</Container>
		</div>
	)
}
