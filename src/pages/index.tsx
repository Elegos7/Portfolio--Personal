import Head from 'next/head'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Projects from '@/components/Projects'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AchievementsSection from '@/components/AchievementsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio || Federico Schaufele</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Federico Schaufele - Full Stack Web Developer Portfolio" />
      </Head>
      
      <main className="flex min-h-screen flex-col" 
        style={{
          fontFamily: 'Open Sans, sans-serif',
          background: 'linear-gradient(rgb(12 6 0 / 37%), rgb(0 0 0 / 61%)), url(/imagenes/oscuridad.jpg) center/cover no-repeat',
          color: 'orange',
          lineHeight: 1.5,
          fontSize: '0.875rem'
        }}
      >
        <Navigation />
        
        <div className="container mx-auto px-4 py-4">
          <Hero />
          
          {/* Achievements section divider */}
          <div className="content-divider h-2 bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 my-8" />
          
          <AchievementsSection />
          
          {/* About section divider */}
          <div id="about" className="content-divider h-2 bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 my-8" />
          
          <About />
          
          {/* Projects section divider */}
          <div id="projects" className="content-divider h-2 bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 my-8" />
          
          <Projects />
          
          {/* Contact section divider */}
          <div id="contact" className="content-divider h-2 bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 my-8" />
          
          <ContactSection />
        </div>
        
        <Footer />
      </main>
    </>
  )
}
