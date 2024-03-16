'use client'
import { Button, ChakraProvider, Flex, Image, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'
import GodLike from '../../components/GodLike'
import TeamSoul from '../../components/TeamSoul'

function selectTeam() {

    const teamSoul = [{ id: 1, active: false }, { id: 2, active: false }, { id: 3, active: false }, { id: 4, active: false }, { id: 5, active: false }, { id: 6, active: false }, { id: 7, active: false }, { id: 8, active: false }, { id: 9, active: false }, { id: 10, active: false }, { id: 11, active: false }, { id: 12, active: false }, { id: 13, active: false }, { id: 14, active: false }, { id: 15, active: false }]
    const [lists, setLists] = useState(teamSoul)

    const handleClick = (id) => {
        const newLists = lists.map((team) => team.id === id ? { ...team, active: !team.active } : team)
        setLists(newLists)
    }

    const totalSelects = lists.filter((list) => list.active === true)

    const selected = []
    for (let i = 1; i <= 6; i++) {
        if (i <= totalSelects.length) {
            selected.push('/whiteRectangle.png')
        } else {
            selected.push('/purpleRectangle.png')
        }
    }
    console.log(selected);

    return (
        <ChakraProvider>
            <Flex flexDir='column' bg='#2A1233' color='white' alignItems='center' gap='24px' pt='24px'>
                <Image src='/Earn11Esports.png' borderRadius='10px' alignSelf='center' w='90%' />
                <Text fontSize='24px' fontWeight='800' m='0px'>Select Team</Text>
                <Flex>
                    {selected.map((select) => (
                        <Image src={select} />
                    ))}
                </Flex>
                <Text fontSize='22px' fontWeight='800' m='0px'>{totalSelects.length} out of 6</Text>
                {
                    lists.map((item) => {
                        return !item.active ? <TeamSoul id={item.id} handleClick={handleClick} totalSelects={ totalSelects} /> : <GodLike id={item.id} handleClick={handleClick} />
                    })
                }
                <Button color='#2A1233' fontSize='20px' fontWeight='700' p='10px 30px' gap='10px' borderRadius='90px' bg='#FFF' w='100%' boxShadow='0px 0px 12px 0px rgba(255, 255, 255, 0.50)' lineHeight='normal' mb='72px'>Confirm</Button>
            </Flex>
        </ChakraProvider >
    )
}

export default selectTeam