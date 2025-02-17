import React from 'react'
import './infomore1.css'
import 'boxicons'
import joystick from '../../assets/joystick-svgrepo-com.svg'
import design from '../../assets/cube-svgrepo-com.svg'
import test from '../../assets/test-tube-minimalistic-svgrepo-com.svg'
import market from '../../assets/marketing-speaker-svgrepo-com.svg'
import pubu from '../../assets/user-svgrepo-com.svg'


const Infomore1 = () => {
  return (
		<div className='StarPlayer_menu'>
			<div className='StarPlayer_menu_info'>
				<div className='StarPlayer__Line1' />

				<div class='container'>
					<h2>Другие профессии</h2>
					<section
						class='services'
						data-aos='fade-up'
						data-aos-delay='50'
						data-aos-duration='1000'
					>
						<div class='card'>
							<div class='content'>
								<div class='icon'>
									<img src={test} />
								</div>
								<div class='title'>Tester</div>
								<p>
									Тестировщики или QA-инженеры, — это специалисты, которые
									проверяют, как работает программа или приложение. Они ищут
									ошибки, смотрят, чтобы программа делала именно то, что
									задумано, защищают продукт от хакеров, проверяют, как
									приложение работает на разных устройствах и в разных
									операционных системах.
								</p>
							</div>
						</div>
						<div class='card'>
							<div class='content'>
								<div class='icon'>
									<img src={pubu} />
								</div>
								<div class='title'>Publisher</div>
								<p>
									Издатель компьютерных игр. Компания, издающая компьютерные
									игры, разработанные внутри компании или отдельными компаниями,
									занимающимися разработкой компьютерных игр.
								</p>
							</div>
						</div>
						<div class='card'>
							<div class='content'>
								<div class='icon'>
									<img src={joystick} />
								</div>
								<div class='title'> Game Development </div>
								<p>
									Геймдев (GameDev, от английского games development —
									«разработка игр») — процесс создания игры: от разработки и
									дизайна до выпуска на рынок. Это могут быть игры для мобильных
									телефонов, консолей, компьютеров или других гаджетов.
								</p>
							</div>
						</div>

						<div class='card'>
							<div class='content'>
								<div class='icon'>
									<img src={design} />
								</div>
								<div class='title'> 3D/2D Design </div>
								<p>
									2D и 3D-графика — два принципиально разных направления в
									графическом дизайне. Они имеют отношение не только к
									искусству. Также двухмерные и трёхмерные изображения помогают
									делать интерфейсы более дружелюбными и визуализировать научные
									данные.
								</p>
							</div>
						</div>
						<div class='card'>
							<div class='content'>
								<div class='icon'>
									<img src={market} />
								</div>
								<div class='title'> Marketing </div>
								<p>
									маркетинг — это продвижение продуктов. Главные задачи
									маркетинга — понять, чего хотят потребители, как удовлетворить
									их потребности, и продать им продукт, чтобы получить прибыль.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Infomore1