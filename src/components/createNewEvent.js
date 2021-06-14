import * as React from 'react';
import {
	Button,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

const intialValues = {
	desc: '',
	name: '',
	surname: '',
	adress: '',
};

export const CreateNewEvent = ({ onClose, isOpen, handleAddEvent }) => {
	const [newEvent, setEvent] = React.useState(intialValues);

	const handleCreateEvent = (e) => {
		const { name, value } = e.target;
		setEvent({ ...newEvent, [name]: value });
	};
	const handleSubmitForm = (e) => {
		e.preventDefault();
		handleAddEvent(newEvent);
		setEvent(intialValues);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create new event</ModalHeader>
				<ModalCloseButton />

				<ModalBody pb={6}>
					<FormControl mt={4}>
						<Input
							name="desc"
							variant="flushed"
							value={newEvent.desc}
							onChange={handleCreateEvent}
							placeholder="Event description"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							name="name"
							variant="flushed"
							value={newEvent.name}
							onChange={handleCreateEvent}
							placeholder="Name"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							name="surname"
							variant="flushed"
							value={newEvent.surname}
							onChange={handleCreateEvent}
							placeholder="Surname"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							name="adress"
							variant="flushed"
							value={newEvent.adress}
							onChange={handleCreateEvent}
							placeholder="Adress"
						/>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button onClick={handleSubmitForm} mr={3}>
						Add event
					</Button>
					<Button onClick={onClose}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
