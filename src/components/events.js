import * as React from 'react';

const initialEventsValue = [
	{
		name: 'name',
		surname: 'surname',
		event: 'event',
		img: 'img',
	},
];
export const Events = () => {
	const [events, setEvensts] = React.useState([initialEventsValue]);

	return (
		<div>
			{events.map((event) => (
				<p>{event.name} </p>
			))}
		</div>
	);
};
