import React from "react"

export type ButtonProps = {
  variant?: 'primary' | 'secondary',
  children: React.ReactNode,
  size?: 'sm' | 'md' | 'lg'
} & Omit<React.ComponentProps<'button'>, 'children'>