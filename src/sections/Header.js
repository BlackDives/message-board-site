import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex {...styles.containerStyle}>
            <Text fontSize={'2xl'}>Kam's Message Board</Text>
        </Flex>
    );
};

const styles = {
    containerStyle: {
        width: '100%',
        padding: 10,
    },
};

export default Header;
