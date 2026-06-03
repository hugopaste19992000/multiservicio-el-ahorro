"use client"

import { motion } from "framer-motion"
import { 
  AlertTriangle, 
  MoveHorizontal, 
  Disc3, 
  Car, 
  RotateCcw,
  CircleAlert
} from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "El volante vibra",
    description: "Vibraciones al conducir indican desbalanceo en las llantas.",
  },
  {
    icon: MoveHorizontal,
    title: "El vehículo se va hacia un lado",
    description: "Problemas de alineación hacen que el auto no vaya recto.",
  },
  {
    icon: Disc3,
    title: "Desgaste irregular en llantas",
    description: "Las llantas se desgastan de forma desigual por mala alineación.",
  },
  {
    icon: Car,
    title: "Inestabilidad al manejar",
    description: "Sientes que el vehículo no responde correctamente.",
  },
  {
    icon: RotateCcw,
    title: "Cambiaste llantas recientemente",
    description: "Siempre requiere alineación y balanceo después del cambio.",
  },
  {
    icon: CircleAlert,
    title: "Golpeaste un hueco o bordillo",
    description: "Los impactos desajustan la geometría del vehículo.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-sm font-medium mb-4">
            Señales de alerta
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Cuándo necesitas alineación o balanceo?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Si notas alguno de estos síntomas, es momento de visitar nuestro taller.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-secondary/50 rounded-xl border border-border"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center shrink-0">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
