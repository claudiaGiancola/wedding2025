import React from "react";
import {
  Avatar,
  Card,
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function ModalWithImage({ imgSrc, textHeader, nome, iban, banca }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>

      <Card className="h-64 w-80 sm:w-96 sm:h-72 cursor-pointer overflow-hidden transition-opacity hover:border-4 hover:border-solid hover:border-orange-500" onClick={handleOpen}>
        <Typography
          variant="h4"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-black/60 px-4 py-1 rounded"
        >
          {textHeader}
        </Typography>
        <img alt="gift" className="h-full w-full object-cover object-center" src={imgSrc} />
      </Card>
      <Dialog size="l" open={open} handler={handleOpen}>
        <DialogHeader className="pb-0 flex justify-between">
          <Typography variant="h3" className="px-[8%]">
            {textHeader}
          </Typography>
          <Button variant="outlined" color="green" onClick={handleOpen}>
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </Button>
        </DialogHeader>
        <DialogBody>
          <div className="flex items-center gap-6">
            <img
              alt="nature"
              className="h-[36rem] w-[60%] rounded-lg object-cover object-center"
              src={imgSrc}
            />
            <div className="flex flex-col justify-center gap-8">
              <div>
                <Typography variant="paragraph" color="gray" className="font-normal">
                  NOME
                </Typography>
                <Typography variant="h4" color="blue-gray" className="font-medium">
                  {nome}
                </Typography>
              </div>
              <div>
                <Typography variant="paragraph" color="gray" className="font-normal">
                  IBAN
                </Typography>
                <Typography variant="h4" color="blue-gray" className="font-medium">
                  {iban}
                </Typography>
              </div>
              <div>
                <Typography variant="paragraph" color="gray" className="font-normal">
                  BANCA
                </Typography>
                <Typography variant="h4" color="blue-gray" className="font-medium">
                  {banca}
                </Typography>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export function DialogDefault() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="opacity-90 bg-gradient-to-r from-green-800 to-green-500 text-white hover:from-orange-600 hover:to-orange-200 hover:text-black">
        <Typography
          className="text-2xl normal-case"
        >
          Clicca qui per regalarci
        </Typography>
        <Typography
          className="text-2xl normal-case"
        >
          un'esperienza indimenticabile!
        </Typography>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col items-center justify-center h-full">
          <DialogHeader>Per la nostra luna di miele in Giappone</DialogHeader>
          <DialogBody>
            <Typography>
              <div>DATI BANCA:</div>
              <div>NOME:</div>
              <div>IBAN:</div>
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Chiudi</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}

export function DialogWithBillingForm() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Dialog With Billing Form
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Link Payment Card
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Complete the form below with your card details to link your card.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <Button
            fullWidth
            variant="outlined"
            className="h-12 border-blue-500 focus:ring-blue-100/50"
          >
            <img
              src="/icons/Paypal icon.svg"
              className="mx-auto grid h-12 w-16 -translate-y-7 place-items-center"
              alt="paypal"
            />
          </Button>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Cardholder Name
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="e.g., John Doe"
              name="name"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Card Number
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="1234 5678 9012 3456"
              name="number"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Expiration Date
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="MM/YY"
                name="date"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                CVV
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="123"
                name="CVV"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            submit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}