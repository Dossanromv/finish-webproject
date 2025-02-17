import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/LOGO.png'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<div className='StarPlayer__navbar'>
			<div className='StarPlayer__navbar-links'>
				<div className='StarPlayer__navbar-links_logo'>
					<img src={logo} />
				</div>
				<div className='StarPlayer__navbar-links_container'>
					<p>
						<a href='#home' className='StarPlayer__navbar-text'>
							Home
						</a>
					</p>
					<p>
						<a href='#about' className='StarPlayer__navbar-text'>
							About project
						</a>
					</p>
					{/* <p>
						<a href='#contact' className='StarPlayer__navbar-text'>
							Contact
						</a>
					</p>
					<p>
						<a href='#support' className='StarPlayer__navbar-text'>
							Support
						</a>
					</p> */}
				</div>
			</div>

			<div className='StarPlayer__navbar-menu'>
				{toggleMenu ? (
					<RiCloseLine
						color='#fff'
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color='#fff'
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className='StarPlayer__navbar-menu_container scale-up-center'>
						<div className='StarPlayer__navbar-menu_container-links'>
							<p>
								<a href='#home'>Home</a>
							</p>
							<p>
								<a href='#about'>About us</a>
							</p>
							<p>
								<a href='#contact'>Contact</a>
							</p>
							<p>
								<a href='#support'>Support</a>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
