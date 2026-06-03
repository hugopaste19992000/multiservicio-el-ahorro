"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Agenda tu revisión hoy y maneja con mayor seguridad
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 text-pretty">
            No esperes a que los problemas empeoren. Contáctanos ahora y recibe atención profesional para tu vehículo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="tel:+593983020864" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://wa.me/593983020864?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Multiservicio%20el%20Ahorro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://maps.google.com/?q=-0.512389,-78.574222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Cómo llegar
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
