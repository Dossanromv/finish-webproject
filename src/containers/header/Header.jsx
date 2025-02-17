import React from 'react'
import './header.css'
import gamebooks from '../../assets/gamebooks.png'
import unity from '../../assets/unity1.png'
import unreal from '../../assets/unreal.png'
import cry from '../../assets/cry.png'

const Header = () => {



  return (
		<div className='StarPlayer__header section__padding' id='home'>
			<div className='StarPlayer__header-content'>
				<div className='StarPlayer__Line' />

				<h1
					className='gradient__text'
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='1000'
				>
					Игровой разработчик
				</h1>
				<p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1000'>
					Разработчик игр — специалист, который занимается созданием
					компьютерных, мобильных и консольных игр. Он отвечает за все этапы
					разработки: от концепции и дизайна до программирования, тестирования и
					выпуска игры на рынок.
				</p>

				<div className='StarPlayer__header-content__input'>
					<input type='email' placeholder='Your Email Address' />
					<button type='button'>Get Started</button>
				</div>
			</div>

			<div
				className='StarPlayer__header-image'
				data-aos='fade-up'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				<img src={gamebooks} />
			</div>
			<div
				className='StarPlayer__header-mini-image-1'
				data-aos='fade-up'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				<img src={unity} />
			</div>
			<div
				className='StarPlayer__header-mini-image-2'
				data-aos='fade-up'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				<img src={cry} />
			</div>
			<div
				className='StarPlayer__header-mini-image-3'
				data-aos='fade-up'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				<img src={unreal} />
			</div>
			<div className='StarPlayer__Line-1' />
		</div>
	)



}

export default Header