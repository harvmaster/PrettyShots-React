import { useState } from 'preact/hooks'
import './ImageUpload.css'

export function ImageUpload() {
  const [selected, setSelected] = useState<File | undefined>()
  const [files, setFiles] = useState<File[] | undefined>()

  const handleFileChange = (e: Event) => {
    if (!e.target) return
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return

    const files: File[] = []
    const fileList = e.target.files
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i)
      if (!file) break;
      files.push(file)
    }

    console.log(files)

    setFiles(files)
    setSelected(files[0])
  }

  const previewClasses = [
    'selected'
  ]

  return (
    <>
      <div class="grid padding-sm md:grid-cols-3 grid-cols-1 justify-center">
        <div />
        <div class="file-upload-container size-max order-2">
          <input class="file-upload-input" type="file" multiple onChange={handleFileChange} />
          <span class="file-upload-label">Upload an image</span>
        </div>
      </div>

      {files && 
        <div className="grid md:grid-cols-3 grid-cols-1 padding-sm gap-4 image-preview-container rounded-xl border-2 border-slate-300">
          {files.map((file: File) => (
            <img
              className={['image-preview', 'rounded-xl', selected == file ? previewClasses : ''].join(' ')}
              src={URL.createObjectURL(file)}
              onClick={() => setSelected(file)}
            />
          ))}
        </div>
      }
    </>
  )
}
