import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import theme from '../libs/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';

const Website = ({ Component, pageProps, router, props }) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router} {...props}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
};
export default Website;
