import './App.css'
import Countdown from './components/countdown';
import MapWithMarker from './components/map';
import { StepperWithContent } from './components/stepper';
import { TabsDefault } from './components/tabs';

function App() {

  return (
    <>
      <Countdown />
      
      <MapWithMarker
          position={[42.15874995882924, 12.224626909233246]}
          popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
          markerColour="green"
        />

        <MapWithMarker
          position={[42.16498943948103, 12.229883605276306]}
          popupText="RICEVIMENTO: Il Frantoio, Via Sutri, 3, 00069 Trevignano Romano RM, Italy"
          markerColour="gold"
        />

      <TabsDefault />
      <StepperWithContent />
    </>
  )
}

export default App
