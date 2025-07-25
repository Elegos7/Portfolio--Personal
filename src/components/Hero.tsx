// src/components/Hero.tsx
'use client'
import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const WORDS = ['Freelancer', 'Web Developer', 'Web Designer']
const TYPING_SPEED = 120
const PAUSE_AFTER = 1000

export default function Hero() {
  // estado del texto y borrado
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  // typing effect en bucle
  useEffect(() => {
    const full = WORDS[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display.length < full.length) {
      timeout = setTimeout(
        () => setDisplay(full.slice(0, display.length + 1)),
        TYPING_SPEED
      )
    } else if (!deleting && display.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER)
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(full.slice(0, display.length - 1)),
        TYPING_SPEED / 2
      )
    } else if (deleting && display.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [display, deleting, wordIndex])

  // dimensiones de la tarjeta
  const imgW = useBreakpointValue({ base: '70%', md: '30%' })
  const imgH = useBreakpointValue({ base: '400px', md: '600px' })

  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      {/* Vídeo de fondo */}
      <Box
        as="video"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
      />

      {/* Overlays */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
        zIndex={1}
      />
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(circle at center, rgba(0,0,0,0.4), transparent)"
        zIndex={1}
      />

      {/* Contenido */}
      <Flex
        position="relative"
        zIndex={2}
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        h="100%"
        px={{ base: 6, md: 20 }}
      >
        {/* Texto */}
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 10, md: 0 }}>
          {/* Underline */}
          <Box
            display="inline-block"
            w="16"
            h="1"
            bg="white"
            mb={4}
            transform="translateX(-4px)"
          />
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            color="white"
            mb={2}
          >
            Federico Schaufele
          </Heading>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            color="red.400"
            mb={6}
            minH="1.5em"
          >
            {display}
            <Text
              as="span"
              sx={{ animation: 'blink 0.7s step-end infinite' }}
            >
              |
            </Text>
          </Text>
          <Button
            as="a"
            href="/pdf/SchaufeleCV.pdf"
            download
            bg="red.600"
            color="white"
            fontWeight="semibold"
            px={6}
            py={3}
            borderRadius="md"
            mb={8}
            _hover={{ bg: 'red.700', transform: 'scale(1.05)' }}
          >
            Descargue mi CV
          </Button>
          <Flex justify={{ base: 'center', md: 'flex-start' }} gap={6}>
            <IconButton
              as="a"
              href="https://facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              boxSize="2.5rem"
              fontSize="2rem"
              _hover={{ color: 'red.400', transform: 'scale(1.1)' }}
            />
            <IconButton
              as="a"
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              boxSize="2.5rem"
              fontSize="2rem"
              _hover={{ color: 'red.400', transform: 'scale(1.1)' }}
            />
          </Flex>
        </Box>

        {/* Tarjeta vertical de la foto */}
        <Box
          flex="1"
          w={imgW}
          h={imgH}
          borderRadius="xl"
          overflow="hidden"
          mx="auto"
          position="relative"
          boxShadow="0 10px 20px rgba(230,0,0,0.4)"
        >
          <Image
            src="/imagenes/Secret_Fede.jpeg"
            alt="Federico Schaufele"
            objectFit="cover"
            w="100%"
            h="100%"
          />
          {/* Borde flotante */}
          <Box
            position="absolute"
            top="6"
            right="-6"
            w="100%"
            h="100%"
            border="4px solid"
            borderColor="red.600"
            borderRadius="xl"
            boxShadow="0 10px 20px rgba(230,0,0,0.4)"
            zIndex={-1}
          />
        </Box>
      </Flex>

      {/* Cursor parpadeante */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50%     { opacity: 1; }
        }
      `}</style>
    </Box>
  )
}
