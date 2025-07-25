'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projectsData = [
  {
    id: 1,
    title: 'Luna de los Fuegos',
    description: 'Sitio web para casa de té y artesanías con diseño elegante y funcional',
    image: '/imagenes/Portada.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 2,
    title: 'Los Troncos',
    description: 'Página web para parrilla y restaurante con reservas online',
    image: '/imagenes/BannerFB.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 3,
    title: 'Tea Station',
    description: 'E-commerce para casa de té orgánico con carrito de compras',
    image: '/imagenes/project-1.jpeg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 4,
    title: 'BackRoads Tour Company',
    description: 'Plataforma de turismo con sistema de reservas y tours',
    image: '/imagenes/project-2.jpeg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  }
]

// Project Tag Component
const ProjectTag = ({ name, onClick, isSelected }: { name: string, onClick: (name: string) => void, isSelected: boolean }) => {
  const buttonStyles = isSelected
    ? 'text-white border-red-600'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

// Project Card Component
const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }: {
  title: string,
  description: string,
  imgUrl: string,
  gitUrl: string,
  previewUrl: string
}) => {
  return (
    <div>
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link 
            href={gitUrl} 
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link 
            href={previewUrl} 
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
