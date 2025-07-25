'use client'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function ContactSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email: (e.target as any).email.value,
      subject: (e.target as any).subject.value,
      message: (e.target as any).message.value,
    }
    
    // Here you would typically send the data to your API
    console.log('Form data:', data)
    setEmailSubmitted(true)
  }

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Pongámonos en contacto
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estoy actualmente buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta.
          Ya sea que tengas una pregunta o solo quieras saludar, ¡haré mi mejor esfuerzo para responderte!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com">
            <FaGithub className="h-12 w-12 text-gray-300 hover:text-white transition-colors duration-300" />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedin className="h-12 w-12 text-gray-300 hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡Email enviado exitosamente!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Solo saludando"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hablemos sobre..."
                rows={6}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 hover:bg-red-700 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
