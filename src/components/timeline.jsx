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
    BellIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
  } from "@heroicons/react/24/solid";
   
  export function TimelineWithIcon() {
    return (
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <CurrencyDollarIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
   
  export function ActivitiesTimeline() {
    return (
      <div className="w-[25rem]">
        <Timeline>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
                <BellIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  $2400, Design changes
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  22 DEC 7:20 PM
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <ArchiveBoxIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  New order #1832412
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  21 DEC 11 PM
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <CurrencyDollarIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  Payment completed for order #4395133
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  20 DEC 2:20 AM
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }