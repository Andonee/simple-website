import './Navbar.scss'

import { toggleNavbar } from '../../utils'

import { Logo } from '../UI'
import Nav from './Nav/Nav'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Logo />
			<Nav />
			<div className='navbar__burger' onClick={toggleNavbar}>
				<div className='navbar__burger--line1'></div>
				<div className='navbar__burger--line2'></div>
				<div className='navbar__burger--line3'></div>
			</div>
		</nav>
	)
}

export default Navbar
