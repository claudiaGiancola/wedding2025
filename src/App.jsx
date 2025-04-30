import './App.css'
import { CarouselCustomNavigation, CarouselWithContent } from './components/carousel';
import CollapseDefault from './components/collapse';
import { DialogWithBillingForm } from './components/dialog';
import { SimpleFooter } from './components/footer';
import { ImgWithBlurredCaption } from './components/image';
import { StickyNavbar } from './components/navbar';
import { StepperWithContent } from './components/stepper';
import { TabsDefault } from './components/tabs';
import { TimelineWithIcon } from './components/timeline';

function App() {

  return (
    <>
      <StickyNavbar />
      
      <ImgWithBlurredCaption />
      
      <TimelineWithIcon />
      <TabsDefault />

      <StepperWithContent />

      <CollapseDefault />

      <DialogWithBillingForm />

      <CarouselCustomNavigation />
      <CarouselWithContent />

      <SimpleFooter />
    </>
  )
}

export default App
