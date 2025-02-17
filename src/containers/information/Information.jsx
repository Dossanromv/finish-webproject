import React from 'react'
import './information.css'
import { Infotext } from '..'
import unity from '../../assets/unity.png'
import cc from '../../assets/c-sharp-c.svg'
import cc2 from '../../assets/c.svg'
import inreal from '../../assets/fsa.png'
import { Infoimage } from '../../components'
import { Infomore1 } from '../../components'
import { Infomore2 } from '../../components'
import FrequentlyAskedQuestion2 from '../../components/infomore2/Infomore2'
import FrequentlyAskedQuestion3 from '../../components/infomore2/Infomore3'
import FrequentlyAskedQuestion4 from '../../components/infomore2/Infomore4'
import FrequentlyAskedQuestion5 from '../../components/infomore2/Infomore5'

const information = () => {
	return (
		<div className='StarPlayer_all-info'>
			<div className='StarPlayer_all-blocks'>
				<div
					className='OneBlock'
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='1000'
				>
					<div className='OneBlock_info-image'>
						<img src={unity} className='unity' />
					</div>

					<div className='ThreeBlock_all-info'>
						<div className='ThreeBlock-line' />
						<p>
							Unity — это игровой движок, на котором разрабатывают мобильные
							игры и проекты для ПК (Windows, iOS, Linux) и консолей, например
							для Xbox, PlayStation. В нем есть разные компоненты для работы с
							графикой, анимацией, физикой объектов, звуком, шаблонами и
							скриптами.
						</p>
					</div>
				</div>

				<div
					className='TwoBlock'
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='1000'
				>
					<div className='ThreeBlock_info-image'>
						<img src={inreal} className='Cc' />
					</div>

					<div className='ThreeBlock_all-info'>
						<div className='ThreeBlock-line' />
						<p>
							Unreal Engine (UE) — это движок для создания игр, один из двух
							наиболее популярных в мире. Движком называется программная среда,
							на основе которой конструируются и создаются игры. В ней можно
							работать с персонажами, логикой, физикой и графикой игры.
						</p>
					</div>
				</div>

				<div
					className='ThreeBlock'
					data-aos='fade-up'
					data-aos-delay='50'
					data-aos-duration='1000'
				>
					<div className='ThreeBlock_info-image'>
						<img src={cc} className='Cc' />
						<img src={cc2} className='Cc2' />
					</div>

					<div className='ThreeBlock_all-info'>
						<div className='ThreeBlock-line' />
						<p>
							Программирование в Unity для опытных программистов C# и C++
							Позволяет создателям создавать игры, приложения и захватывающие
							впечатления, благодаря высококачественной графике, сквозным
							возможностям Multiplayer, поддержке нескольких платформ и
							усовершенствованиям ИИ.
						</p>
					</div>
				</div>
			</div>

			<Infotext />
			<Infoimage />
			<Infomore1 />

			<FrequentlyAskedQuestion2
				question='Как ты изучаешь языки программирования, например C# или C++?'
				answer='Я обычно получаю знания на Ютубе или в Гугле. Курсы оплачивать не обязательно, главное — больше практиковаться после того, как ты получил знания'
			/>

			<FrequentlyAskedQuestion3
				question='Как разработчик игр становится успешным в этой сфере?'
				answer='Процесс и опыт'
			/>

			<FrequentlyAskedQuestion4
				question='Почему именно разработчик игр?'
				answer='У меня слишком много фантазий по поводу игр и анимации'
			/>

			<FrequentlyAskedQuestion5
				question='Ваши мнение о ИИ?'
				answer='ИИ это как калькулятор'
			/>
		</div>
	)
}

export default information
