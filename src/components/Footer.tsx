'use client'
import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  IconButton,
  Link
} from '@chakra-ui/react'
import { FaFacebook, FaLinkedin, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Footer */}
      <Box 
        as="footer" 
        className="footer"
        pb={8}
        bg="#222" 
        color="white" 
        display="grid"
        placeItems="center"
      >
        {/* Social icons */}
        <Box 
          as="ul" 
          className="social-icons"
          display="grid"
          mt={12}
          w="20rem"
          gridTemplateColumns="repeat(2, 1fr)"
          justifyItems="center"
          listStyleType="none"
          mb={8}
        >
          <Box as="li">
            <IconButton
              as="a"
              href="https://www.facebook.com/federico.schaufele.9/"
              target="_blank"
              className="social-icon"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="#cd4545"
              fontSize="1.5rem"
              transition="all 0.3s linear"
              _hover={{ color: '#fffdf5' }}
            />
          </Box>
          <Box as="li">
            <IconButton
              as="a"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="social-icon"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="#cd4545"
              fontSize="1.5rem"
              transition="all 0.3s linear"
              _hover={{ color: '#fffdf5' }}
            />
          </Box>
        </Box>

        {/* Copyright */}
        <Text
          fontSize="1.25rem"
          textTransform="capitalize"
          mb={0}
        >
          © <Box as="span" id="date">{currentYear}</Box> Federico Schaufele
        </Text>
      </Box>
      
      {/* Scroll to top link */}
      <Link
        className="scroll-link top-link"
        href="#home"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        fontSize="1.25rem"
        position="fixed"
        bottom="3rem"
        right="3rem"
        bg="linear-gradient(178.2deg, rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6%)"
        w="2rem"
        h="2rem"
        display="grid"
        placeItems="center"
        borderRadius="0.5rem"
        color="white"
        border="0.15rem solid black"
        visibility="visible"
        zIndex={100}
        animation="bounce 2s ease-in-out infinite"
        sx={{
          '@keyframes bounce': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.5)' },
            '100%': { transform: 'scale(1)' }
          }
        }}
      >
        <FaArrowUp />
      </Link>
    </>
  )
}

