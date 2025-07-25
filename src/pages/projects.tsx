import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  Badge,
  HStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const projects = [
  {
    id: 1,
    title: 'Tea Station',
    titleEs: 'Casa de Té',
    description: 'My first project using HTML and CSS. A simple, clean website for a tea station business.',
    descriptionEs: 'Mi primer proyecto usando HTML y CSS. Un sitio web simple y limpio para un negocio de casa de té.',
    image: '/imagenes/project-1.jpeg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed'
  },
  {
    id: 2,
    title: 'BackRoads Tour Company',
    titleEs: 'Compañía de Turismo',
    description: 'Second project applying CSS Flexbox. A responsive website for a tour company.',
    descriptionEs: 'Segundo proyecto aplicando CSS Flexbox. Un sitio web responsive para una compañía de turismo.',
    image: '/imagenes/project-2.jpeg',
    technologies: ['HTML', 'CSS', 'Flexbox', 'Responsive Design'],
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Therapeutic Tarot',
    titleEs: 'Tarot Terapéutico',
    description: 'A simple website created for a friend who offers therapeutic tarot services.',
    descriptionEs: 'Un sitio web sencillo creado para un amigo que ofrece servicios de tarot terapéutico.',
    image: '/imagenes/project-1.jpeg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed'
  }
]

const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <MotionBox
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <VStack
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ 
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transform: 'translateY(-5px)'
      }}
      h="100%"
      align="stretch"
    >
      {/* Image */}
      <Box position="relative" overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          w="100%"
          h="250px"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.05)' }}
        />
        <Box
          position="absolute"
          top={4}
          right={4}
        >
          <Badge
            colorScheme="green"
            variant="solid"
            borderRadius="full"
            px={3}
            py={1}
          >
            {project.status}
          </Badge>
        </Box>
      </Box>
      
      {/* Content */}
      <VStack p={6} align="stretch" spacing={4} flex="1">
        <VStack align="stretch" spacing={2}>
          <Heading as="h3" size="lg" color="gray.800">
            {project.title}
          </Heading>
          <Heading as="h4" size="md" color="red.600" fontWeight="medium">
            {project.titleEs}
          </Heading>
        </VStack>

        <VStack align="stretch" spacing={3} flex="1">
          <Text color="gray.600" lineHeight="1.6">
            {project.description}
          </Text>
          <Text color="gray.500" fontSize="sm" lineHeight="1.6">
            {project.descriptionEs}
          </Text>
        </VStack>

        {/* Technologies */}
        <Box>
          <Text fontSize="sm" color="gray.700" fontWeight="semibold" mb={2}>
            Technologies:
          </Text>
          <HStack flexWrap="wrap" spacing={2}>
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                colorScheme="red"
                variant="outline"
                borderRadius="full"
                px={2}
                py={1}
                fontSize="xs"
              >
                {tech}
              </Badge>
            ))}
          </HStack>
        </Box>

        {/* Action Button */}
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          rightIcon={<ExternalLinkIcon />}
          _hover={{ bg: 'red.50' }}
          mt="auto"
        >
          View Details
        </Button>
      </VStack>
    </VStack>
  </MotionBox>
)

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects || Federico Schaufele</title>
        <meta name="description" content="Portfolio projects by Federico Schaufele - Web Developer" />
      </Head>

      <Navigation />

      <Box pt="16">
        <Box py={{ base: 16, md: 24 }} bg="white" minH="100vh">
          <Container maxW="1200px">
            {/* Header */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              textAlign="center"
              mb={16}
            >
              <Box w="16" h="1" bg="red.600" mx="auto" mb={4} />
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl' }}
                color="gray.800"
                mb={4}
              >
                My Projects
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="gray.600"
                fontWeight="medium"
                mb={6}
              >
                Mis Proyectos
              </Heading>
              <VStack spacing={4} maxW="800px" mx="auto">
                <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                  Here are some of the projects I've worked on during my learning journey. 
                  Each project represents a step forward in my development as a web developer.
                </Text>
                <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                  Aquí están algunos de los proyectos en los que he trabajado durante mi viaje de aprendizaje. 
                  Cada proyecto representa un paso adelante en mi desarrollo como desarrollador web.
                </Text>
              </VStack>
            </MotionBox>

            {/* Projects Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={16}>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </SimpleGrid>

            {/* Call to Action */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              textAlign="center"
            >
              <Box
                bg="gray.50"
                p={12}
                borderRadius="xl"
                boxShadow="md"
              >
                <VStack spacing={6}>
                  <Heading as="h3" size="lg" color="gray.800">
                    Interested in working together?
                  </Heading>
                  <Heading as="h4" size="md" color="gray.600" fontWeight="medium">
                    ¿Interesado en trabajar juntos?
                  </Heading>
                  <Text color="gray.600" maxW="600px" textAlign="center">
                    I'm always looking for new challenges and opportunities to grow as a developer. 
                    Let's discuss your project!
                  </Text>
                  <Text color="gray.600" maxW="600px" textAlign="center">
                    Siempre estoy buscando nuevos desafíos y oportunidades para crecer como desarrollador. 
                    ¡Hablemos de tu proyecto!
                  </Text>
                  <Button
                    as="a"
                    href="/contact"
                    bg="red.600"
                    color="white"
                    size="lg"
                    px={8}
                    _hover={{ bg: 'red.700', transform: 'scale(1.05)' }}
                    transition="all 0.3s"
                  >
                    Get In Touch
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
