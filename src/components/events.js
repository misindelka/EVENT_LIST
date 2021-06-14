import * as React from 'react';
import { Button, Grid } from '@chakra-ui/react';

import { Event } from './event';

const initialEventsValue = [
	{
		id: 1,
		name: 'name',
		surname: 'surname',
		desc: 'event',
		img: 'img',
	},
];
export const Events = () => {
	const [events, setEvensts] = React.useState(initialEventsValue);

	return (
		<Grid
			mt="3"
			gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
			{events.map((event) => (
				<Event key={event.id} event={event} />
			))}
		</Grid>
	);
};
