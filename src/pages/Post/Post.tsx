import './Post.scss'

import { nanoid } from 'nanoid'

import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Button, Image, Input, Title } from '../../components/UI'
import Comment from './Comment/Comment'

type RouterType = {
	id: string
}

type CommentType = {
	body: string
	email: string
	id: number
	name: string
	postId: number
}

const Post = ({ match }: RouteComponentProps<RouterType>) => {
	const [postComments, setPostComments] = useState<CommentType[]>([])
	const [newComment, setNewComment] = useState({
		comment: {
			name: '',
			email: '',
			body: '',
			id: '',
			postId: '',
		},
		error: '',
	})
	const [postDetails, setPostDetails] = useState({
		data: {
			title: '',
			body: '',
			id: 0,
		},
		error: false,
	})

	const { title, body, id } = postDetails.data

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const commentsResponse = await fetch(
					`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`
				)
				const postResponse = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${match.params.id}`
				)

				if (!commentsResponse.ok || !postResponse.ok)
					throw new Error('Could not get post details')

				const comments = await commentsResponse.json()
				const post = await postResponse.json()
				setPostComments(comments)
				setPostDetails(prevState => ({
					...prevState,
					data: post,
				}))
			} catch (err) {
				console.error(err)
				setPostDetails(prevState => ({
					...prevState,
					error: true,
				}))
			}
		}
		fetchPost()
	}, [match.params.id])

	const inputHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setNewComment(prevState => ({
			...prevState,
			comment: {
				...prevState.comment,
				[e.target.name]: e.target.value,
			},
		}))
	}

	const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()

			if (!newComment.comment.body || !newComment.comment.email) {
				setNewComment(prevState => ({
					...prevState,
					error: 'You need to pass a comment and your email',
				}))
				return
			}

			const createdComment = {
				...newComment.comment,
				postId: id,
				id: nanoid(7),
			}

			const response = await fetch(
				'https://jsonplaceholder.typicode.com/comments',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify(createdComment),
				}
			)

			if (!response.ok) throw new Error()

			const newPost = await response.json()

			const commentsList = [...postComments, newPost]
			setPostComments(commentsList)

			setNewComment({
				error: '',
				comment: {
					name: '',
					email: '',
					body: '',
					id: '',
					postId: '',
				},
			})
		} catch (err) {
			setNewComment(prevState => ({
				...prevState,
				error: 'Your comment could not be saved. Try again',
			}))
		}
	}
	return (
		<div className='post'>
			<div className='post__title'>
				<Title title={title} />
			</div>
			<div className='post__img'>
				<Image src='https://via.placeholder.com/600/d32776' alt='title' />
			</div>
			<div className='post__content'>{body}</div>
			{postDetails.error && (
				<div
					style={{
						fontSize: '1.4rem',
						color: '#d62626',
						textAlign: 'center',
					}}
				>
					Can not show you this awesome post
				</div>
			)}
			<div className='post__comments'>
				<p>Comments</p>
				{postComments.map((comment: CommentType) => {
					return (
						<Comment
							content={comment.body}
							author={comment.email}
							key={comment.id}
						/>
					)
				})}
			</div>

			<form className='post__form' onSubmit={onSubmitHandler}>
				<Input
					input='textarea'
					type='textarea'
					value={newComment.comment.body}
					placeholder='Your comment'
					name='body'
					onChange={inputHandler}
				/>
				<Input
					type='text'
					value={newComment.comment.name}
					placeholder='name'
					name='name'
					onChange={inputHandler}
				/>
				<Input
					type='email'
					value={newComment.comment.email}
					placeholder='email'
					name='email'
					onChange={inputHandler}
				/>

				{newComment.error && (
					<div
						style={{
							fontSize: '1.2rem',
							color: '#d62626',
							textAlign: 'center',
						}}
					>
						{newComment.error}
					</div>
				)}

				<Button>Add comment</Button>
			</form>
		</div>
	)
}

export default Post
