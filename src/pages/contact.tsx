import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
  Divider
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'federicoschaufele93@gmail.com',
    href: 'mailto:federicoschaufele93@gmail.com'
  },
  {
    icon: FaPhone,
    label: 'Phone / Teléfono',
    value: '+54 9 2964 50-2917',
    href: 'tel:+5492964502917'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/federico-schaufele',
    href: 'https://www.linkedin.com/feed/'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location / Ubicación',
    value: 'Rio Grande, Tierra del Fuego, Argentina',
    href: null
  }
]

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact || Federico Schaufele</title>
        <meta name="description" content="Get in touch with Federico Schaufele - Web Developer" />
      </Head>

      <Navigation />

      <Box pt="16" minH="100vh">
        <Box py={{ base: 16, md: 24 }} bg="white">
          <Container maxW="800px">
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <VStack spacing={8} textAlign="center" mb={16}>
                <Box>
                  <Box
                    w="16"
                    h="1"
                    bg="red.600"
                    mx="auto"
                    mb={4}
                  />
                  <Heading
                    as="h1"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    color="gray.800"
                    mb={4}
                    background="linear-gradient(to left, #cd4545, #e9b949, #cd4545)"
                    backgroundClip="text"
                    textAlign="center"
                    p={4}
                    borderRadius="md"
                  >
                    Contact
                  </Heading>
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    color="gray.600"
                    fontWeight="medium"
                  >
                    Contacto
                  </Heading>
                </Box>

                <VStack spacing={4} maxW="600px">
                  <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                    If you are looking to get ahold of me, you can send me an email or reach out through any of the contact methods below.
                  </Text>
                  <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                    Si está interesado en contactarse conmigo, envíe un mail o comuníquese a través de cualquiera de los métodos de contacto que aparecen a continuación.
                  </Text>
                </VStack>
              </VStack>

              {/* Contact Information Cards */}
              <VStack spacing={8} align="stretch">
                {contactInfo.map((item, index) => (
                  <MotionBox
                    key={item.label}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Box
                      bg="gray.50"
                      p={8}
                      borderRadius="xl"
                      boxShadow="md"
                      _hover={{ 
                        boxShadow: 'lg',
                        transform: 'translateY(-2px)',
                        bg: 'gray.100'
                      }}
                      transition="all 0.3s"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <HStack spacing={6} align="center">
                        {/* Icon */}
                        <Box
                          bg="red.600"
                          color="white"
                          p={4}
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <item.icon size="24px" />
                        </Box>

                        {/* Content */}
                        <VStack align="start" spacing={2} flex="1">
                          <Heading as="h3" size="md" color="gray.800">
                            {item.label}
                          </Heading>
                          {item.href ? (
                            <Link
                              href={item.href}
                              color="red.600"
                              fontSize="lg"
                              fontWeight="medium"
                              _hover={{ 
                                color: 'red.700',
                                textDecoration: 'underline'
                              }}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <Text fontSize="lg" color="gray.700" fontWeight="medium">
                              {item.value}
                            </Text>
                          )}
                        </VStack>
                      </HStack>
                    </Box>
                  </MotionBox>
                ))}
              </VStack>

              {/* Call to Action */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                mt={16}
              >
                <Box
                  bg="red.600"
                  color="white"
                  p={8}
                  borderRadius="xl"
                  textAlign="center"
                  boxShadow="xl"
                >
                  <VStack spacing={4}>
                    <Heading as="h3" size="lg">
                      Let's Work Together!
                    </Heading>
                    <Heading as="h4" size="md" fontWeight="medium" opacity={0.9}>
                      ¡Trabajemos Juntos!
                    </Heading>
                    <Text fontSize="lg" opacity={0.9} maxW="500px">
                      I'm always interested in new opportunities and exciting projects. 
                      Don't hesitate to reach out!
                    </Text>
                    <Text fontSize="lg" opacity={0.9} maxW="500px">
                      Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. 
                      ¡No dudes en contactarme!
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
