import React from "react"

export type CircleProps = {
  variant?: 'fill' | 'outline',
  color?: React.CSSProperties['color']
  size?: number
}

export type FloatProps = {
  className: string,
  children: React.ReactNode
}