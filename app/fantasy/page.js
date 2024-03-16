'use client'
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Fantasy() {

    const events = [{ img: 'Event1.png', head: 'Skyesports Champions Series | Semi Final ', date: 'Starts at 5 : 00 PM Today' }, { img: 'Event2.png', head: 'Skyesports Champions Series | Semi Final ', date: 'Starts at 5 : 00 PM Today' }]

    return (
        <Flex flexDir='column' bg='#2A1233' color='white' alignItems='center' gap='24px' pt='24px' pb='40px'>
            <Text color='white' fontSize='24px' fontWeight='800' m='0px'>Events</Text>
            {events.map((event) => (
                <Flex flexDir='column' w='90%' mt='15px'>
                    <Image src={event.img} borderRadius='10px' alignSelf='center' w='100%' />
                    <Text fontSize='18px' fontWeight='700' m='8px'>{event.head}</Text>
                    <Text textAlign='end' fontSize='12px' fontWeight='400' m='0px'>{event.date}</Text>
                </Flex>
            ))}
        </Flex>
    )
}

export default Fantasy