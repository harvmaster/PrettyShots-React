import { useState } from 'preact/hooks'

export function ImageUpload() {
  const [file, setFile] = useState<File | undefined>()

  const handleFileChange = (e: Event) => {
    if (!e.target) return
    if (!(e.target instanceof HTMLInputElement)) return
    if (!e.target.files) return

    setFile(e.target.files[0])
  }

  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
    </>
  )
}
