import React, { useState, useEffect } from 'react'
import {
    Flex,
    Text,
    Button,
    Textarea,
    UnorderedList,
    ListItem,
    Input,
} from '@chakra-ui/react'
import axios from 'axios'
import MessageBox from '../components/MessageBox'

const CreateMessage = () => {
    const [createMessage, setCreateMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(
                    'http://localhost:4000/messages'
                )
                return data.messageList
            } catch (error) {
                console.log('There was an error!!')
                console.log(error)
            }
        }
        getData().then((data) => {
            setMessages(data)
        })
        setSubmitted(false)
    }, [submitted])

    const postMessage = async (e) => {
        e.preventDefault()
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        }

        try {
            const { data } = await axios.post(
                'http://localhost:4000/messages',
                { message, name },
                config
            )
            setSubmitted(true)
            setMessage('')
            setName('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Flex {...styles.container} p={10} minH={'100vh'}>
            {!createMessage && (
                <Button
                    onClick={() => setCreateMessage(true)}
                    width={['100%', '10%']}
                >
                    Create Message
                </Button>
            )}
            {createMessage && (
                <form
                    style={{ width: '100%', height: '100%' }}
                    onSubmit={postMessage}
                >
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={'100%'}
                        height={'100%'}
                    >
                        <Input
                            placeholder={'name....'}
                            _placeholder={{ color: 'accentDark', opacity: 0.5 }}
                            size={'lg'}
                            width={['100%', '70%']}
                            borderColor={'textDark'}
                            my={5}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            required={true}
                        />
                        <Textarea
                            placeholder={'Type your message....'}
                            _placeholder={{ color: 'accentDark', opacity: 0.5 }}
                            size={'lg'}
                            width={['100%', '70%']}
                            height={'150px'}
                            borderColor={'textDark'}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required={true}
                        />
                        <Button my={3} width={['100%', '10%']} type={'submit'}>
                            Submit
                        </Button>
                        <Button
                            onClick={() => setCreateMessage(false)}
                            color={'accentDark'}
                            width={['100%', '10%']}
                        >
                            Cancel
                        </Button>
                    </Flex>
                </form>
            )}

            <Flex
                flexDirection={'column'}
                width={['100%', '70%']}
                paddingY={createMessage ? 0 : 10}
                alignItems={'center'}
            >
                <Text
                    fontSize={'3xl'}
                    backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                    backgroundClip="text"
                    pt={10}
                >
                    Messages
                </Text>
                <UnorderedList
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                >
                    {messages
                        .map((data) => (
                            <ListItem
                                listStyleType={'none'}
                                key={data._id}
                                my={3}
                            >
                                <MessageBox
                                    message={data.message}
                                    name={data.name}
                                    date={data.date.split('T')[0]}
                                />
                            </ListItem>
                        ))
                        .reverse()}
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
