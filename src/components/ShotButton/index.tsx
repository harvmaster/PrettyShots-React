import { useRef } from "preact/hooks"

export function ShotButton() {
  const animationColors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#9400D3'
  ]

  const getRandomColor = (existingColors: string[]): string => {
    const color = animationColors[Math.floor(Math.random() * animationColors.length)]
    if (existingColors.includes(color)) {
      return getRandomColor(existingColors)
    }
    return color
  }

  const buttonBackgroundColors = useRef<string[]>([])
  buttonBackgroundColors.current.push(getRandomColor(buttonBackgroundColors.current))
  buttonBackgroundColors.current.push(getRandomColor(buttonBackgroundColors.current))
  buttonBackgroundColors.current.push(getRandomColor(buttonBackgroundColors.current))

  return (
    <>
      <div style={{ backgroundImage: `linear-gradient(90deg, ${buttonBackgroundColors.current[0], buttonBackgroundColors.current[1], buttonBackgroundColors.current[2] })`, padding: '1em' }}>
        <button>my button</button>
      </div>
    </>
  )
}