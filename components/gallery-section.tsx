"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"

const galleryItems = [
  {
    type: "video" as const,
    src: "/videos/hero-video-2.mp4",
    title: "Alineación y Balanceo Profesional",
  },
  {
    type: "video" as const,
    src: "/videos/hero-video-1.mp4",
    title: "Equipos de Alta Precisión",
  },
  {
    type: "video" as const,
    src: "/videos/hero-video-3.mp4",
    title: "Servicio Especializado",
  },
]

export function GallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Galería
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Conoce nuestro trabajo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Echa un vistazo a nuestro taller y los procesos que realizamos con cada vehículo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-video"
              onClick={() => setSelectedVideo(item.src)}
            >
              {/* Video with overflow hidden to crop watermarks */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  src={item.src}
                  className="w-[115%] h-[115%] -top-[7.5%] -left-[7.5%] absolute object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-foreground font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Cerrar video"
              >
                <X className="w-8 h-8" />
              </button>
              {/* Video cropped to hide watermarks */}
              <div className="overflow-hidden rounded-xl">
                <video
                  src={selectedVideo}
                  className="w-[115%] -ml-[7.5%] rounded-xl"
                  controls
                  autoPlay
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
