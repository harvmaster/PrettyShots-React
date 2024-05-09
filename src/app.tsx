import { useState } from 'preact/hooks'
import './app.css'

import { ImageUpload } from './components/ImageUpload'
import { ShotButton } from './components/ShotButton'

export function App() {

  return (
    <>
      <div className="size-full grid grid-cols-1 justify-center items-start">
        <div class="grid justify-center">
          <div class="w-fit text-6xl font-black p-2 rainbow-text">
            PrettyShots
          </div>
        </div>

        <div className="w-full">
          <ImageUpload />
        </div>

        <ShotButton />
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact test 2</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p> */}
    </>
  )
}
