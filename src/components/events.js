import * as React from 'react';
import { Button, Grid, useDisclosure, Text, Box } from '@chakra-ui/react';

import { Event } from './event';
import { CreateNewEvent } from './createNewEvent';
import { EventDetail } from './eventDetail';

const inititialState = [
	{
		id: 1,
		name: 'Michal',
		surname: 'Šindelka',
		adress: 'Kosice',
		desc: 'Himalaye',
		img:
			'https://3y5rx2.5gcdn.net/ext/resize_1440,q_70,auto?src=https%3A%2F%2Fbubo.sk%2Fuploads%2Fusr%2F10918%2Fblogy%2Fhimalaje-pouzitelne%2Fnanga-reflection.JPG%3Fmd%3D38bc351ffd3bf96f20ede20b43c33467',
		date: new Date().toLocaleString() + '',
	},
];
export const Events = () => {
	const [events, setEvensts] = React.useState(inititialState);

	const eventsByDate = events.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);

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

	const handleAddEvent = (newEvent, image) => {
		newEvent.id = events.length + 1;
		newEvent.date = new Date().toLocaleString() + '';
		newEvent.img = image;
		setEvensts([...events, newEvent]);
	};

	return (
		<Box p="2">
			<Box d="flex" flexDirection="row" justifyContent="space-around">
				<Text fontWeight="bold" fontSize="30px">
					Event List
				</Text>
				<Button border="1px" h="50px" onClick={onOpenAddEvent} cursor="pointer">
					Add new event
				</Button>
			</Box>

			<Grid
				mt="3"
				gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
				{eventsByDate?.map((event) => (
					<div key={event.id}>
						<Event event={event} onOpenDetail={onOpenEventDetail} />
						<EventDetail
							event={event}
							isOpen={isOpenEventDetail}
							onClose={onCloseEventDetail}
						/>
					</div>
				))}

				<CreateNewEvent
					isOpen={isOpenAddEvent}
					onClose={onCloseAddEvent}
					handleAddEvent={handleAddEvent}
				/>
			</Grid>
		</Box>
	);
};
