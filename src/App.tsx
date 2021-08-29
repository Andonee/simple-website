import './App.css'

import { useEffect } from 'react'

import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Contact, Home, NotFound, Post, Posts } from './pages'
import Footer from './components/Footer/Footer'
import { ScrollToTop } from './utils'
import { fetchPosts } from './store/posts/postsActions'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])
	return (
		<Router>
			<ScrollToTop />
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path={`/articles/:id`} component={Post} />
					<Route exact path='/contact' component={Contact} />
					<Route exact component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
