import './Nav.scss'

import { toggleNavbar } from '../../../utils'

import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<ul className='nav'>
			<li className='nav__links'>
				<NavLink
					exact
					to='/'
					activeClassName='nav--active'
					onClick={toggleNavbar}
				>
					Home
				</NavLink>
			</li>
			<li className='nav__links'>
				<NavLink
					to='/articles'
					activeClassName='nav--active'
					onClick={toggleNavbar}
				>
					Articles
				</NavLink>
			</li>
			<li className='nav__links'>
				<NavLink
					to='/favourites'
					activeClassName='nav--active'
					onClick={toggleNavbar}
				>
					Favourites
				</NavLink>
			</li>
			<li className='nav__links'>
				<NavLink
					to='/contact'
					activeClassName='nav--active'
					onClick={toggleNavbar}
				>
					Contact
				</NavLink>
			</li>
		</ul>
	)
}

export default Nav
