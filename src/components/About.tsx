'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Tab data structure similar to judygab's approach
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-white space-y-2">
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React & Next.js</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Git & Version Control</li>
      </ul>
    ),
  },
  {
    title: "Experiencia",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 text-white space-y-2">
        <li>Freelance Web Developer (2021-Presente)</li>
        <li>Estudiante UTN - Tecnicatura en Programación</li>
        <li>Proyectos personales y comerciales</li>
        <li>Desarrollo de sitios web responsivos</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-white space-y-2">
        <li>UTN - Tecnicatura en Programación (En curso)</li>
        <li>Autodidacta en tecnologías web</li>
        <li>Cursos online especializados</li>
        <li>Práctica continua con proyectos reales</li>
      </ul>
    ),
  },
]

// Tab Button Component
const TabButton = ({ active, selectTab, children }: { active: boolean, selectTab: () => void, children: React.ReactNode }) => {
  const buttonClasses = active
    ? 'text-white border-b-2 border-red-600'
    : 'text-gray-300 hover:text-white'
  
  return (
    <button
      className={`mr-4 font-semibold px-1 py-2 transition-colors duration-300 ${buttonClasses}`}
      onClick={selectTab}
    >
      {children}
    </button>
  )
}

export default function About() {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }
  
  return (
    <section className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/imagenes/about-img.jpeg" 
          alt="about image"
          width={500} 
          height={500}
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-base lg:text-lg mb-6">
            Mi nombre es Federico Schaufele, soy de Córdoba, Argentina, tengo 30 años y 
            actualmente vivo en Río Grande, Tierra del Fuego. Desde el comienzo de la pandemia 
            he estado estudiando programación por mi cuenta, específicamente HTML, CSS y JavaScript.
          </p>
          <p className="text-base lg:text-lg mb-6">
            En el año 2020 decidí profundizar mis estudios y me inscribí en la Tecnicatura 
            en Programación de la UTN. Soy un desarrollador web full stack con pasión por 
            crear aplicaciones web interactivas y responsivas.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiencia
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educación
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
