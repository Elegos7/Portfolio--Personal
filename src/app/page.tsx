'use client'
import { useState } from 'react'

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header id="home" className="relative h-screen w-full overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-4 flex justify-between items-center h-20">
          <img
            src="/imagenes/Logosinfondo.png"
            alt="logo"
            className="h-10 object-contain"
          />
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setNavOpen(!navOpen)}
          >
            <i className="fas fa-bars" />
          </button>
          <ul
            className={`
              absolute top-full left-0 w-full bg-black bg-opacity-70 md:bg-transparent
              md:static md:flex md:space-x-8 text-white md:text-white text-lg transition-all
              ${navOpen ? 'block' : 'hidden'}
            `}
          >
            {['resenia','proyect','interes'].map((sec, i) => {
              const labels = ['Descripcion','Recientes','Contactese']
              return (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    className="block py-2 md:py-0 px-6 hover:text-primary"
                  >
                    {labels[i]}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* VIDEO DE FONDO */}
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-hero-gradient z-10 pointer-events-none" />

      {/* CONTENIDO HERO */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between h-full text-center md:text-left px-6 md:px-20">
        {/* HERO INFO */}
        <article className="flex-1">
          <div className="mb-4">
            <div className="w-16 h-1 bg-primary mb-4 inline-block" />
          </div>
          <h1 className="text-5xl md:text-7xl font-title text-white mb-4">
            Federico Schaufele
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-6">Freelancer</p>
          <a
            href="/pdf/SchaufeleCV.pdf"
            download
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md"
          >
            Descargue mi CV
          </a>
          <ul className="flex justify-center md:justify-start space-x-6 mt-8 text-2xl">
            <li>
              <a
                href="https://www.facebook.com/federico.schaufele.9/"
                target="_blank"
                className="hover:text-primary"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="hover:text-primary"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </article>

        {/* HERO IMAGE */}
        <article className="flex-1 mb-10 md:mb-0 relative">
          <img
            src="/imagenes/Secret_Fede.jpeg"
            loading="lazy"
            alt="Federico Schaufele"
            className="rounded-md border-4 border-primary shadow-card-glow mx-auto md:mx-0"
          />
        </article>
      </div>
    </header>
  )
}
