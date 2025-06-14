import Countdown from "./countdown";
import {
    Typography,
    Button,
} from "@material-tailwind/react";
import { DialogDefault, DialogWithBillingForm, ModalWithImage } from "./dialog";

export function ImgWithBlurredCaption() {
    return (
        <figure className="relative w-full rounded-lg">
            <img
                className="h-full w-full rounded-lg object-cover object-center"
                src="src\assets\Invito Matrimonio cropped.jpeg"
                alt="nature image"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex w-[38vw] -translate-x-2/4 justify-center rounded-xl border bg-white/60 py-0.5 shadow-lg shadow-black/5 backdrop-blur-sm">
                <div>
                    <Countdown />
                </div>
            </figcaption>
        </figure>
    );
}

export function ImgWithText() {
    return (
        <div className="relative">
            <img
                src="src\assets\Invito Matrimonio regalo modified.png"
                className=" w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center py-4 px-64">
                    {/* <DialogDefault /> */}
                    <Typography variant="h3" color="green" textGradient>
                        Regalaci...
                    </Typography>

                    <ModalWithImage imgSrc={"src/assets/cherry blossom illustration.jpg"} textHeader={"Un viaggio indimenticabile!"} nome={"Claudia Giancola"} iban={"BE40 9053 8536 7263"} banca={"Wise, Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium"}/>

                    <ModalWithImage imgSrc={"https://preview.redd.it/i-made-a-thermomix-drawing-yesterday-v0-7ztzgb8eh2w81.jpg?auto=webp&s=7e813abc716908b69685fc7184da5d6f9130b24b"} textHeader={"Un gadget fenomenale!"} nome={"Giada Sponzilli"} iban={"ITXXXXXX"} banca={"CheBanca!"}/>
            </div>
        </div>
    );
}