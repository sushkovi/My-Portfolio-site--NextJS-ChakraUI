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
import { BioSection, BioYear } from '../components/bio';

import { FaTelegram, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
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
						I am a responsible, fast learner, goal oriented and attention to
						detail person. I respect other people&apos;s opinions, I make
						compromises, but at the same time I know how to defend my point of
						view. I know how to work in a team. No experience in commercial
						activities. I get all my knowledge in the field of Front- end
						myself, learn on the Internet. Also, the goal is to grow into a
						full-fledged FullStack developer. I am currently working on my pet
						project using this stack (MongoDB, Next.js, React.js, Node.js) while
						learning React Native
					</Paragraph>
					<Box align='center' my={4}>
						<NextLink href='/works' passHref>
							<Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
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
						React / Hooks / Redux / HTML / CSS / JS Git / GitHub / REST API /
						Basic skills in Java / SQL / PHP
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
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Work History
					</Heading>
					<BioSection>
						<BioYear>2021.09 - Current</BioYear>
						Senior Media Buyer in MadCat
					</BioSection>
					<BioSection>
						<BioYear>2020.05 - 2021.09</BioYear>
						FullStack Developer in MadCat
					</BioSection>
					<BioSection>
						<BioYear>2019.09 - 2020.05</BioYear>
						Freelance Front-end Developer in Upwork
					</BioSection>
					<BioSection>
						<BioYear>2017.09 - 2019.05</BioYear>
						Инженер-программист в Белорусском государственном педагогическом
						университете имени Максима Танка (БГПУ)
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as='h3' variant='section-title'>
						Links
					</Heading>
					<List>
						<ListItem>
							<Link href='tel:+375293635845' target='_blank' passHref>
								<Button
									variant='ghost'
									colorScheme='teal'
									leftIcon={<Icon as={FaPhoneAlt} />}
								>
									+375 (29) 363-58-45
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href='mailto:works.sushko@gmail.com'
								target='_blank'
								passHref
							>
								<Button
									variant='ghost'
									colorScheme='teal'
									leftIcon={<Icon as={MdMail} />}
								>
									works.sushko@gmail.com
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://github.com/sushkovi' target='_blank' passHref>
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
					</List>
				</Section>
			</Container>
		</Layout>
	);
};
export default Page;
