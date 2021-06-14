import * as React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export const Event = ({ event, onOpenDetail }) => {
	return (
		<Box
			cursor="pointer"
			onClick={() => onOpenDetail()}
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
			<Text fontWeight="bold" fontSize="20px">
				{event.desc}
			</Text>

			<Text fontSize="14px">
				{event.name} {event.surname}
			</Text>
			<Text fontSize="14px">{event.adress}</Text>
		</Box>
	);
};
