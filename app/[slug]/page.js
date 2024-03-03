import { Heading, Image, Flex, Text, ChakraProvider, Box } from "@chakra-ui/react";

export default async function Article({ params }) { // params wont be available in nested components
    function db() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://writers.explorethebuzz.com/api/articles?populate[featureImage][fields][0]=url&filters[slug][$eq]=${params.slug}`);
                const main = await response.json();
                const article = await main.data[0]
                resolve(article)
            } catch (error) {
                reject(error)
            }
        })

    }
    const data = await db()

    const dataObj = JSON.parse(data.content)

    return (
        <ChakraProvider>
            <Flex flexDir='column' w={{ base: '80%', lg: '889px' }} m='auto' mt={{ base: '85px', lg: '164px' }}>
                <Image src={`https://writers.explorethebuzz.com${data.featureImage.url}`} m={{ base: 'auto auto 15px auto', lg: 'auto' }} w={{ base: '100%', lg: '889px' }} borderRadius='16px' />
                <Heading fontSize={{ base: '20px', lg: '40px' }} m='0' my={{ base: '20px', lg: '30px' }}>{data.title}</Heading>
                {dataObj.blocks.map((texts, i) => (
                    texts.type === 'paragraph' ?
                        <Text key={i} fontSize={{ base: '16px', lg: '24px' }} m='0' mb='20px'>
                            <Box dangerouslySetInnerHTML={{ __html: texts.data.text }} />
                        </Text> :
                        texts.type === 'header' ?
                            <Heading key={i} as='h3' fontSize={{ base: '20px', lg: '36px' }} m='0' mt={{ base: '15px', lg: '50px' }} mb={{ base: '20px', lg: '24px' }}>{texts.data.text}</Heading> : ''
                ))}
            </Flex>
        </ChakraProvider>
    )
}
