import * as React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export const Event = ({ event, onOpenDetail }) => {
	return (
		<Box
			cursor="pointer"
			maxW="400"
			maxH="400"
			minH="400"
			overflow="hidden"
			role="group"
			onClick={() => onOpenDetail()}
			d="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			border="1px"
			borderRadius="lg"
			shadow="2"
			m="3"
			pl="5"
			pr="5"
			p="2">
			<Image src={event.img} maxH="300" />
			<Text fontWeight="bold" fontSize="20px" pt="2">
				{event.desc}
			</Text>

			<Text fontSize="14px">
				{event.name} {event.surname}
			</Text>
			<Text fontSize="14px">{event.adress}</Text>
		</Box>
	);
};
