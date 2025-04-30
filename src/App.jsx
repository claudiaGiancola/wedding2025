import './App.css'
import Countdown from './components/countdown';
import { StepperWithContent } from './components/stepper';
import { TabsDefault } from './components/tabs';

function App() {

  return (
    <>
      <Countdown />
      <TabsDefault />
      <StepperWithContent />
    </>
  )
}

export default App
