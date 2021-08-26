import './Title.scss'

type titleType = {
	title: string
	size?: number
}

const Title = ({ title, size = 1.6 }: titleType) => {
	return (
		<h2 style={{ fontSize: `${size}rem` }} className='title'>
			{title}
		</h2>
	)
}

export default Title
