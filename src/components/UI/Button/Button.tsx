import './Button.scss'

type ButtonProps = {
	font?: number
	onClick: () => void
	children: React.ReactNode
}

const Button = ({ font = 1.4, onClick, children }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			style={{ fontSize: `${font}rem` }}
			className='button'
		>
			{children}
		</button>
	)
}

export default Button
