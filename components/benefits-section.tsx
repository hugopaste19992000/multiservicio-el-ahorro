"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Gauge, 
  Sparkles, 
  Hand, 
  Wrench,
  Route
} from "lucide-react"

const benefits = [
  {
    icon: Gauge,
    title: "Mayor estabilidad",
    description: "Control total del vehículo en cualquier condición de manejo.",
  },
  {
    icon: Shield,
    title: "Menor desgaste de llantas",
    description: "Prolonga la vida útil de tus llantas significativamente.",
  },
  {
    icon: Sparkles,
    title: "Mejor rendimiento",
    description: "Optimiza el consumo de combustible de tu vehículo.",
  },
  {
    icon: Hand,
    title: "Manejo más cómodo",
    description: "Elimina vibraciones para un viaje más placentero.",
  },
  {
    icon: Wrench,
    title: "Prevención de daños",
    description: "Protege la suspensión y componentes de dirección.",
  },
  {
    icon: Route,
    title: "Más seguridad",
    description: "Respuesta óptima en carretera y situaciones de emergencia.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Conduce con mayor seguridad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una correcta alineación y balanceo te brinda múltiples beneficios para ti y tu vehículo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
