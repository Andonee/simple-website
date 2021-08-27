type ImageProps = {
	src: string
	alt: string
	width?: string
	height?: string
}

const Image = ({ src, alt, width = 'auto', height }: ImageProps) => {
	return <img src={src} alt={alt} style={{ width, height }} />
}

export default Image
