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

  type HSLColor = {
    hue: number
    saturation: number
    lightness: number
    result: string
  }

  const generateHSLColor = (): HSLColor => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = 90 - Math.floor(Math.random() * 30)
    const lightness = 90 - Math.floor(Math.random() * 40)
    return {
      hue,
      saturation,
      lightness,
      result: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }
  }

  const shiftHue = (color: HSLColor, shift: number): HSLColor => {
    const newHue = color.hue + shift
    return {
      hue: newHue,
      saturation: color.saturation,
      lightness: color.lightness,
      result: `hsl(${newHue}, ${color.saturation}%, ${color.lightness}%)`
    }
  }

  const shiftColor = (color: HSLColor, shift: number): HSLColor => {
    const toShift = Math.floor(Math.random() * 2)
    console.log(toShift)
    const hue = toShift == 0 ? color.hue + shift : color.hue
    const saturation = toShift == 1 ? color.saturation + shift : color.saturation
    const lightness =  color.lightness
    // const lightness = toShift == 2 ? color.lightness + shift : color.lightness

    return {
      hue,
      saturation,
      lightness,
      result: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }
  }

  const getRandomColors = (): string[] => {
    const base = generateHSLColor()
    const colors = [base, shiftColor(base, 30), shiftColor(base, 60)]
    return colors.map(color => color.result)
  }

  const buttonBackgroundColors = useRef<string[]>([])
  buttonBackgroundColors.current = getRandomColors()

  const buttonStyles = {
    background: `linear-gradient(90deg, ${buttonBackgroundColors.current[0]}, ${buttonBackgroundColors.current[1]}, ${buttonBackgroundColors.current[2]})`,
    padding: '1em',
    border: 'none',
    borderRadius: '0.5em',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: 'fit-content'
  }

  return (
    <>
      <div style={{ ...buttonStyles }}>
      {/* <div style={{ backgroundImage: `linear-gradient(90deg, ${buttonBackgroundColors.current[0], buttonBackgroundColors.current[1]})`, padding: '1em' }}> */}
        <button>my button</button>
      </div>
    </>
  )
}