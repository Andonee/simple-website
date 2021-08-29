import './PopularPosts.scss'

import { Title, Card } from '../../../components/UI'
import Stats from '../Stats/Stats'
import { useSelector } from 'react-redux'
import { StoreType } from '../../../store/posts/postsReducerTypes'
import { SuccessType } from '../../../store/posts/postsActionsTypes'

const getPosts = (state: StoreType) => state.data

const PopularPosts = () => {
	const posts = useSelector(getPosts)
	return (
		<div className='popularPosts'>
			<Title title='Popular Posts' />
			<div className='popularPosts__posts'>
				{posts.slice(0, 3).map((post: SuccessType) => {
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
