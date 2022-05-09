import NextLink from 'next/link';

import {
	Box,
	Heading,
	Text,
	Container,
	Divider,
	Button,
	Image,
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const Soon = () => {
	return (
		<Layout title='Soon'>
			<Container display='flex' alignItems='center' flexDirection='column'>
				<Image src='/images/soon.png' alt='soonImg' maxW='300px' />
				<Heading as='h1'>COMING SOON</Heading>
				<Text>This page coming soon</Text>
				<Divider my={6} />
				<Box my={6} align='center'>
					<NextLink href='/'>
						<Button colorScheme='telegram'>Return to Home</Button>
					</NextLink>
				</Box>
			</Container>
		</Layout>
	);
};

export default Soon;
