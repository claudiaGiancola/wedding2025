import './App.css'

import { SimpleFooter } from './components/footer';
import { ImgWithBlurredCaption, ImgWithText } from './components/image';
import { StickyNavbar } from './components/navbar';
import { TabsDefault } from './components/tabs';
import { TimelineWithIcon } from './components/timeline';

function App() {

  return (
    <>
      <StickyNavbar />

      <div className='relative z-0 flex flex-col items-center justify-center gap-10'>

        <ImgWithBlurredCaption />

        <TimelineWithIcon />

        <ImgWithText />

      </div>

      <SimpleFooter />

    </>
  )
}

export default App
