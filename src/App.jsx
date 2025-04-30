import './App.css'
import { CarouselCustomNavigation, CarouselWithContent } from './components/carousel';
import CollapseDefault from './components/collapse';
import { DialogWithBillingForm } from './components/dialog';
import { SimpleFooter } from './components/footer';
import { ImgWithBlurredCaption } from './components/image';
import { StickyNavbar } from './components/navbar';
import { TabsDefault } from './components/tabs';
import { TimelineWithIcon } from './components/timeline';

function App() {

  return (
    <>
      <StickyNavbar />

      <div className='relative z-0 flex flex-col items-center justify-center gap-4'>

      <ImgWithBlurredCaption />

        <TimelineWithIcon />

      </div>

        {/* <TabsDefault /> */}

        <CollapseDefault />

        <DialogWithBillingForm />

        <CarouselCustomNavigation />
        <CarouselWithContent />
        

      <SimpleFooter />
    </>
  )
}

export default App
