import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

const Main = ({ children, router }) => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='Sushko Vlad - Front End developer in Minsk'
				/>
				<meta name='author' content='Vlad Sushko' />
				<meta name='author' content='sushkovi' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<meta name='twitter:title' content='Vlad Sushko' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@MrCoobik' />
				<meta name='twitter:creator' content='@MrCoobik' />
				<meta
					name='twitter:image'
					content='https://sushkovi.vercel.app/cover.jpeg'
				/>
				<meta property='og:site_name' content='Vlad Sushko' />
				<meta name='og:title' content='Vlad Sushko' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://sushkovi.vercel.app/cover.jpeg'
				/>
			</Head>
			<Navbar path={router.asPath} />
			<Container maxW='container.md' pt={14}>
				{children}
			</Container>
		</Box>
	);
};

export default Main;
