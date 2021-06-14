import * as React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export const Event = ({ event }) => {
	return (
		<Box
			d="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			border="1px"
			borderRadius="lg"
			overflow="hidden"
			shadow="2"
			m="3"
			pl="5"
			pr="5"
			p="10">
			<Box overflow="hidden">
				<Image
					src={event.img}
					transition="transform .2s ease-out"
					_groupHover={{ transform: 'scale(1.1)' }}
				/>
			</Box>

			<Text fontWeight="bold" fontSize="20px">
				{event.name} {event.surname}
			</Text>
			<Text fontSize="16px">date</Text>
			<Text fontSize="12px">{event.desc}</Text>
		</Box>
	);
};
