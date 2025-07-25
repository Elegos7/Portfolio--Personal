'use client'
import { useState } from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Image,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Links = [
  { name: 'Sobre Mi', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' }
]

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ChakraLink
      href={href}
      onClick={handleClick}
      className="scroll-link"
      px={0}
      py={0}
      mr={4}
      fontWeight="bold"
      color="white"
      fontSize="1.1rem"
      textTransform="capitalize"
      letterSpacing="0.25rem"
      position="relative"
      transition="all 0.3s linear"
      _hover={{
        textDecoration: 'none',
        color: '#cd4545'
      }}
      _after={{
        content: '""',
        background: '#ff3d00',
        width: 0,
        height: '2px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        transition: 'width 0.7s'
      }}
      sx={{
        '&:hover::after': {
          width: '100%'
        }
      }}
    >
      {children}
    </ChakraLink>
  )
}

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box 
        as="nav"
        id="nav"
        bg="transparent" 
        px={{ base: 4, md: 6 }}
        py={0}
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        zIndex={1000}
        transition="all 0.3s linear"
        className="nav"
      >
        <Box className="nav-center" maxW="1170px" mx="auto" w={{ base: '90vw', md: '95vw' }}>
          <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
            {/* Nav header */}
            <Box className="nav-header" display="flex" alignItems="center" justifyContent="space-between" w={{ base: '100%', md: 'auto' }}>
              <Image 
                src="/imagenes/Logosinfondo.png" 
                className="logo" 
                alt="logo" 
                h="80px" 
                objectFit="contain"
              />
              <IconButton
                className="nav-toggle"
                size={'lg'}
                icon={<HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={onOpen}
                bg="transparent"
                border="transparent"
                color="#cd4545"
                fontSize="1.5rem"
                cursor="pointer"
                transition="all 0.3s linear"
                _hover={{ color: '#ae1414' }}
              />
            </Box>
            {/* Links container */}
            <Box 
              className="links-container"
              h={{ base: 0, md: 'auto' }}
              overflow="hidden"
              transition="all 0.3s linear"
            >
              <HStack
                as={'ul'}
                className="links"
                spacing={0}
                display={{ base: 'none', md: 'flex' }}
                listStyleType="none"
              >
                {Links.map((link) => (
                  <Box as="li" key={link.name}>
                    <NavLink href={link.href}>
                      {link.name}
                    </NavLink>
                  </Box>
                ))}
              </HStack>
            </Box>
          </Flex>
        </Box>

      </Box>

      {/* Mobile Menu */}
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent 
          bg="linear-gradient(rgb(12 6 0 / 37%), rgb(0 0 0 / 61%)), url(/imagenes/oscuridad.jpg) center/cover no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        >
          <DrawerCloseButton color="white" size="lg" />
          <DrawerBody>
            <VStack spacing={8} align="center" justify="center" h="100%">
              {Links.map((link) => (
                <ChakraLink
                  key={link.name}
                  href={link.href}
                  className="scroll-link"
                  fontSize="xl"
                  fontWeight="bold"
                  color="#f5f5f5"
                  textTransform="capitalize"
                  letterSpacing="0.25rem"
                  transition="all 0.3s linear"
                  _hover={{ color: '#cd4545' }}
                  onClick={onClose}
                >
                  {link.name}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
