import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Logo from './logo';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');

	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				p={2}
				bg={active ? 'whiteBlue' : undefined}
				color={active ? '#202023' : inactiveColor}
				target={target}
				{...props}
				borderRadius='lg'
			>
				{children}
			</Link>
		</NextLink>
	);
};
const Navbar = (props) => {
	const { path } = props;
	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('#ffffff40', '#20202380')}
			style={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
			{...props}
		>
			<Container
				display='flex'
				p={2}
				maxW='container.md'
				wrap='wrap'
				justifyContent='space-between'
			>
				<Flex align='center' mr={5}>
					<Heading as='h1' size='lg' letterSpacing='tighter'>
						<Logo />
					</Heading>
				</Flex>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					align='center'
					flexGrow={1}
					mt={{ base: 4, mnd: 0 }}
				>
					<LinkItem href='/' path={path}>
						Home
					</LinkItem>
					<LinkItem href='/soon' path={path}>
						Works
					</LinkItem>
					<LinkItem
						href='https://github.com/sushkovi'
						path={path}
						target='_blank'
						display='inline-flex'
						alignItems='center'
						style={{ gap: 4 }}
						pl={2}
					>
						<FaGithub />
						GitHub
					</LinkItem>
				</Stack>
				<Box flex={1} align='right'>
					<ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='outline'
								aria-label='Options'
							/>
							<MenuList>
								<NextLink href='/'>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href='/soon'>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
								<MenuItem
									target='_blank'
									as={Link}
									href='https://github.com/sushkovi'
								>
									GitHub
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
