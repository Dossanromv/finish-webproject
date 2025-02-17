import React from 'react'
import './infotext.css'

const Infotext = () => {
  return (
		<div className='StarPlayer_all-text'>
			<div className='StarPlayer_main-text'>
				<h1>Игровой разработчик</h1>
			</div>

			<div
				className='StarPlayer_texts'
				data-aos='fade-up'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				<div className='StarPlayer_text-one'>
					<p>
						Наглядный пример игры, созданной на Unity, которая поддерживает
						разные устройства, — Genshin Impact, успешный мультиплатформенный
						проект китайской студии miHoYo Limited. Более популярной стала ее
						мобильная версия, но пользователи могут войти в аккаунт, например, с
						компьютера и продолжить играть с того же момента, на котором
						остановились в мобильной версии. Кроме Genshin Impact, на Unity
						созданы такие известные проекты, как Hearthstone, Cuphead, Pokemon
						GO и многие другие.
					</p>
					<div className='StarPlayer_line-text' />
				</div>

				<div className='StarPlayer_text-two'>
					<p>
						Основные требования к разработчику игр Для этого ему требуется
						знание особенностей жанра, алгоритмов и структур данных, английского
						языка, языка программирования движка, программ 3D-моделирования и
						систем контроля. Дополнительным является понимание
						физико-математических основ.
					</p>
					<div className='StarPlayer_line-text' />
				</div>

				<div className='StarPlayer_text-three'>
					<p>
						куда можно опубликовать игру? примерно я буду опубликовать именно в
						Steam, Но чтобы опубликовать игры требуется оплата примерно 100$
					</p>
					<div className='StarPlayer_line-text' />
				</div>
			</div>
		</div>
	)
}

export default Infotext
