"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Cpu, 
  Clock, 
  Truck, 
  Award,
  BadgeDollarSign
} from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Personal capacitado",
    description: "Técnicos certificados con años de experiencia en el ramo automotriz.",
  },
  {
    icon: Cpu,
    title: "Equipos modernos",
    description: "Tecnología de última generación para diagnósticos precisos.",
  },
  {
    icon: Clock,
    title: "Atención rápida",
    description: "Servicio eficiente sin comprometer la calidad del trabajo.",
  },
  {
    icon: Truck,
    title: "Todo tipo de vehículos",
    description: "Capacidad para atender desde autos compactos hasta vehículos pesados.",
  },
  {
    icon: Award,
    title: "Trabajo profesional",
    description: "Garantizamos cada servicio realizado en nuestro taller.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios competitivos",
    description: "La mejor relación calidad-precio del mercado.",
  },
]

export function WhyUsSection() {
  return (
    <section id="porque-elegirnos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Tu confianza es nuestra prioridad
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Con más de 15 años de experiencia, nos hemos consolidado como líderes en servicios de alineación y balanceo. Nuestro compromiso es brindarte un servicio excepcional que supere tus expectativas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Vehículos atendidos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
