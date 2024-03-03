import { Flex, Image, Heading, Link } from "@chakra-ui/react"
import SideBar from "./SideBar"

function NavBar() {

    const list = ['Home', 'About', 'Services', 'Contact', 'FAQ']

    return (
        <Flex justify="space-between" align="center" p={4} bg="#6F2DBD" color="white" h={{ base: '46px', lg: '80px' }} px={{ base: '10px', lg: '91px' }} pos='fixed' top='0' w='-webkit-fill-available' zIndex='99'>
            <Flex w={{ base: '112px', lg: '173px' }} justifyContent='space-between' alignItems='center'>
                <Image src="splash.png" w={{ base: '35px', lg: '43px' }} />
                <Heading as="h2" size="lg" fontWeight="bold" fontSize={{ base: '16px', lg: '32px' }}>
                    Earn 11
                </Heading>
            </Flex>
            <Flex display={{ base: 'none', lg: 'block' }}>
                <Link href="#" _hover={{ textDecoration: 'underline' }} ml='62px' fontSize='20px'>Home</Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }} ml='62px' fontSize='20px'>About</Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }} ml='62px' fontSize='20px'>Services</Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }} ml='62px' fontSize='20px'>Contact</Link>
                <Link href="#" _hover={{ textDecoration: 'underline' }} ml='62px' fontSize='20px'>FAQ</Link>
            </Flex>
            <SideBar list={list}/>
        </Flex>
    )
}

export default NavBar