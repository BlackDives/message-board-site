import React, { useState } from 'react';
import {
    Flex,
    Text,
    Button,
    Textarea,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import MessageBox from '../components/MessageBox';

const CreateMessage = () => {
    const [createMessage, setCreateMessage] = useState(false);
    const messages = [
        {
            id: 1,
            name: 'kamron',
            message: 'I am so grateful to be apart of this process.',
            time: '1/4/22',
        },
        {
            id: 2,
            name: 'David Jones',
            message:
                'I am so grateful to be apart of this process. This is a very long message with real text to kind of simulate what would happen if someone said all of this in a textarea. So yeah, take this as is.',
            time: '1/4/22',
        },
    ];

    return (
        <Flex {...styles.container} height={'100vh'}>
            {!createMessage && (
                <Button onClick={() => setCreateMessage(true)}>
                    Create Message
                </Button>
            )}
            {createMessage && (
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={'100%'}
                    height={'50%'}
                >
                    <Textarea size={'lg'} width={'70%'} height={'50%'} />
                    <Button my={3} width={'10%'}>
                        Submit
                    </Button>
                    <Button
                        onClick={() => setCreateMessage(false)}
                        color={'accentDark'}
                        width={'10%'}
                    >
                        Cancel
                    </Button>
                </Flex>
            )}
            {/** Messages */}
            <Flex
                flexDirection={'column'}
                width={'70%'}
                paddingY={10}
                alignItems={'center'}
            >
                <Text
                    fontSize={'3xl'}
                    backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                    backgroundClip="text"
                >
                    Messages
                </Text>
                <UnorderedList display={'flex'} flexDirection={'column'}>
                    {messages.map((data) => (
                        <ListItem listStyleType={'none'} key={data.id} my={3}>
                            <MessageBox
                                message={data.message}
                                name={data.name}
                                date={data.time}
                            />
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </Flex>
    );
};

const styles = {
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: '2xl',
    },
};

export default CreateMessage;
