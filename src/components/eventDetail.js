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
		<Modal size="xl" isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalHeader>Event Details</ModalHeader>
				<ModalCloseButton />

				<ModalBody pb={6}>
					<Image src={event.img} w="xl" h="xl" objectFit="cover" />
					<Container maxWidth="container.md" py="8">
						<Box mb="4">
							<Heading>{event.desc}</Heading>
						</Box>
						created by:
						<Text fontWeight="bold" fontSize="20px">
							{event.name} {event.surname}
						</Text>
						adress:
						<Text fontWeight="bold" fontSize="20px">
							{event.adress}
						</Text>
						created at:
						<Text fontWeight="bold" fontSize="16px">
							{event.date}
						</Text>
					</Container>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
