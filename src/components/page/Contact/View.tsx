import { useTheme } from "next-themes"
import { VFC } from "react"


import { Spacer } from "@/components/ui/Spacer"


const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]

export const TopPageView: VFC = () => {
  const { theme, setTheme } = useTheme()

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value)
  }

  return (
    <main
      className="flex flex-col justify-center items-center p-4 h-screen"
      onChange={handleChange}
    >
      <Spacer size={8} />
      <div className="text-center prose">
        <h1>Contáctanos!</h1>
      </div>
      <Spacer size={8} />
    </main>
  )
}
