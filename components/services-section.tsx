"use client"

import { motion } from "framer-motion"
import { 
  Target, 
  CircleDot, 
  Disc, 
  Settings, 
  Car, 
  Truck,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Target,
    title: "Alineación Computarizada",
    description: "Sistema de alineación de última generación para máxima precisión en todos los ángulos de dirección.",
  },
  {
    icon: CircleDot,
    title: "Balanceo de Llantas",
    description: "Eliminamos vibraciones y desgaste irregular con equipos de balanceo de alta precisión.",
  },
  {
    icon: Disc,
    title: "Enllantaje",
    description: "Montaje profesional de llantas con herramientas especializadas que protegen tus rines.",
  },
  {
    icon: Settings,
    title: "Revisión de Suspensión",
    description: "Diagnóstico completo del sistema de suspensión para detectar y prevenir problemas.",
  },
  {
    icon: Car,
    title: "Vehículos Livianos",
    description: "Servicio especializado para autos y camionetas de todo tipo y marca.",
  },
  {
    icon: Truck,
    title: "Vehículos Pesados",
    description: "Equipos y experiencia para camiones, autobuses y vehículos de carga pesada.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluciones profesionales para tu vehículo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos servicios integrales de alineación y balanceo con tecnología de punta para todo tipo de vehículos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {service.description}
              </p>
              <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                <a href="#contacto" className="flex items-center gap-2">
                  Solicitar servicio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
