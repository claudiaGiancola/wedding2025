import './App.css'

import { SimpleFooter } from './components/footer';
import { ImgWithBlurredCaption, ImgWithText } from './components/image';
import { StickyNavbar } from './components/navbar';
import { TabsDefault } from './components/tabs';
import { TimelineWithIcon } from './components/timeline';
import invitoMatrimonio from './assets/Invito Matrimonio cropped.jpeg';


function App() {

  const backgroundStyle = {
    backgroundImage: `url(${invitoMatrimonio})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };
  
  return (
    <div style={backgroundStyle}>

      <StickyNavbar />

      <div className="relative z-0 flex flex-col items-center justify-center">

        <section id="top-illustration" className="gap-0 scroll-mt-16">
          <ImgWithBlurredCaption />
        </section>

        <section id="timeline" className="gap-0 mt-10 scroll-mt-16">
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
