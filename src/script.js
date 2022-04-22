particlesJS('particles-js', {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 700
			}
		},
		color: {
			value: '#FFD700'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#f05e1b '
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
				width: 100,
				height: 100
			}
		},
		
		opacity: {
			value: 0.2,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: true,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			}
		},
		modes: {
			'repulse' : {
				distance: 75,
				duration: 0.5
			},
			'push' : {
				particles_nb: 3
			}
		}
	},
	retina_detect: true
});