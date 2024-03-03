// import Image from "next/image";
// import styles from "./page.module.css";
import { Box, Flex, Heading, Text, Button, Link, Image, Grid, GridItem } from "@chakra-ui/react";

export default async function Home() {

    // client side rendering -  page willl be built in client browser (benefits:, low load on server, client side control, fast, )

    // server side rendering (benefits:, security, search engine optimized, )

    // 1. static => one time generation on server and on demand gneration (revalidate)
    // 1. time base revalidation  // 2. api on demaand 

    // 2. dynamic => every time pagge will be built on server (wordpress, php language)

    // 3. Streaming => No idea

    function db() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch("https://writers.explorethebuzz.com/api/categories/2?populate[articles][fields][0]=title&populate[articles][populate][featureImage][fields][0]=url&populate[articles][fields][2]=slug&sort=id%3Adesc&pagination[page]=1&pagination[pageSize]=30");
                const fields = await response.json();
                const article = await fields.data.articles
                resolve(article)
            } catch (error) {
                reject(error)
            }
        })

    }
    const data = await db()

    // slice the title charcter to be in 2 line
    // mobile ready
    // images integrated 
    // when click on any article => /slug

    return (
        <Box >
            <Box pl={{ base: '0px', lg: '100px' }} pr={{ base: '0px', lg: '60px' }} pt={{ base: '72px', md: '85px', lg: '180px' }} w={{ base: '90%', lg: '100%' }} m={{ base: 'auto', lg: 'auto' }}>
                <Flex gap={{ base: '0px', md: '50px', lg: '125px' }} alignItems='center' flexDir={{ base: 'column-reverse', md: 'row' }}>
                    <Flex flexDir='column' gap={{ base: '8px', lg: '25px' }} textAlign={{ base: 'center', md: 'justify' }} alignItems={{ base: 'center', md: 'baseline' }}>
                        <Heading as="h1" size="xl" fontWeight="bold" color='#6F2DBD' fontSize={{ base: '24px', lg: '46px' }}>Earn 11</Heading>
                        <Text fontSize={{ base: '16px', lg: '24px' }} mb='15px'>
                            Here are some common types of earning apps and how they generally work: Survey Apps: Users complete surveys
                            and provide feedback on various topics. Earnings are usually in the form of points or cash.
                        </Text>
                        <Button bg="#6F2DBD" color="white" fontSize={{ base: '16px', lg: '22px' }} maxW='fit-content' h={{ base: 'auto', lg: '50px' }} zIndex='0' p={{ base: '8px 12px', lg: 'auto' }}>Download Now</Button>
                    </Flex>
                    <Image src="mobile.png" w={{ base: '250px', lg: '406.84px' }} />
                </Flex>
                <Flex templateColumns="repeat(2, 1fr)" rowGap='50px' columnGap='80px' my={100} flexWrap='wrap' justifyContent='center' w='85%' mx='auto'>
                    {data?.map((article, index) => (
                        <Flex h={{ base: '275px', lg: '300px' }} bg='#B796DE' rounded="2xl" border='1px solid #B796DE' key={index} w={{ base: '277px', lg: '340px' }}>
                            <Flex flexDir='column' justifyContent='space-between'
                                bg="white"
                                p='12px'
                                rounded="2xl"
                                mt="auto"
                                color="white"
                                w='-webkit-fill-available'
                                h='115px'
                            >
                                <Link href={`/${article.slug}`}>
                                    <Heading as="h2" size="lg" fontWeight="semibold" mb={{ base: '20px', lg: '3' }} color='black' fontSize={{ base: '16px', lg: '20px' }} noOfLines='2' h={{ base: '45px', lg: 'auto' }}>
                                        {article.title}
                                    </Heading>
                                </Link>
                                <Link color="#248BFF" href="#" fontWeight='500'>
                                    Read More...
                                </Link>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Box >
    );
}
