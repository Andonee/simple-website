import './Input.scss'

import React from 'react'

type InputProps = {
	type: string
	value: string
	placeholder: string
	input?: string
	onChange?: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void
	name: string
	required?: boolean
}

const Input = ({
	type,
	value,
	placeholder,
	input,
	onChange,
	name,
	required = false,
}: InputProps) => {
	return (
		<>
			{input === 'textarea' ? (
				<textarea
					data-test='component-input-textarea'
					onChange={onChange}
					className='input'
					rows={5}
					placeholder={placeholder}
					name={name}
					value={value}
					required={required}
				/>
			) : (
				<input
					data-test='component-input-input'
					onChange={onChange}
					className='input'
					type={type}
					value={value}
					placeholder={placeholder}
					name={name}
					required={required}
				/>
			)}
		</>
	)
}

export default Input
