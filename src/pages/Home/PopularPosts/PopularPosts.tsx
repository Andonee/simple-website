import './PopularPosts.scss'

import { Title, Card } from '../../../components/UI'
import Stats from '../Stats/Stats'

const PopularPosts = () => {
	return (
		<div className='popularPosts'>
			<Title title='Popular Posts' />
			<div className='popularPosts__posts'>
				<Card
					img='https://via.placeholder.com/400x250'
					post={{ title: 'some title', id: '5' }}
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					post={{ title: 'some title', id: '5' }}
				/>
				<Card
					img='https://via.placeholder.com/400x250'
					post={{ title: 'some title', id: '5' }}
				/>
			</div>

			<div className='popularPosts__stats'>
				<Stats stats='550' text='Total Articles' />
				<Stats stats='780' text='Total Posts' />
				<Stats stats='940' text='Total Comments' />
				<Stats stats='1 M' text='Possibilities' />
			</div>
		</div>
	)
}

export default PopularPosts
