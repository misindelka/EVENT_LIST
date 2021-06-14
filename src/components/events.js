import * as React from 'react';
import { Button, Grid, useDisclosure } from '@chakra-ui/react';

import { Event } from './event';
import { CreateNewEvent } from './createNewEvent';

const inititialState = [
	{
		id: 1,
		name: 'name',
		surname: 'surname',
		adress: 'adress',
		desc: 'event',
		img: 'img',
		date: new Date().toLocaleString() + '',
	},
];
export const Events = () => {
	const [events, setEvensts] = React.useState(inititialState);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleAddEvent = (newEvent) => {
		newEvent.id = events.length + 1;
		newEvent.date = new Date().toLocaleString() + '';
		setEvensts([...events, newEvent]);
	};

	return (
		<Grid
			mt="3"
			gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
			{events.map((event) => (
				<Event key={event.id} event={event} />
			))}
			<Button
				border="1px"
				h="50px"
				mt="15%"
				mr="3"
				ml="3"
				onClick={onOpen}
				cursor="pointer">
				Add new event
			</Button>
			<CreateNewEvent
				isOpen={isOpen}
				onClose={onClose}
				handleAddEvent={handleAddEvent}
			/>
		</Grid>
	);
};
