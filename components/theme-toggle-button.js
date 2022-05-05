import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: 'inline-block' }}
				key={useColorModeValue('light', 'dark')}
				animate={{ y: 0, opacity: 1 }}
				exit={{ rotate: 180 }}
				transition={{ duration: 0.3 }}
			>
				<IconButton
					arial-label='Toggle theme'
					colorScheme={useColorModeValue('purple', 'orange')}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
					onClick={toggleColorMode}
				></IconButton>
			</motion.div>
		</AnimatePresence>
	);
};

export default ThemeToggleButton;
