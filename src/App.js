import React from 'react';
import './App.css';


import { Header, Footer, Filterb, Information} from './containers';
import { Navbar, Features, Brand, } from './components';

const App = () => {
  return (
		<div className='App'>
			<div className='Head_bg'>
				<Navbar />
				<Header />
				<Filterb />
			</div>
			<Brand />
			<Information />
			<Filterb />
			<Features />
			<Footer />
		</div>
	)
}


export default App