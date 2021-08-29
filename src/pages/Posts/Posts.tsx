import './Posts.scss'

import React from 'react'
import { useState } from 'react'

import { Input, Card, Button } from '../../components/UI'
import { useSelector } from 'react-redux'
import { StoreType } from '../../store/posts/postsReducerTypes'
import { SuccessType } from '../../store/posts/postsActionsTypes'

const getPosts = (state: StoreType) => state.data

const Posts = () => {
	const [filterPhrase, setFilterPhrase] = useState('')

	const posts = useSelector(getPosts)

	const filterPostsHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFilterPhrase(e.target.value.toLowerCase())
	}

	const onFilterClearHandler = () => {
		setFilterPhrase('')
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
				<Button font={1} onClick={onFilterClearHandler}>
					CLEAR
				</Button>
			</div>
			<div className='posts__cards'>
				{posts
					.filter((post: SuccessType) => post.title.includes(filterPhrase))
					.map((post: SuccessType) => {
						return (
							<Card
								img='https://via.placeholder.com/400x250'
								post={{ title: post.title, id: post.id }}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default Posts
