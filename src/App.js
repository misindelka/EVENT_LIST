import * as React from 'react';
import { Events } from './components/events';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Events />
		</ChakraProvider>
	);
}
export default App;
