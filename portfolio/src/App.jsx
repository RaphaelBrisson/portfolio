import { useState } from 'react'

import { Container, Wrapper } from "./components/Layout";
import Header from './components/Header'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Container className="" >
        <Wrapper className="">
          <div id='introduction' className='pt-[100px]'></div>
          <p className='block '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
          <p className='block mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem atque. Nemo eligendi consequatur blanditiis, veritatis commodi molestiae exercitationem itaque mollitia ad ab. Hic quae eos dolor harum atque commodi!</p>
        </Wrapper>
      </Container>
      {/* <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-red-500">test tailwind</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-black font-extrabold font-bold'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
