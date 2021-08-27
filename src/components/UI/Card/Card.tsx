import './Card.scss'

type CardProps = {
	post: {
		title: string
		id: string
	}
	img: string
}

const Card = ({ post, img }: CardProps) => {
	const { title, id } = post
	return (
		<div className='card'>
			<img src={img} alt={title} className='card__img' />
			<p>{title}</p>
			<button id={id} className='card__button'>
				<i className={`far fa-heart`}></i>
			</button>
		</div>
	)
}

export default Card
