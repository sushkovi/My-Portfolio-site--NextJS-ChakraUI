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

const NotFound = () => {
	return (
		<Container
			display='flex'
			alignItems='center'
			flexDirection='column'
			title='404'
		>
			<Image src='/images/notfound.png' alt='notfoundImg' maxW='300px' />
			<Heading as='h1'>404 | Not Found</Heading>
			<Text>This page you&apos;re looking for was not found.</Text>
			<Divider my={6} />
			<Box my={6} align='center'>
				<NextLink href='/'>
					<Button colorScheme='teal'>Return to Home</Button>
				</NextLink>
			</Box>
		</Container>
	);
};

export default NotFound;
