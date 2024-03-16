import { Flex, Image, Text, Link } from '@chakra-ui/react'

function GodLike({ handleClick, id }) {
    return (
        <Flex bg='white' p='10px' justifyContent='space-between' alignItems='center' alignSelf='center' w='90%' borderRadius='8px' >
            <Flex gap='16px'>
                <Image src='/GL.svg' h='27px' />
                <Text color='black' m='0px' fontSize='18px' fontWeight='700'>GODLIKE</Text>
            </Flex>
            <Link onClick={() => handleClick(id)}>
                <Image src='/Tick.svg' h='24px' />
            </Link>
        </Flex>
    )
}

export default GodLike