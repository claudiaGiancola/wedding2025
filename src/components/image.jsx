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
            {/* <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"> */}
            <figcaption className="absolute bottom-6 left-2/4 flex w-[calc(100%-50rem)] -translate-x-2/4 justify-center rounded-xl border bg-white/75 py-1 shadow-lg shadow-black/5 backdrop-blur-sm">
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
                src="src\assets\Hokusai cherry blossoms.jpeg"
                className="h-[30rem] w-full object-cover"
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