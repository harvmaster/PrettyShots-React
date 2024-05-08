import { useState } from 'preact/hooks'
import './ImageUpload.css'

export function ImageUpload() {
  const [file, setFile] = useState<File | undefined>()

  const handleFileChange = (e: Event) => {
    if (!e.target) return
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return

    setFile(e.target.files[0])
  }


  const getWidth = (f: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (!e.target) return
        if (!(e.target instanceof FileReader)) return
        const img = new Image()
        img.onload = () => {
          resolve(img.width)
        }
        img.src = e.target.result as string
      }
      reader.readAsDataURL(f)
    })
  }

  const getImageWidth = async () => {
    if (!file) return
    const width = await getWidth(file)
    console.log(width)
  }

  const getImageDimenstions = (f: File): Promise<{ width: number, height: number }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (!e.target) return
        if (!(e.target instanceof FileReader)) return
        const img = new Image()
        img.onload = () => {
          resolve({
            width: img.width,
            height: img.height
          })
        }
        img.src = e.target.result as string
      }
      reader.readAsDataURL(f)
    })
  }

  const calculateContainerWidth = async (ratio: number) => {
    if (!file) return
    const { width, height } = await getImageDimenstions(file)
    console.log(width, height)
    const containerWidth = width * ratio
    console.log(containerWidth)

  }


  return (
    <>
      <div class="file-upload-container">
        <input class="file-upload-input" type="file" onChange={handleFileChange} />
        <span class="file-upload-label">Upload an image</span>
      </div>

      <div class="image-preview-container">
        {file && <img class="image-preview" src={URL.createObjectURL(file)} onLoad={() =>  calculateContainerWidth(1) }/>}
      </div>
    </>
  )
}
