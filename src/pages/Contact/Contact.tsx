import './Contact.scss'

import contact from '../../assets/images/contact.jpg'
import { Image } from '../../components/UI'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__img'>
				<Image src={contact} alt='about us' />
			</div>
			<div className='contact__content'>
				Nunc eget tempor enim. Suspendisse dignissim enim turpis, non lobortis
				mauris elementum ut. Fusce vitae massa neque. Curabitur lobortis
				elementum ligula, et vehicula erat condimentum eu. Proin mattis turpis
				ut nibh viverra, at pretium nunc accumsan. Vestibulum ac risus libero.
				<br />
				<br />
				Nunc eget tempor enim. Suspendisse dignissim enim turpis, non lobortis
				mauris elementum ut. Fusce vitae massa neque. Curabitur lobortis
				elementum ligula, et vehicula erat condimentum eu. Proin mattis turpis
				ut nibh viverra, at pretium nunc accumsan. Vestibulum ac risus libero.
			</div>
		</div>
	)
}

export default Contact
