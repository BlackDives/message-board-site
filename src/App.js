import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
//sections
import Header from './sections/Header';
import CreateMessage from './sections/CreateMessage';

const App = () => {
    return (
        <Flex
            backgroundColor={'bgDark'}
            color={'textDark'}
            flexDirection={'column'}
        >
            {/*Header*/}
            <Header />
            {/* Message Forum */}
            <CreateMessage />
            {/*Messgaes*/}
            {/* Footer */}
        </Flex>
    );
};

export default App;
