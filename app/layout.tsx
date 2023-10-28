'use client'
import './globals.css'
import { DarkModeProvider } from './dark_mode_context'
import RootChild from './layout_child';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DarkModeProvider>
      <RootChild>
        {children}
      </RootChild>
    </DarkModeProvider>
    
  )
}
