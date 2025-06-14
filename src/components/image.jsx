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
            <div className="absolute inset-0 flex flex-col gap-4 justify-center">
                <div className="flex justify-center gap-4">
                    <DialogDefault />
                    {/* <ModalWithImage /> */}
                </div>
            </div>
        </div>
    );
}