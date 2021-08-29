import { Title, Card } from '../../../components/UI'
import AboutUs from '../AboutUs/AboutUs'
import './RecentPosts.scss'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../store/posts/postsReducerTypes'
import { SuccessType } from '../../../store/posts/postsActionsTypes'

const getPosts = (state: StoreType) => state.data

const RecentPosts = () => {
	const posts = useSelector(getPosts)
	return (
		<div className='recentPosts'>
			<div className='recentPosts__title'>
				<Title title='Recent posts' />
			</div>

			<div className='recentPosts__posts'>
				{posts.slice(4, 10).map((post: SuccessType) => {
					return (
						<Card
							key={post.id}
							img='https://via.placeholder.com/400x250'
							post={{
								title: post.title,
								id: post.id,
							}}
						/>
					)
				})}
			</div>
			<div className='recentPosts__aboutUs'>
				<AboutUs />
			</div>
		</div>
	)
}

export default RecentPosts
