import './App.css'

import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Contact, Favourites, Home, NotFound, Post, Posts } from './pages'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/favourites' component={Favourites} />
					<Route exact path='/articles' component={Posts} />
					<Route exact path={`/articles/:id`} component={Post} />
					<Route exact path='/contact' component={Contact} />
					<Route exact component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
