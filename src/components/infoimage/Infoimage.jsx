import React from 'react'
import './infoimage.css'
import ImageGameLet from '../../assets/lethal.png'
import Deadcell from '../../assets/deadcover.png'

const Infoimage = () => {
  return (
		<div className='Image_all'>
			<div className='StarPlayer__header-image3'>
				<img src={ImageGameLet} />
			</div>
			<div className="StarPlayer__header-image2">
				<img src={Deadcell} />
			</div>
		</div>
	)
}

export default Infoimage
