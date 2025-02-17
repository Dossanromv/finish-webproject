import React from 'react'
import './footer.css'

const footer = () => {
  return (
		<div>
			<div className='StarPlayer__footer section__padding'>
				<div className='StarPlayer__Line-2' />

				<div className='StarPlayer__footer-links'>
					<div className='StarPlayer__footer-links_logo'>
						<p>
							Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
						</p>
					</div>

					<div className='StarPlayer__footer-links_div'>
						<h4>Links</h4>
						<p>Overons</p>
						<p>Social Media</p>
						<p>Counters</p>
						<p>Contact</p>
					</div>
					<div className='StarPlayer__footer-links_div'>
						<h4>Company</h4>
						<p>Terms & Conditions </p>
						<p>Privacy Policy</p>
						<p>Contact</p>
					</div>
					<div className='StarPlayer__footer-links_div'>
						<h4>Get in touch</h4>
						<p>Crechterwoord K12 182 DK Alknjkcb</p>
						<p>085-132567</p>
						<p>info@payme.net</p>
					</div>
				</div>

				<div className='StarPlayer__footer-copyright'>
					<p>@2025 Project. All rights reserved.</p>
				</div>
			</div>
		</div>
	)
}

export default footer