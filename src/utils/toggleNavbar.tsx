const toggleNavbar = () => {
	if (window.innerWidth > 768) return

	const burger = document.querySelector('.navbar__burger')
	const nav = document.querySelector('.nav')
	const links = document.querySelectorAll('.nav__links')

	console.log(links)

	nav?.classList.toggle('nav--active')
	links.forEach((link: any, idx: number) => {
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 5 + 0.5}s`
		}
	})

	burger?.classList.toggle('toggle')
}

export default toggleNavbar
