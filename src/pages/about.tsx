import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const timelineData = [
  {
    year: '2021',
    title: '"YPF" Gas Station - Gas station attendant',
    titleEs: '"YPF" Estación de Servicio - Playero',
    image: '/imagenes/YPF (1).jpeg',
    number: 1
  },
  {
    year: '2019-2020',
    title: 'Personal Project "Fenix Menus" Catering and custom menus',
    titleEs: 'Proyecto Personal "Fenix Menus" Servicio de Catering y menús personalizados',
    image: '/imagenes/Logo Fin.png',
    number: 2
  },
  {
    year: '2018',
    title: '"Al Jariff" Arab themed Food Truck Cook',
    titleEs: '"Al Jariff" Food Truck de Comida Árabe, Cocinero',
    image: '/imagenes/Jarif.jpeg',
    number: 3
  },
  {
    year: '2017',
    title: 'Primary Line Cook - Crested Butte // Colorado (US)',
    titleEs: 'Cocinero Primario - Crested Butte // Colorado (Estados Unidos)',
    image: '/imagenes/Vegas.jpeg',
    number: 4
  },
  {
    year: '2015',
    title: 'Cook in a Chinese Restaurant "BudaTown"',
    titleEs: 'Cocinero en Restaurante Chino "BudaTown"',
    image: '/imagenes/Chn.jpeg',  
    number: 5
  }
]

const hobbies = [
  {
    title: 'Videogames',
    titleEs: 'Videojuegos',
    description: 'I like to play videogames, mostly single-player, but I sometimes play with friends.',
    descriptionEs: 'Me gusta jugar videojuegos, mayormente solo, pero a veces juego con amigos.',
    image: '/imagenes/ST2.jpg'
  },
  {
    title: 'Learning Languages',
    titleEs: 'Aprender Idiomas',
    description: 'I learned languages by myself, currently studying Russian for almost 2 years.',
    descriptionEs: 'Aprendo lenguajes por mi cuenta, actualmente estoy estudiando Ruso, aproximadamente desde hace 2 años.',
    image: '/imagenes/Flags.jpg'
  },
  {
    title: 'Trekking',
    titleEs: 'Trekking',
    description: 'I enjoy going outdoors with friends, follow trails, and going to nice places.',
    descriptionEs: 'Disfruto del Senderismo con amigos, siguiendo caminos y explorando buenos lugares.',
    image: '/imagenes/Trekking.jpg'
  }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About || Federico Schaufele</title>
        <meta name="description" content="Learn more about Federico Schaufele - Web Developer from Argentina" />
      </Head>

      <Navigation />

      <Box pt="16">
        {/* Main About Section */}
        <Box py={{ base: 16, md: 24 }} bg="white">
          <Container maxW="1200px">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              gap={{ base: 8, md: 12 }}
            >
              {/* Image */}
              <Box flex="1" position="relative">
                <Box
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="0 10px 30px rgba(230,0,0,0.3)"
                >
                  <Image
                    src="/imagenes/Tower.jpeg"
                    alt="Federico Schaufele"
                    objectFit="cover"
                    w="100%"
                    h={{ base: '400px', md: '500px' }}
                  />
                  <Box
                    position="absolute"
                    top="-6"
                    right="-6"
                    w="100%"
                    h="100%"
                    border="4px solid"
                    borderColor="red.600"
                    borderRadius="xl"
                    zIndex={-1}
                  />
                </Box>
              </Box>

              {/* Content */}
              <Box flex="1">
                <Box mb={6}>
                  <Box w="16" h="1" bg="red.600" mb={4} />
                  <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
                    About // Acerca de
                  </Heading>
                </Box>

                <Text mb={4} color="gray.600" lineHeight="1.8">
                  My name is Federico Schaufele I'm from Cordoba Argentina, I'm 28 years old, 
                  currently living in Rio Grande-Tierra del Fuego. I am a certified cook graduated 
                  from the Mariano Moreno higher Institute. Since the start of the pandemic I've been 
                  studying programming by myself, mainly HTML and CSS. Later in the year 2020 I decided 
                  to take a step up and enroll in the UTN to further my knowledge on programming.
                </Text>
                
                <Text color="gray.600" lineHeight="1.8">
                  As to why the sudden change in career, it's mostly due to the fact that my former 
                  career has been impacted greatly due to the pandemic, and this in turn forced me to 
                  adapt to the necessities of today, and in doing so I discovered that programming and 
                  designing web pages is a challenge but at the same time is also very rewarding once 
                  it's done and working.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Content Divider */}
        <Box h="0.5rem" background="linear-gradient(to left, #cd4545, #e9b949, #cd4545)" />

        {/* Timeline Section */}
        <Box py={{ base: 16, md: 24 }} bg="gray.50">
          <Container maxW="1200px">
            <VStack spacing={12}>
              <Box textAlign="center">
                <Box w="16" h="1" bg="red.600" mx="auto" mb={4} />
                <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={2}>
                  Timeline
                </Heading>
                <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="gray.600" fontWeight="medium">
                  Línea de Tiempo
                </Heading>
              </Box>

              <VStack spacing={16} w="100%">
                {timelineData.map((item, index) => (
                  <MotionBox
                    key={item.number}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    w="100%"
                  >
                    <Flex
                      direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                      align="center"
                      gap={8}
                      position="relative"
                    >
                      {/* Content */}
                      <Box flex="1" textAlign={{ base: 'center', md: index % 2 === 0 ? 'right' : 'left' }}>
                        <Heading as="h4" fontSize="xl" color="red.600" mb={2}>
                          {item.year}
                        </Heading>
                        <Text fontSize="lg" fontWeight="semibold" color="gray.800" mb={1}>
                          {item.title}
                        </Text>
                        <Text color="gray.600">
                          {item.titleEs}
                        </Text>
                      </Box>

                      {/* Number Badge */}
                      <Box
                        position="relative"
                        bg="red.600"
                        color="white"
                        w="12"
                        h="12"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="xl"
                        fontWeight="bold"
                        flexShrink={0}
                      >
                        {item.number}
                      </Box>

                      {/* Image */}
                      <Box flex="1">
                        <Image
                          src={item.image}
                          alt={item.title}
                          borderRadius="lg"
                          objectFit="cover"
                          w="100%"
                          h="200px"
                          boxShadow="lg"
                        />
                      </Box>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Content Divider */}
        <Box h="0.5rem" background="linear-gradient(to left, #cd4545, #e9b949, #cd4545)" />

        {/* Hobbies Section */}
        <Box py={{ base: 16, md: 24 }} bg="white">
          <Container maxW="1200px">
            <VStack spacing={12}>
              <Box textAlign="center">
                <Box w="16" h="1" bg="red.600" mx="auto" mb={4} />
                <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800">
                  Hobbys
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {hobbies.map((hobby, index) => (
                  <MotionBox
                    key={hobby.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <VStack
                      bg="gray.50"
                      p={6}
                      borderRadius="lg"
                      spacing={4}
                      h="100%"
                      boxShadow="md"
                      _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                    >
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        borderRadius="md"
                        objectFit="cover"
                        w="100%"
                        h="150px"
                      />
                      <VStack spacing={2} textAlign="center">
                        <Heading as="h4" size="md" color="gray.800">
                          {hobby.title}
                        </Heading>
                        <Heading as="h5" size="sm" color="red.600">
                          {hobby.titleEs}
                        </Heading>
                        <Text color="gray.600" fontSize="sm">
                          {hobby.description}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {hobby.descriptionEs}
                        </Text>
                      </VStack>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
