import Link from 'next/link';
import { Image, Text, useColorModeValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

const LogoBox = styled.span`˝
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;
	img {
		transition: 200ms ease;
	}
	&:hover img{
		transform: scale(1.1);
	}

`;

const Logo = () => {
	const samuraiLogo = `/images/samurai${useColorModeValue('', '-dark')}.svg`;
	return (
		<Link href='/'>
			<a>
				<LogoBox>
					<Image src={samuraiLogo} alt='samuraiLogo' width={7} height={7} />
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='M PLUS Rounded 1c, sans-serif'
						fontWeight='bold'
						ml={2}
					>
						Sushko Vlad
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
