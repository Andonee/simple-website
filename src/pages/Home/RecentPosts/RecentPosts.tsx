import { Title, Card } from '../../../components/UI'
import AboutUs from '../AboutUs/AboutUs'
import './RecentPosts.scss'

const RecentPosts = () => {
	return (
		<div className='recentPosts'>
			<div className='recentPosts__title'>
				<Title title='Recent posts' />
			</div>

			<div className='recentPosts__posts'>
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
			<div className='recentPosts__aboutUs'>
				<AboutUs />
			</div>
		</div>
	)
}

export default RecentPosts
