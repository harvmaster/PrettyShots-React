import { useState } from 'preact/hooks'
import './ImageUpload.css'
import { TargetedEvent } from 'preact/compat';

type ImageFile = {
  file: File;
  url: string;
}

export function ImageUpload() {
  const [selected, setSelected] = useState<string | undefined>()
  const [files, setFiles] = useState<ImageFile[] | undefined>()

  const handleFileChange = (e: TargetedEvent<HTMLInputElement>) => {
    if (!e.target) return
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return

    const files: ImageFile[] = []
    const fileList = e.target.files

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i)
      if (!file) break;
      if (file.type.indexOf('image') === -1) continue;
      const formatted: ImageFile = {
        file: file,
        url: URL.createObjectURL(file)
      } 
      files.push(formatted)
    }

    if (files.length === 0) return // No valid files - TODO show error

    setFiles(files)
    setSelected(files[0].url)
  }

  const previewClasses = [
    'selected'
  ]

  return (
    <>
      <div className={['grid', 'grid-cols-1', 'gap-4', 'justify-center', 'items-start'].join(' ')}>

        {!files &&
          <div className="grid md:grid-cols-3 grid-cols-1 justify-center">
            <div />
            <div className="file-upload-container order-2">
              <input className="file-upload-input" type="file" multiple onInput={handleFileChange} />
              <span className="file-upload-label">Upload an image</span>
            </div>
          </div>
        }

        <div className={['w-full grid justify-center'].join(' ')}>

          {files && 
            <div className="grid md:grid-cols-3 grid-cols-1 w-fit p-4 gap-4 rounded-xl border-2 border-slate-300 bg-teal-100">
              {files.map((file: ImageFile) => (
                <img
                  className={['image-preview', 'rounded-xl', selected === file.url ? previewClasses.join(' ') : ''].join(' ')}
                  src={file.url}
                  onClick={() => setSelected(file.url)}
                />
              ))}
              <div className={['image-preview', 'add-file-container', 'grid', 'grid-cols-1'].join(' ')}>
                <input className="file-upload-input" type="file" multiple onChange={handleFileChange} />
                <div className="grid grid-cols-1 text-2xl">
                  <span className="file-upload-label basis-full">+</span>
                  <span className="file-upload-label basis-full">Add Image</span>
                </div>
              </div> 
            </div>
          }
        </div>
      </div>
    </>
  )
}

