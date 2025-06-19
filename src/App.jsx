import './App.css'

import { SimpleFooter } from './components/footer';
import { ImgWithBlurredCaption, ImgWithText } from './components/image';
import { StickyNavbar } from './components/navbar';
import { HeroParallax } from './components/parallax';
import { TimelineWithIcon } from './components/timeline';

function App() {

  return (

    <div>

      <StickyNavbar />

      <section id="top-illustration" className="gap-0 scroll-mt-16">
        <HeroParallax />
      </section>

      <div className="relative z-0 flex flex-col items-center justify-center">

        {/* <ImgWithBlurredCaption /> */}

        <section id="timeline" className="gap-0 scroll-mt-16">
          <TimelineWithIcon />
        </section>

        <section id="regalo" className="gap-0 mt-10 scroll-mt-16">
          <ImgWithText />
        </section>
      </div>

      <SimpleFooter />

    </div>
  )
}

export default App
