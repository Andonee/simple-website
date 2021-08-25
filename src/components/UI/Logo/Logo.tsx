import logo from '../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<NavLink exact to='/'>
			<img src={logo} alt='Company logo' />
		</NavLink>
	)
}

export default Logo
