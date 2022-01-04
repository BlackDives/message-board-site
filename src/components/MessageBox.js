import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const MessageBox = ({ message, name, date }) => {
    return (
        <Flex
            flexDirection={'column'}
            border={'2px solid'}
            borderColor={'textDark'}
            borderRadius={'2xl'}
            padding={5}
        >
            <Text my={1}>{message}</Text>
            <Text my={1}>{`- ${name}`}</Text>
            <Text>{date}</Text>
        </Flex>
    )
}

export default MessageBox
