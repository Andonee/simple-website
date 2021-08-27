import './Post.scss'

import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Button, Image, Input, Title } from '../../components/UI'
import Comment from './Comment/Comment'

type PostType = {
	id: string
}

const Post = ({ match }: RouteComponentProps<PostType>) => {
	useEffect(() => {
		console.log(match.params.id)
	})
	return (
		<div className='post'>
			<div className='post__title'>
				<Title title='Some title to display, maybe a little longer' />
			</div>
			<div className='post__img'>
				<Image src='https://via.placeholder.com/600/d32776' alt='title' />
			</div>
			<div className='post__content'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui
				voluptate quia dolores pariatur necessitatibus vero nam et at! Quibusdam
				laborum ab libero. Ipsum debitis optio voluptas aperiam quae sit!
			</div>
			<div className='post__comments'>
				<p>Comments</p>
				<Comment />
				<Comment />
				<Comment />
			</div>

			<form className='post__form'>
				<Input
					type='textarea'
					value=''
					placeholder='Your comment'
					name='comment'
				/>
				<Input
					input='textarea'
					type='text'
					value=''
					placeholder='name'
					name='author'
				/>
				<Input
					type='email'
					value=''
					placeholder='email'
					name='email'
				/>
				
				<Button>
					Add comment
				</Button>
			</form>
		</div>
	)
}

export default Post
