import * as React from 'react';
import { Button, Grid, useDisclosure, Text } from '@chakra-ui/react';

import { Event } from './event';
import { CreateNewEvent } from './createNewEvent';
import { EventDetail } from './eventDetail';

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
	const {
		isOpen: isOpenAddEvent,
		onOpen: onOpenAddEvent,
		onClose: onCloseAddEvent,
	} = useDisclosure();

	const {
		isOpen: isOpenEventDetail,
		onOpen: onOpenEventDetail,
		onClose: onCloseEventDetail,
	} = useDisclosure();

	const handleAddEvent = (newEvent) => {
		newEvent.id = events.length + 1;
		newEvent.date = new Date().toLocaleString() + '';
		setEvensts([...events, newEvent]);
	};

	return (
		<>
			<Text fontWeight="bold" fontSize="20px">
				EVENT LIST
			</Text>
			<Grid
				mt="3"
				gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
				{events.map((event) => (
					<>
						<Event
							key={event.id}
							event={event}
							onOpenDetail={onOpenEventDetail}
						/>
						<EventDetail
							event={event}
							isOpen={isOpenEventDetail}
							onClose={onCloseEventDetail}
						/>
					</>
				))}
				<Button
					border="1px"
					h="50px"
					mt="15%"
					mr="3"
					ml="3"
					onClick={onOpenAddEvent}
					cursor="pointer">
					Add new event
				</Button>
				<CreateNewEvent
					isOpen={isOpenAddEvent}
					onClose={onCloseAddEvent}
					handleAddEvent={handleAddEvent}
				/>
			</Grid>
		</>
	);
};
