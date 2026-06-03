"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    vehicle: "Toyota Camry 2022",
    rating: 5,
    text: "Excelente servicio. Mi auto vibraba mucho al manejar en carretera y después del balanceo quedó perfecto. El personal muy profesional y el precio justo. Definitivamente regresaré.",
  },
  {
    name: "María González",
    vehicle: "Honda CR-V 2021",
    rating: 5,
    text: "Llevé mi camioneta porque se iba hacia la derecha y me explicaron todo el proceso. El servicio fue rápido y ahora maneja derecho. Muy recomendados.",
  },
  {
    name: "Roberto Sánchez",
    vehicle: "Ford F-150 2020",
    rating: 5,
    text: "Tengo una flotilla de 5 camionetas y todas las llevo aquí. Siempre atienden rápido y el trabajo queda perfecto. El mejor taller de alineación de la zona.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                {`"${testimonial.text}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
