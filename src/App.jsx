import './App.css'
import { Typography } from "@material-tailwind/react";
import { SimpleFooter } from './components/footer';
import { ImgWithText } from './components/image'
import { StickyNavbar } from './components/navbar';
import { HeroParallax } from './components/parallax';
import { TimelineWithIcon } from './components/timeline';
import { GiftButtons } from './components/giftButtons';

function App() {

  return (

    <div>

      <StickyNavbar />

      <section id="top-illustration" className="gap-0 scroll-mt-20">
        <HeroParallax />
      </section>

      <div className="relative z-0 flex flex-col items-center justify-center">

        <section id="timeline" className="gap-0 scroll-mt-20 mt-6">
          
          <Typography variant="lead" color="grey" className="text-2xl sm:text-4xl bg-orange-50 p-4 w-screen">
            Timeline
          </Typography>

          <TimelineWithIcon />
        </section>

        <section id="regalo" className="gap-0 mt-10 scroll-mt-20">

          <Typography variant="lead" color="grey" className="text-2xl sm:text-4xl bg-orange-50 p-4 w-screen">
            Regalaci...
          </Typography>

          <GiftButtons />

        </section>
      </div>

      <SimpleFooter />

    </div>
  )
}

export default App
