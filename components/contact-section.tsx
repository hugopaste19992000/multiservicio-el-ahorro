"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()

const formData = new FormData(e.currentTarget)

const nombre = formData.get("name")
const telefono = formData.get("phone")
const vehiculo = formData.get("vehicle")
const servicio = formData.get("service")
const mensaje = formData.get("message")

const texto =
  " SOLICITUD DE CITA - TALLER AUTOMOTRIZ\n\n" +
  " Cliente: " + nombre + "\n" +
  " Teléfono: " + telefono + "\n" +
  " Vehículo: " + vehiculo + "\n" +
  " Servicio solicitado: " + servicio + "\n\n" +
  " Detalle del problema:\n" +
  mensaje + "\n\n" +
  "Por favor confirmar disponibilidad para agendar la cita."

const whatsappUrl =
  "https://wa.me/593983020864?text=" + encodeURIComponent(texto)

window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Listo para agendar tu cita?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Completa el formulario o contáctanos directamente. Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground text-center">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="55 1234 5678"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-foreground mb-2">
                      Tipo de vehículo
                    </label>
                    <select
                      id="vehicle"
                      name="vehicle"
                      required
                      className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="auto">Auto / Sedán</option>
                      <option value="camioneta">Camioneta / SUV</option>
                      <option value="pickup">Pickup</option>
                      <option value="camion">Camión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Servicio requerido
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="alineacion">Alineación</option>
                      <option value="balanceo">Balanceo</option>
                      <option value="Alineación y Balanceo">Alineación y Balanceo</option>
                      <option value="enllantaje">Enllantaje</option>
                      <option value="suspension">Revisión de suspensión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos más sobre tu vehículo o el problema que presentas..."
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar solicitud
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+593983020864"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono 1</p>
                  <p className="font-semibold text-foreground">098 302 0864</p>
                </div>
              </a>

              <a
                href="tel:+593995744950"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono 2</p>
                  <p className="font-semibold text-foreground">099 574 4950</p>
                </div>
              </a>

              <a
                href="https://wa.me/593983020864?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Multiservicio%20el%20Ahorro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">098 302 0864</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horario</p>
                  <p className="font-semibold text-foreground text-sm">Lun-Sáb: 8am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Google Maps - Clickable with direct link */}
            <a
              href="https://maps.google.com/?q=-0.512389,-78.574222"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-border h-[300px] relative group cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.8!2d-78.574222!3d-0.512389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNDQuNiJTIDc4wrAzNCcyNy4yIlc!5e0!3m2!1ses!2sec!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Multiservicio el Ahorro"
              />
              {/* Overlay for click indication */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 shadow-lg">
                  <MapPin className="w-5 h-5" />
                  Cómo llegar
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
