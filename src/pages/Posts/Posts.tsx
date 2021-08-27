import './Posts.scss'

import React from 'react'
import { useState } from 'react'

import { Input, Card } from '../../components/UI'

const Posts = () => {
	const [filterPhrase, setFilterPhrase] = useState('')

	const filterPostsHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFilterPhrase(e.target.value.toLowerCase())
	}

	return (
		<div className='posts'>
			<div className='posts__search'>
				<Input
					type='text'
					placeholder='search'
					onChange={filterPostsHandler}
					value={filterPhrase}
					name='filter posts'
				/>
			</div>
			<div className='posts__cards'>
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
		</div>
	)
}

export default Posts
