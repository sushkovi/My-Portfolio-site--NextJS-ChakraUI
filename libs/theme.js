import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props),
		},
	}),
};

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode('#333', '#C0392B')(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: '"M PLUS Rounded 1c"',
};

const colors = {
	whiteBlue: '#A2D4EC',
};

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const theme = extendTheme({ styles, components, fonts, colors, config });

export default theme;
