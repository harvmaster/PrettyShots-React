import { useState } from 'preact/hooks'
import './ImageUpload.css'

type ImageFile = {
  file: File;
  url: string;
}

export function ImageUpload() {
  const [selected, setSelected] = useState<string | undefined>()
  const [files, setFiles] = useState<ImageFile[] | undefined>()

  const handleFileChange = (e: Event) => {
    if (!e.target) return
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return

    const files: ImageFile[] = []
    const fileList = e.target.files
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i)
      if (!file) break;
      const formatted: ImageFile = {
        file: file,
        url: URL.createObjectURL(file)
      } 
      files.push(formatted)
    }

    console.log(files)

    setFiles(files)
    setSelected(files[0].url)
  }

  const previewClasses = [
    'selected'
  ]

  return (
    <>
      <div className={['grid', 'grid-cols-1', 'gap-4', 'justify-center', 'items-start'].join(' ')}>
        <div class="grid md:grid-cols-3 grid-cols-1 justify-center">
          <div />
          <div class="file-upload-container order-2">
            <input class="file-upload-input" type="file" multiple onChange={handleFileChange} />
            <span class="file-upload-label">Upload an image</span>
          </div>
        </div>

        <div className={['w-full grid justify-center'].join(' ')}>

        {files && 
          <div className="grid md:grid-cols-3 grid-cols-1 w-fit p-4 gap-4 rounded-xl border-2 border-slate-300 bg-teal-100">
            {files.map((file: ImageFile) => (
              <img
              className={['image-preview', 'rounded-xl', selected == file.url ? previewClasses : ''].join(' ')}
              src={file.url}
              onClick={() => setSelected(file.url)}
              />
            ))}
          </div>
        }
        </div>
      </div>
    </>
  )
}
