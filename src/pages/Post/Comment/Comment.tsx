import './Comment.scss'

type CommentProps = {
	content: string
	author: string
}

const Comment = ({ content, author }: CommentProps) => {
	return (
		<div className='comment'>
			<p className='comment__content'>{content}</p>
			<p className='comment__author'>{author}</p>
		</div>
	)
}

export default Comment
