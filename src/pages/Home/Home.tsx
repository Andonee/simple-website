import './Home.scss'

import { useHistory } from 'react-router-dom'

import Jumbo from '../../components/UI/Jumbo/Jumbo'
import PopularPosts from './PopularPosts/PopularPosts'
import RecentPosts from './RecentPosts/RecentPosts'
import { Button } from '../../components/UI'

const Home = () => {
	const history = useHistory()

	const goToAllArticles = () => {
		history.push('/articles')
	}

	return (
		<div className='home'>
			<Jumbo />
			<PopularPosts />
			<RecentPosts />
			<Button onClick={goToAllArticles}>All Posts</Button>
		</div>
	)
}

export default Home
