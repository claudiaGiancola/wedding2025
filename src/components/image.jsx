import { Typography } from "@material-tailwind/react";
import Countdown from "./countdown";

export function ImgWithBlurredCaption() {
    return (
        <figure className="relative h-96 w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="src\assets\Invito Matrimonio cropped.jpeg"
                alt="nature image"
            />
            {/* <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"> */}
            <figcaption className="absolute bottom-3 left-2/4 flex w-[calc(100%-31rem)] -translate-x-2/4 justify-center rounded-xl border bg-white/75 py-1 shadow-lg shadow-black/5 backdrop-blur-sm">
                <div>
                    <Countdown />
                </div>
            </figcaption>
        </figure>
    );
}