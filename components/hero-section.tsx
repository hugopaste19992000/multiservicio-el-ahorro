"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Clock, Award, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Cropped to hide watermarks */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/videos/hero-video-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] object-cover scale-110"
        />
        {/* Clean gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Animated lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground/10 backdrop-blur-md border border-foreground/20 rounded-full text-foreground text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Taller Automotriz Especializado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
          >
            <span className="block">Precisión, seguridad y</span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-primary inline-block"
            >
              confianza
            </motion.span>
            <span className="block">para tu vehículo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Servicio profesional de alineación computarizada, balanceo y enllantaje para autos, camionetas y vehículos pesados. Más de 15 años de experiencia nos respaldan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button size="lg" asChild className="text-base px-10 py-7 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              <a href="#contacto" className="flex items-center gap-2">
                Agendar cita
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-10 py-7 text-lg rounded-full border-foreground/30 hover:bg-foreground/10 backdrop-blur-sm">
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
          </motion.div>

          {/* Trust badges with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {[
              { icon: Shield, title: "Garantía", subtitle: "En todos los servicios" },
              { icon: Clock, title: "Servicio Rápido", subtitle: "Sin largas esperas" },
              { icon: Award, title: "+15 Años", subtitle: "De experiencia" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 bg-foreground/5 backdrop-blur-md rounded-2xl border border-foreground/10"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#servicios"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Descubre más</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}
