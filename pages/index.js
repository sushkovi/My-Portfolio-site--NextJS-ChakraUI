import {
	Box,
	Link,
	Button,
	Container,
	Heading,
	Image,
	Text,
	useColorModeValue,
	List,
	ListItem,
	Icon,
} from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaTelegram, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Page = () => {
	return (
		<Layout title='Home'>
			<Container>
				<Box>
					<Image
						src='/images/cover.jpeg'
						alt='Cover'
						borderRadius='lg'
						mt={4}
					/>
				</Box>
				<Heading
					as='h1'
					size='md'
					borderRadius='lg'
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
					p={3}
					mt={4}
					mb={6}
					align='center'
					fontFamily='M PLUS Rounded 1c, sans-serif'
				>
					Hello I&apos;m Front-end developer in Minsk
				</Heading>
				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as='h2' size='xl' variant='page-title'>
							Sushko Vlad
						</Heading>
						<Box display='inline-flex' gap={1}>
							<Text>Digital Samurai </Text>
							<Text color='red.600'>侍</Text>
						</Box>
					</Box>
					<Box
						flexShrink={0}
						mt={{ base: 4, md: 0 }}
						ml={{ md: 6 }}
						align='center'
					>
						<Image
							borderColor='whiteAlpha.200'
							borderWidth={3}
							borderStyle='solid'
							maxW='100px'
							display='inline-block'
							borderRadius='full'
							src='/images/sushkov2.jpeg'
							alt='Profile image'
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Work
					</Heading>
					<Paragraph>
						Welcome to my site made with{' '}
						<Link href='https://nextjs.org/' target='_blank'>
							Next.js
						</Link>{' '}
						(react framework) and
						<Link href='https://chakra-ui.com/' target='_blank'>
							{' '}
							Chakra-UI{' '}
						</Link>
						(components library). My main tech stack is React / Redux /
						TypeScript. This site also supports PWA technology.
					</Paragraph>
					<Box align='center' my={4}>
						<NextLink href='/soon'>
							<Button rightIcon={<ChevronRightIcon />} colorScheme='telegram'>
								My Portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Hard Skills
					</Heading>
					<Paragraph>
						React / React Native / Redux / GraphQL / SPA/ PWA / TypeScript /
						HTML / CSS / JS / Git / GitHub / REST API / Basic skills in Java /
						Basic skills in PHP / Basic skill in C#
					</Paragraph>
				</Section>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Soft Skills
					</Heading>
					<Paragraph>
						Communication / Self-management / Teamwork / Negotiation and
						Conflict Resolution / Flexibility / Responsibility
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as='h3' variant='section-title'>
						Links
					</Heading>
					<List>
						<ListItem>
							<Link href='tel:+375293635845' target='_blank'>
								<Button
									variant='ghost'
									colorScheme='telegram'
									leftIcon={<Icon as={FaPhoneAlt} />}
								>
									+375 (29) 363-58-45
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='mailto:works.sushko@gmail.com' target='_blank'>
								<Button
									variant='ghost'
									colorScheme='telegram'
									leftIcon={<Icon as={MdMail} />}
								>
									works.sushko@gmail.com
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://github.com/sushkovi' target='_blank'>
								<Button
									variant='ghost'
									colorScheme='telegram'
									leftIcon={<Icon as={FaGithub} />}
								>
									@sushkovi
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://t.me/sushko_vlad' target='_blank'>
								<Button
									variant='ghost'
									colorScheme='telegram'
									leftIcon={<Icon as={FaTelegram} />}
								>
									@sushko_vlad
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href='https://www.linkedin.com/in/vladsushko/'
								target='_blank'
							>
								<Button
									variant='ghost'
									colorScheme='telegram'
									leftIcon={<Icon as={FaLinkedin} />}
								>
									@vladsushko
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
