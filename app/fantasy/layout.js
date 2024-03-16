import { Box } from "@chakra-ui/react"

function Events({ children }) {
    return (
        <div>
            <Box bg='#20012C' p='10px' color='white' fontSize='22px' fontWeight='700'>Earn11 Esports</Box>
            {children}
        </div>
    )
}

export default Events