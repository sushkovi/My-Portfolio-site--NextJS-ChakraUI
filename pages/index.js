import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Text,
	useColorModeValue,
	SimpleGrid,
	List,
	ListItem,
	Icon,
} from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
const Page = () => {
	return (
		<Layout>
			<Container>
				<Box>
					<Image
						src='/images/cover.jpeg'
						alt='Cover'
						borderRadius='lg'
						mt={4}
					/>
					<Image src='/images/cover.jpg' alt='Cover' borderRadius='lg' mt={4} />
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
						<Text>Digital Craftzman </Text>
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
							src='/images/sushko.jpg'
							alt='Profile image'
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Work
					</Heading>
					<Paragraph>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
						voluptatum maiores nisi ratione modi beatae placeat aspernatur
						consequatur, sint ab porro sit quae repudiandae suscipit veniam
						consequuntur doloribus. Natus, aspernatur. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Facere fugit magni consequuntur
						facilis, excepturi tempora saepe dignissimos aliquid voluptatum
						repudiandae. Vel, ratione atque! Tenetur beatae magni quidem,
						asperiores dolores possimus.
					</Paragraph>
					<Box align='center' my={4}>
						<NextLink href='/works' passHref>
							<Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
								My Portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as='h3' variant='section-title'>
						Bio
					</Heading>
					<BioSection>
						<BioYear>1994</BioYear>
						Born in Minsk
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as='h3' variant='section-title'>
						Links
					</Heading>
					<List>
						<SimpleGrid>
							<ListItem>
								<Link
									href='https://github.com/sushkovi'
									target='_blank'
									passHref
								>
									<Button
										variant='ghost'
										colorScheme='teal'
										leftIcon={<Icon as={FaGithub} />}
									>
										@sushkovi
									</Button>
								</Link>
							</ListItem>
							<ListItem>
								<Link href='https://t.me/sushko_vlad' target='_blank' passHref>
									<Button
										variant='ghost'
										colorScheme='teal'
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
									passHref
								>
									<Button
										variant='ghost'
										colorScheme='teal'
										leftIcon={<Icon as={FaLinkedin} />}
									>
										@vladsushko
									</Button>
								</Link>
							</ListItem>
						</SimpleGrid>
					</List>
				</Section>
			</Container>
		</Layout>
	);
};
export default Page;
