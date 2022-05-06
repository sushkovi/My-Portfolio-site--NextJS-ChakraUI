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

const Soon = () => {
	return (
		<Container display='flex' alignItems='center' flexDirection='column'>
			<Image src='/images/soon.png' alt='soonImg' maxW='300px' />
			<Heading as='h1'>COMING SOON</Heading>
			<Text>This page coming soon</Text>
			<Divider my={6} />
			<Box my={6} align='center'>
				<NextLink href='/'>
					<Button colorScheme='teal'>Return to Home</Button>
				</NextLink>
			</Box>
		</Container>
	);
};

export default Soon;
