import './Card.scss'

import React from 'react'
import { useHistory } from 'react-router-dom'

type CardProps = {
	post: {
		title: string
		id: string
	}
	img: string
}

const Card = ({ post, img }: CardProps) => {
	const history = useHistory()

	const { title, id } = post

	const onCardClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		history.push(`/articles/${id}`)
	}

	return (
		<div className='card' onClick={onCardClick}>
			<img src={img} alt={title} className='card__img' />
			<p>{title}</p>
			<button id={id} className='card__button'>
				<i className={`far fa-heart`}></i>
			</button>
		</div>
	)
}

export default Card
