import './Title.scss'

type TitleProps = {
	title: string
	size?: number
}

const Title = ({ title, size = 1.6 }: TitleProps) => {
	return (
		<h2 style={{ fontSize: `${size}rem` }} className='title'>
			{title}
		</h2>
	)
}

export default Title
