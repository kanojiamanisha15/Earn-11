import { Button, Flex, Image, Text } from '@chakra-ui/react'

function selectMatch() {

    return (
        <Flex flexDir='column' bg='#2A1233' color='white' alignItems='center' gap='40px' pt='24px' pb='40px'>
            <Text color='white' fontSize='24px' fontWeight='800' m='0px'>Select Match</Text>
            <Image src='/Match1.png' alignSelf='center' w='90%' />
            <Flex flexDir='column' w='70%' gap='18px'>
                <Button color='white' bg='#2A1233' fontSize='24px' fontWeight='700' p='10px 45px' gap='10px' borderRadius='89px' border='1px solid #FFF'>NEXT : Match - 3</Button>
                <Image src='/makeTeam.svg' w='100%' />
                <Button color='#2A1233' fontSize='20px' fontWeight='700' p='10px 30px' gap='10px' borderRadius='90px' bg='white' boxShadow='0px 0px 12px 0px rgba(255, 255, 255, 0.50)'>Make Team</Button>
                <Text fontSize='14px' fontWeight='700' alignSelf='center' m='0px'>Starts in 00:20:01</Text>
            </Flex>
            <Text fontSize='24px' fontWeight='700' p='5px 40px' gap='10px' border='1px solid #FFF' m='0px'>UPCOMING MATCHES</Text>
            <Flex flexDir='column' w='50%'>
                <Text fontSize='20px' fontWeight='700' textAlign='center' m='0px'>Match - 4</Text>
                <Image src='/Erangle.svg' w='90%' alignSelf='center' mb='24px' />
                <Button fontSize='14px' fontWeight='700' color='#2A1233' p='10px 30px' gap='10px' borderRadius='90px' bg='white' boxShadow='0px 0px 12px 0px rgba(255, 255, 255, 0.50)' w='80%' alignSelf='center'>Make Team</Button>
            </Flex>
            <Text fontSize='24px' fontWeight='700' p='5px 40px' gap='10px' border='1px solid #FFF' m='0px'>COMPLETED  MATCHES</Text>
        </Flex >
    )
}

export default selectMatch