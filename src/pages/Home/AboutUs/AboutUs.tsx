import './AboutUs.scss'

import { Image, Title } from '../../../components/UI'

const AboutUs = () => {
	return (
		<div className='aboutUs'>
			<div className='aboutUs__title'>
				<Title title='About Us' size={1.4} />
			</div>
			<div className='aboutUs__image'>
				<Image
					src='https://via.placeholder.com/400x250'
					alt='Awesome Travel Blog Team'
				/>
			</div>

			<p className='aboutUs__description'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
				nisl non augue suscipit porta. Proin ut odio vulputate, molestie nisi
				nec, vulputate ante. Ut luctus lacus vitae turpis rhoncus, et feugiat
				enim ultrices. Nullam ex felis, venenatis et risus vel, cursus laoreet
				metus.
				<br />
				<br />
				Morbi tincidunt elit ut risus ullamcorper interdum. Cras magna sem,
				semper ac blandit scelerisque, ultricies vitae tortor. Integer tortor
				sem, iaculis eu ultricies eu, sagittis facilisis massa. Morbi a massa
				sed eros ultricies tempor nec quis felis. Phasellus aliquam a dui sit
				amet malesuada.
			</p>
		</div>
	)
}

export default AboutUs
