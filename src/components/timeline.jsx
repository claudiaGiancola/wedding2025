import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  TimelineBody,
} from "@material-tailwind/react";

import {
  HomeIcon,
  CakeIcon,
  FilmIcon,
  FireIcon,
  GiftIcon,
  HeartIcon,
  CameraIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PhotoIcon,
  SparklesIcon,
  StarIcon,
  MoonIcon,
  UserGroupIcon,
  UsersIcon,
  MusicalNoteIcon,
  HomeModernIcon
} from "@heroicons/react/24/solid";

import MapWithMarker from './map';

export function TimelineWithIcon() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HeartIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              6 Settembre | 16:30 | Cerimonia
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
            <MapWithMarker
              position={[42.15874995882924, 12.224626909233246]}
              popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
              markerColour="green"
            />
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CakeIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              6 Settembre | 18:00 | Ricevimento
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
            <MapWithMarker
              position={[42.16498943948103, 12.229883605276306]}
              popupText="RICEVIMENTO: Il Frantoio, Via Sutri, 3, 00069 Trevignano Romano RM, Italy"
              markerColour="gold"
            />
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <MusicalNoteIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              6 Settembre | 22:00 - 01:30 | Party
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              7 Settembre | 11:30 | Brunch (e bagno al lago!)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div className="flex flex-col items-start gap-2">
              <Typography color="gray" className="text-gray-600">
                Per chi ha ancora energie e voglia di festeggiare!
              </Typography>
              <MapWithMarker
                position={[42.15874995882924, 12.224626909233246]}
                popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
                markerColour="green"
              />
            </div>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <SparklesIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Saluti!
            </Typography>
          </TimelineHeader>
          <TimelineBody className="flex flex-row">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}