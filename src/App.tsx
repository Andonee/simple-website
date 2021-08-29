import './App.css'

import { useEffect } from 'react'

import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Contact, Home, NotFound, Post, Posts } from './pages'
import Footer from './components/Footer/Footer'
import { ScrollToTop } from './utils'
import { fetchPosts } from './store/posts/postsActions'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from './store/posts/postsReducerTypes'

const getPosts = (state: StoreType) => state.data

function App() {
	const dispatch = useDispatch()
	const posts = useSelector(getPosts)

	console.log(posts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])
	return (
		<Router>
			<ScrollToTop />
			<div className='App'>
				<Navbar />
				{posts.length ? (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/articles' component={Posts} />
						<Route exact path={`/articles/:id`} component={Post} />
						<Route exact path='/contact' component={Contact} />
						<Route exact component={NotFound} />
					</Switch>
				) : (
					<div
						style={{
							fontSize: '2rem',
							textAlign: 'center',
							marginTop: '50px',
						}}
					>
						There is nothing to show here :(
					</div>
				)}
				<Footer />
			</div>
		</Router>
	)
}

export default App
