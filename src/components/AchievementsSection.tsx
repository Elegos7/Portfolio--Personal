'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Achievement {
  metric: string
  value: string
  postfix?: string
}

const achievementsList: Achievement[] = [
  {
    metric: "Proyectos",
    value: "10",
    postfix: "+"
  },
  {
    metric: "Años de Experiencia",
    value: "3",
    postfix: "+"
  },
  {
    metric: "Clientes Satisfechos",
    value: "8"
  },
  {
    metric: "Tecnologías",
    value: "15",
    postfix: "+"
  }
]

// Simple animated number component
const AnimatedNumber = ({ value, postfix = "" }: { value: string, postfix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const targetValue = parseInt(value)

  useEffect(() => {
    let startTime: number
    const duration = 2000 // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const currentValue = Math.floor(progress * targetValue)
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [targetValue])

  return (
    <span className="text-white text-4xl font-bold">
      {displayValue}{postfix}
    </span>
  )
}

export default function AchievementsSection() {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between"
        style={{
          background: 'linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 20%)), rgba(51, 53, 63, 0.8)',
          border: '1px solid #cd4545'
        }}
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumber value={achievement.value} postfix={achievement.postfix} />
            </h2>
            <p className="text-[#ADB7BE] text-base" style={{ color: '#f5f5f5' }}>
              {achievement.metric}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
