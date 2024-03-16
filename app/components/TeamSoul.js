import { Flex, Image, Text, Link, Alert, AlertTitle } from "@chakra-ui/react"

function TeamSoul({ handleClick, id, totalSelects }) {
    return (
        < Flex bg='#471659' p='10px' justifyContent='space-between' alignItems='center' alignSelf='center' w='90%' borderRadius='8px' border='1px solid #FFF' >
            <Flex gap='16px'>
                <Image src='/teamSoul.svg' h='100%' />
                <Text color='white' m='0px' fontSize='18px' fontWeight='700'>Team SOUL</Text>
            </Flex>
            <Link onClick={totalSelects.length < 6 ? () => handleClick(id) : ''}>
                <Image src='/Add.svg' />
            </Link>
        </Flex>
    )
}

export default TeamSoul