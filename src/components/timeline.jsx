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
    <div className="px-8">
      <Timeline className="">
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HeartIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="text-left">
              6 Settembre | 16:30 | Cerimonia
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pl-8 pb-8 flex flex-col">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
            <MapWithMarker
              // position={[42.15874995882924, 12.224626909233246]}
              // popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
              // markerColour="green"
              srcgooglemap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5915.209887606379!2d12.22462!3d42.15874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f48ee4325b191%3A0x5160683cbff8a03!2sVia%20della%20Rena%2C%2099%2C%2000069%20Trevignano%20Romano%20RM%2C%20Italia!5e0!3m2!1sit!2suk!4v1750257112136!5m2!1sit!2suk"
            />
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CakeIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="text-left">
              6 Settembre | 18:00 | Ricevimento
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pl-8 pb-8 flex flex-col">
            {/* <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography> */}
            <MapWithMarker
              // position={[42.16498943948103, 12.229883605276306]}
              // popupText="RICEVIMENTO: Il Frantoio, Via Sutri, 3, 00069 Trevignano Romano RM, Italy"
              // markerColour="gold"
              srcgooglemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.313125639062!2d12.227272276909249!3d42.16498327121171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f48f37bd8c223%3A0x118ccff4c129e3fa!2sIl%20Frantoio!5e0!3m2!1sit!2suk!4v1750254856932!5m2!1sit!2suk"
            />
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <MusicalNoteIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="text-left">
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
            <Typography variant="h5" color="blue-gray" className="text-left">
              7 Settembre | 11:30 | Rinfresco
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pl-8 pb-8 flex flex-col">
            <Typography color="gray" className="text-gray-600 text-left pb-4">
              Per chi ha ancora energie e voglia di festeggiare (e magari fare un bagno al lago)!
            </Typography>
            <MapWithMarker
              // position={[42.15874995882924, 12.224626909233246]}
              // popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
              // markerColour="green"
              srcgooglemap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5915.209887606379!2d12.22462!3d42.15874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f48ee4325b191%3A0x5160683cbff8a03!2sVia%20della%20Rena%2C%2099%2C%2000069%20Trevignano%20Romano%20RM%2C%20Italia!5e0!3m2!1sit!2suk!4v1750257112136!5m2!1sit!2suk"
            />
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <SparklesIcon className="h-6 w-6" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="text-left">
              Saluti!
            </Typography>
          </TimelineHeader>
          {/* <TimelineBody className="flex flex-row">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography>
          </TimelineBody> */}
        </TimelineItem>
      </Timeline>
    </div>
  );
}