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
        <div className="relative h-full w-full">
            <img
                src="src\assets\Hokusai cherry blossoms.jpeg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center">
                <div className="px-12">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        The Beauty of Nature
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        It is not so much for its beauty that the forest makes a claim upon men.
                    </Typography>
                    <div className="flex gap-2">
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                        <Button size="lg" color="white" variant="text">
                            Gallery
                        </Button>
                        <DialogWithBillingForm />
                        <DialogDefault />
                        <ModalWithImage />
                    </div>
                </div>
            </div>
        </div>
    );
}