import React, { useState, useEffect } from 'react'
import {
    Flex,
    Text,
    Button,
    Textarea,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import axios from 'axios'
import MessageBox from '../components/MessageBox'

const CreateMessage = () => {
    const [createMessage, setCreateMessage] = useState(false)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(
                    'http://localhost:4000/messages'
                )
                console.log(typeof data.messageList[0].date)
                return data.messageList
            } catch (error) {
                console.log('There was an error!!')
                console.log(error)
            }
        }
        getData().then((data) => {
            setMessages(data)
        })
    }, [])

    return (
        <Flex {...styles.container} height={'100vh'}>
            {!createMessage && (
                <Button onClick={() => setCreateMessage(true)}>
                    Create Message
                </Button>
            )}
            {createMessage && (
                <form style={{ width: '100%', height: '45%' }}>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={'100%'}
                        height={'100%'}
                    >
                        <Textarea
                            size={'lg'}
                            width={'70%'}
                            height={'50%'}
                            borderColor={'textDark'}
                        />
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
                </form>
            )}
            {/** Messages */}
            <Flex
                flexDirection={'column'}
                width={'70%'}
                paddingY={createMessage ? 0 : 10}
                alignItems={'center'}
            >
                <Text
                    fontSize={'3xl'}
                    backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                    backgroundClip="text"
                >
                    Messages
                </Text>
                <UnorderedList
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                >
                    {messages.map((data) => (
                        <ListItem listStyleType={'none'} key={data._id} my={3}>
                            <MessageBox
                                message={data.message}
                                name={data.name}
                                date={data.date.split('T')[0]}
                                {...console.log(data.date.split('T')[1])}
                            />
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </Flex>
    )
}

const styles = {
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: '2xl',
    },
}

export default CreateMessage
