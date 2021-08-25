import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

type PostType = {
	id: string
}

const Post = ({ match }: RouteComponentProps<PostType>) => {
	useEffect(() => {
		console.log(match.params.id)
	})
	return <div>Post PAGE</div>
}

export default Post
