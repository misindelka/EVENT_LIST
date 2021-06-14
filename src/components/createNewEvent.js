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
	img: '',
};

export const CreateNewEvent = ({ onClose, isOpen, handleAddEvent }) => {
	const [newEvent, setEvent] = React.useState(intialValues);
	const [image, setImage] = React.useState('');

	const handleCreateEvent = (e) => {
		const { name, value } = e.target;
		setEvent({ ...newEvent, [name]: value });
	};

	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setImage(base64);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		handleAddEvent(newEvent, image);
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
							type="text"
							name="desc"
							variant="flushed"
							value={newEvent.desc}
							onChange={handleCreateEvent}
							placeholder="Event description"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							type="text"
							name="name"
							variant="flushed"
							value={newEvent.name}
							onChange={handleCreateEvent}
							placeholder="Name"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							type="text"
							name="surname"
							variant="flushed"
							value={newEvent.surname}
							onChange={handleCreateEvent}
							placeholder="Surname"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							type="text"
							name="adress"
							variant="flushed"
							value={newEvent.adress}
							onChange={handleCreateEvent}
							placeholder="Adress"
						/>
					</FormControl>

					<FormControl mt={4}>
						<Input
							type="file"
							name="img"
							variant="flushed"
							value={newEvent.img}
							onChange={(e) => uploadImage(e)}
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
