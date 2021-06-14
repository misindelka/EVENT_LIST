import * as React from 'react';

import {
	Box,
	Container,
	Heading,
	Image,
	Text,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

export const EventDetail = ({ event, isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Event Details</ModalHeader>
				<ModalCloseButton />

				<ModalBody pb={6}>
					<Image src={event.img} w="full" h="sm" objectFit="cover" />
					<Container maxWidth="container.md" py="8">
						<Box mb="4">
							<Heading>{event.desc}</Heading>
						</Box>
						<Text fontWeight="bold" fontSize="20px">
							created by: {event.name} {event.surname}
						</Text>
						<Text fontSize="20px"> {event.adress}</Text>
						<Text fontSize="16px">created at: {event.date}</Text>
					</Container>
				</ModalBody>

				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
