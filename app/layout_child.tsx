import { IsDarkModeContext } from "@/dark_mode_context"
import { Inter } from "next/font/google"
import { useContext } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function RootChild({
  children,
}: {
  children: React.ReactNode
}) {
  const darkModeContext = useContext(IsDarkModeContext)
  var darkMode = darkModeContext.enabled
  const htmlClass = darkMode ? "dark" : ""
  
  const bodyClassName = 'bg-neutral-100 dark:bg-neutral-900 ' + inter.className
return (


      <html lang="th" className={htmlClass}>

        <body className={bodyClassName}>
          <div className='bg-neutral-100 dark:bg-neutral-900'>
            {children}
          </div>
        </body>
    </html>

);
}
