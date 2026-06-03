"use client"

import { MessageCircle, Phone } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:+593983020864"
        className="w-14 h-14 bg-secondary border border-border rounded-full flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors shadow-lg"
        aria-label="Llamar ahora"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/593983020864?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Multiservicio%20el%20Ahorro"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#20BD5A] transition-colors shadow-lg"
        aria-label="Enviar WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
