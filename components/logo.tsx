"use client"

import { motion } from "framer-motion"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  animated?: boolean
}

export function Logo({ size = "md", showText = true, animated = true }: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg", wheel: 24 },
    md: { icon: "w-12 h-12", text: "text-xl", wheel: 36 },
    lg: { icon: "w-16 h-16", text: "text-2xl", wheel: 48 },
  }

  const currentSize = sizes[size]

  const WheelIcon = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      initial={animated ? { rotate: 0 } : undefined}
      animate={animated ? { rotate: 360 } : undefined}
      transition={animated ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        className="text-primary"
      />
      {/* Inner ring with tire tread effect */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary/60"
      />
      {/* Center hub */}
      <circle cx="50" cy="50" r="12" fill="currentColor" className="text-primary" />
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="50"
          x2={50 + 30 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 30 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-primary"
        />
      ))}
      {/* Center dot */}
      <circle cx="50" cy="50" r="5" fill="currentColor" className="text-background" />
    </motion.svg>
  )

  return (
    <div className="flex items-center gap-3">
      <div className={`${currentSize.icon} relative`}>
        <WheelIcon />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${currentSize.text} font-bold text-foreground tracking-tight leading-none`}>
            Multiservicio
          </span>
          <span className={`${currentSize.text} font-bold text-primary tracking-tight leading-none`}>
            el Ahorro
          </span>
        </div>
      )}
    </div>
  )
}
