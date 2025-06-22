import './App.css'
import { Typography } from "@material-tailwind/react";
import { SimpleFooter } from './components/footer';
import { StickyNavbar } from './components/navbar';
import { TimelineWithIcon } from './components/timeline';
import { GiftButtons } from './components/giftButtons';

import invitoMatrimonio from './assets/Invito Matrimonio cropped.jpeg';
import invitoMatrimonioClaudia from './assets/Invito Matrimonio regalo modified - Claudia.png';
import invitoMatrimonioGiada from './assets/Invito Matrimonio regalo modified - Giada.png';

import Countdown from './components/countdown';

function App() {

  return (

    <div className='wrapper'>

      <StickyNavbar />

      <section id="top-illustration" className="gap-0 scroll-mt-20 header-section">

        <Countdown />

        <img src={invitoMatrimonio} className='background' />

        {/* <img src={invitoMatrimonioClaudia} className='foreground foreground-L hover:translate-x-[-50vw] transition-transform duration-600'/>
        <img src={invitoMatrimonioGiada} className='foreground foreground-R'/> */}

      </section>

      <div className="relative z-0 flex flex-col items-center justify-center bg-white">

        <section id="timeline" className="gap-0 scroll-mt-20 mt-8 w-full">

          <Typography variant="lead" color="grey" className="text-2xl sm:text-4xl bg-orange-50 p-4 text-blue-gray-800">
            Timeline
          </Typography>

          <TimelineWithIcon />
        </section>

        <section id="regalo" className="gap-0 mt-12 scroll-mt-20 mb-6 sm:mb-8 w-full">
          <Typography variant="lead" color="grey" className="text-2xl sm:text-4xl bg-orange-50 p-4 text-blue-gray-800">
            Regalaci...
          </Typography>
        </section>
        <GiftButtons />

      </div>

      <div className='footer-section background-2'>
        <img src={invitoMatrimonioClaudia} />
        <div className='bg-[#ffe7d1] pt-24'>
          <SimpleFooter />
        </div>
        <img src={invitoMatrimonioGiada} />
      </div>


    </div>
  )
}

export default App
